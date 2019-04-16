import 'jest';
import Invoice from '../../src/models/Invoice';
import LineItem from '../../src/models/LineItem';

const lineItem = (data: {} = {}): LineItem => new LineItem({
  id: 1,
  description: 'desc',
  quantity: 1,
  rate: 1,
  taxRate: 0,
  ...data,
});

describe('Invoice model', () => {
  test('initializes with correct default values', () => {
    const invoice = new Invoice({
      id: 1,
    });
    expect(invoice.lineItems).toEqual([]);
    expect(invoice.id).toEqual(1);
  });

  test('adds line items', () => {
    const invoice = new Invoice();
    const item = lineItem();

    invoice.addLineItem(item);
    expect(invoice.lineItems).toEqual([item]);

    const item2 = {...item, id: 2};
    invoice.addLineItem(item2);
    expect(invoice.lineItems).toEqual([item, item2]);

    // Adds at index (shifts other items to make room)
    const item3 = {...item, id: 3};
    invoice.addLineItem(item3, 0);
    expect(invoice.lineItems).toEqual([item3, item, item2]);
  });

  test('removes line items', () => {
    const item = lineItem({
      id: 'uuid',
    });
    const invoice = new Invoice({
      lineItems: [item],
    });

    invoice.removeLineItem('uuid');
    expect(invoice.lineItems).toEqual([]);
  });

  test('calculates subtotal', () => {
    const item = lineItem({
      quantity: 2,
      rate: 100,
    });
    const invoice = new Invoice({
      lineItems: [item, item, item],
    });
    expect(invoice.subtotal).toEqual(600);
  });

  test('calculates total', () => {
    const item = lineItem({
      quantity: 2,
      rate: 100,
      taxRate: 1,
    });
    const invoice = new Invoice({
      deductions: 100,
      lineItems: [item, item],
    });
    expect(invoice.total).toEqual(700);
  });
});
