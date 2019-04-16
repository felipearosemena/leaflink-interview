<template>
  <div class="wrapper">
    <header class="header">

      <h1>{{ title }}</h1>
      <div class="header-fields">
        <div class="header-field">
          <label for="customer">To</label>
          <input id="customer" type="text" name="customer" v-model="invoice.customer" />
        </div>

        <div class="header-field">
          <label for="customer-email">Email</label>
          <input id="customer-email" type="email" name="customer-emails" v-model="invoice.customerEmail" />
        </div>

        <div class="header-field">
          <label for="customer-notes">Notes</label>
          <textarea id="customer-notes" rows="3" maxlength="500" name="customer-notes" v-model="invoice.notes" />
        </div>
      </div>
    </header>

    <div class="table-wrapper">
      <table>
        <thead class="row">
          <th class="col-controls">
            <div>
              <icon-button @click="add" v-if="!invoice.lineItems.length">
                <add />
              </icon-button>
              <icon-button @click="clearLines" v-if="invoice.lineItems.length">
                <refresh />
              </icon-button>
            </div>
          </th>
          <th class="col-desc">description</th>
          <th class="col-qty">quantity</th>
          <th class="col-rate">rate</th>
          <th class="col-total">total</th>
          <th class="col-tax-rate">tax rate</th>
        </thead>

        <tbody>
          <tr v-for="(line, index) in invoice.lineItems" :key="line.id" class="body-row">
            <td class="cell-controls">
              <div class="cell-controls-inner">
                <icon-button @click="add(index + 1)">
                  <add />
                </icon-button>
                <icon-button @click="remove(line.id)">
                  <remove />
                </icon-button>
              </div>
            </td>
            <td class="cell-desc cell-input" data-title="description">
              <input type="text" :name="`${line.id}-description`" v-model="line.description" @click="select">
            </td>
            <td class="cell-qty cell-input" data-title="quantity">
              <input type="number" :name="`${line.id}-quantity`" v-model="line.quantity" @click="select">
            </td>
            <td class="cell-rate cell-input" data-title="rate">
              <input type="number" :name="`${line.id}-rate`" v-model="line.rate" @click="select">
            </td>
            <td class="cell-total cell-input" data-title="total">
              <input type="number" :name="`${line.id}-total-before-tax`" v-model="line.totalBeforeTax" @click="select">
            </td>
            <td class="cell-tax-rate cell-input" data-title="tax rate">
              <select :name="`${line.id}-tax-rate`" v-model="line.taxRate">
                <option v-for="item in taxRates" :key="item.rate" :value="item.rate">
                  {{ item.name }} ({{ item.percentage }})
                </option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      <table class="footer">
        <tfoot>
          <tr class="footer-row">
            <td>Subtotal:</td>
            <td>{{ invoice.currency(invoice.subtotal) }}</td>
          </tr>

          <tr class="footer-row">
            <td>
              <label for="discount-input">discount</label>
            </td>
            <td class="cell-input">
              <input id="discount-input" type="number" name="discount" v-model="invoice.deductions" @click="select">
            </td>
          </tr>

          <tr class="footer-row">
            <td>
              total
            </td>
            <td>
              {{ invoice.currency(invoice.total) }}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>

    <alert
      v-for="(message, index) in alerts"
      :message="message"
      :id="index"
      :key="index"
    />
  </div>
</template>

