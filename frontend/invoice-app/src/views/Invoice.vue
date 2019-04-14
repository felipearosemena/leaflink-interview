<template>
  <div>
    <button @click="clearAll">clear all</button>
    <button @click="clearLines">clear lines</button>
    <button @click="add">add</button>

    <h1>{{ title }}</h1>

    <table>
      <thead>
        <th>description</th>
        <th>quantity</th>
        <th>rate</th>
        <th colspan="2">total</th>
      </thead>

      <tbody>
        <tr v-for="(line, index) in invoice.lineItems" :key="line.id">
          <td><input type="text" v-model="line.description"></td>
          <td><input type="number" v-model="line.quantity"></td>
          <td>
            <autocomplete
              type="number"
              :options="rates"
              :value="line.rate"
              @change="value => line.rate = value"
            />
          </td>
          <td><span>{{ line.total }}</span></td>
          <td><button @click="add(index + 1)">+</button><button @click="remove(line.id)">-</button></td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td>
            <label>Tax Rate: {{ invoice.taxRate }}</label>
            <select @change="setTaxRate($event.target.value)" :value="invoice.taxRate">
              <option value="0">No Tax</option>
              <option value="0.12">HST (12%)</option>
              <option value="0.05">GST (5%)</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>subtotal: {{ invoice.subtotal }}</td>
        </tr>
        <tr>
          <td>
            <label>deductions</label>
            <input type="number" v-model="invoice.deductions">
          </td>
        </tr>
        <tr>
          <td>total: {{ invoice.total }}</td>
        </tr>
      </tfoot>
    </table>

    <alert
      v-for="(message, index) in alerts"
      :message="message"
      :id="index"
      :key="index"
      @done="clearAlert"
    />
  </div>
</template>

<script lang="ts">
import { State, Mutation } from 'vuex-class';
import { Component, Vue, Watch } from 'vue-property-decorator';
import InvoiceModel, { InvoiceId } from '../models/Invoice';
import Autocomplete from '../components/Autocomplete.vue';
import Alert from '../components/Alert.vue';
import uuid from 'uuid';
import { LineItemData } from '../models/LineItem';
import { storage } from '../storage';
import debounce from 'lodash/debounce';

const debouncedSave = debounce((vm: Invoice) => {
  storage.saveState({
    invoice: vm.invoice,
  }, () => {
    vm.lastSaved = new Date();
  });
}, 1000);

@Component({
  components: {
    Autocomplete,
    Alert,
  },
})
export default class Invoice extends Vue {
  public invoice: InvoiceModel = new InvoiceModel();
  public lastSaved: Date = new Date();
  public rates: number[] = [
    100,
    200,
    300,
  ];
  public alerts: string[] = [];

  get id() {
    return this.$route.params.id;
  }

  get title() {
     return this.id ? `Invoice ${this.id}` : 'New Invoice';
  }

  public clearAll() {
    this.invoice = new InvoiceModel();
  }

  public clearLines() {
    this.invoice.lineItems = [];
  }

  public add(index?: number) {
    this.invoice.addLineItem({ id: uuid.v4(), description: '', quantity: 0, rate: 0 }, index);
  }

  public remove(id: InvoiceId) {
    this.invoice.removeLineItem(id);
  }

  public setTaxRate(value: string) {
    this.invoice.taxRate = parseFloat(value);
  }

  public clearAlert(index: number) {
    this.alerts.splice(index, 1);
  }

  @Watch('lastSaved')
  public enqueueAlert() {
    const { lastSaved } = this;
    const time = lastSaved.toLocaleTimeString();
    this.alerts.push(`Autosaved at ${time}`);
  }

  @Watch('invoice', { immediate: false, deep: true })
  public persist() {
    debouncedSave(this);
  }

  private restore() {
    const { invoice } = storage.restoreState();

    if (invoice) {
      this.invoice = invoice;
    }
  }

  private mounted() {
    this.restore();
  }
}
</script>
