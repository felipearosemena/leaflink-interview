import { shallowMount } from '@vue/test-utils';
import Invoice from '@/views/Invoice.vue';

function getLineItems() {
  return [
    {
      id: 1,
      description: 'description',
      quantity: 2,
      rate: 100,
      taxRate: 0.03,
    },
  ];
}

// const ctor = Vue.extend(Invoice);
// const vm = new ctor();
// vm.$mount();

describe('Invoice.vue', () => {
  it('renders', () => {
    const wrapper = shallowMount(Invoice, {
      propsData: {},
    });

    expect(wrapper).toBeDefined();
  });

  it('initializes with data', () => {
    const lineItems = getLineItems();
    const lastSaved = new Date();
    const taxRates =  [
      { rate: 0.03, name: 'New Rate'},
    ];
    const wrapper = shallowMount(Invoice, {
      propsData: {
        invoiceData: {
          id: 'my-id',
          lineItems,
        },
        taxRates,
        lastSaved,
      },
    });
    expect(wrapper).toBeDefined();
  });

  it('handles CRUD operations', () => {
    const lineItems = getLineItems();
    const wrapper = shallowMount(Invoice, {
      propsData: {
        invoiceData: {
          id: 'my-id',
          lineItems,
        },
      },
    });

    const vm = wrapper.vm as any;
    const currentInvoice = vm.$data.invoice;

    vm.add();
    expect(vm.$data.invoice.lineItems.length).toEqual(2);

    vm.remove(lineItems[0].id);
    expect(vm.$data.invoice.lineItems.length).toEqual(1);

    vm.clearLines();
    expect(vm.$data.invoice.lineItems.length).toEqual(0);

    vm.reset();
    expect(vm.$data.invoice).not.toEqual(currentInvoice);
  });
});