<style lang="scss">
  .wrapper {
    position: relative;
    max-width: 1280px;
    min-height: 100vh;
    padding: 5rem 1rem 8rem;
    margin: 0 auto 4rem;
    background: white;
  }

  .header {
    max-width: 40rem;
    margin: 1rem auto 2rem;
  }

  .header h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .header-field {
    display: flex;
    align-items: center;
  }

  .header-field label {
    white-space: nowrap;
    padding-right: 1rem;
    width: 4rem;
    flex-shrink: 0;
  }

  .table-wrapper {
    background: white;
    margin: 0 -1rem;
  }

  .body-row {
    &:hover {
      background: var(--grandaddy-purp-light);
    }
  }

  .col-controls {
    margin-bottom: 1rem;
    width: 100%;
  }

  /* Desktop column layout */
  @media (min-width: 768px) {
    .col-controls {
      width: 80px;
    }

    .col-desc {
      width: 50%;
      text-align: left;
    }

    .col-qty,
    .col-rate,
    .col-total {
      text-align: right;
    }

    .col-qty {
      width: 20%;
    }

    .col-rate {
      width: 20%;
    }

    .col-total {
      width: 20%;
    }

    .col-tax-rate {
      width: 160px;
    }
  }
  /* End column layout */

  .cell-controls-inner {
    display: flex;
    justify-content: space-around;
  }

  .cell-controls {
    vertical-align: middle;
    padding: .5rem;
    width: 80px;
  }

  .cell-desc {
    width: auto;
  }

  .cell-input {
    padding: 0;

    input,
    select {
      height: 100%;
      border: none;
    }
  }

  .cell-rate,
  .cell-qty,
  .cell-total,
  .cell-tax-rate {
    width: 50%;

    &:nth-last-child(1),
    &:nth-last-child(2) {
      border-bottom: none;
    }
  }

  .cell-rate input,
  .cell-qty input,
  .cell-total input,
  .footer-row input {
    text-align: right;
  }

  .footer {
    border-top: 2px solid var(--c-green-crack);
  }

  .footer-row td {
    line-height: 1rem;
    border: none;
    text-align: right;

    @media (max-width: 768px) {
      width: 50%;
      text-align: right;
      padding: 0 1rem;
      justify-content: flex-end;
    }
  }

  .footer-row td:last-child {
    width: 160px;
  }
</style>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import debounce from 'lodash/debounce';

import { storage } from '@/storage';
import { newLineItem } from '@/utils';

import InvoiceModel, { InvoiceData, InvoiceId } from '@/models/Invoice';
import { LineItemData } from '@/models/LineItem';
import TaxRate, { TaxRateData } from '@/models/TaxRate';

import Alert from '@/components/Alert.vue';
import IconButton from '@/components/IconButton.vue';
import Add from '@/components/IconAdd.vue';
import Remove from '@/components/IconRemove.vue';
import Refresh from '@/components/IconRefresh.vue';

const debouncedSave = debounce((vm: Invoice) => {
  storage.saveState({
    invoice: vm.invoice,
  }, () => {
    vm.lastSaved = new Date();
  });
}, 1000);

const taxRates = [
  {
    name: 'Zero Rated',
    rate: 0,
  }, {
    name: 'GST',
    rate: 0.05,
  },
  {
    name: 'HST',
    rate: 0.13,
  },
];

@Component({
  components: {
    Alert,
    IconButton,
    Add,
    Remove,
    Refresh,
  },
  props: {
    invoiceData: Object,
  },
})
export default class Invoice extends Vue {
  public invoiceData!: InvoiceData;
  public invoice: InvoiceModel = new InvoiceModel();
  public lastSaved: Date = new Date();
  public taxRates: TaxRate[] = taxRates.map((data) => new TaxRate(data));
  public alerts: string[] = [];

  get id() {
    return this.invoice.id;
  }

  get title() {
    return this.invoice.id ? `Invoice` : 'New Invoice';
  }

  public reset(data: object) {
    this.invoice = new InvoiceModel(data);
  }

  public clearLines() {
    this.invoice.lineItems = [];
  }

  public select(e: MouseEvent) {
    const target = e.target as HTMLInputElement;
    target.select();
  }

  public add(index?: number) {
    this.invoice.addLineItem(newLineItem(), index);
  }

  public remove(id: InvoiceId) {
    this.invoice.removeLineItem(id);
  }

  @Watch('lastSaved')
  public enqueueAlert() {
    const { lastSaved } = this;
    const time = lastSaved.toLocaleTimeString();
    this.alerts = [`Autosaved at ${time}`];
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

    if (this.invoiceData) {
      this.reset(this.invoiceData);
    }
  }
}
</script>
