import LineItem, { LineItemData, LineItemId } from './LineItem';
import findIndex from 'lodash/findIndex';
import uuid from 'uuid';

export type InvoiceId = number | string;

export interface InvoiceData {
  id: InvoiceId;
  taxRate?: number;
  lineItems: LineItem[];
}

const defaultTaxRate = 0;

export default class Invoice {
  public id!: InvoiceId;
  public taxRate: number = defaultTaxRate;
  public amountReceived: number = 0;
  public deductions: number = 0;
  public lineItems: LineItem[] = [];

  constructor(data: InvoiceData = { id: uuid.v4(), lineItems: [] }) {
    if (data.taxRate) {
      this.taxRate = data.taxRate;
    }

    data.lineItems.map((line: LineItemData) => {
      this.lineItems.push(new LineItem(line));
    });
  }

  public addLineItem(data: LineItemData, atIndex?: number): void {
    const newItem = new LineItem(data);

    if (atIndex) {
      this.lineItems.splice(atIndex, 0, newItem);
    } else {
      this.lineItems.push(newItem);
    }
  }

  public removeLineItem(id: LineItemId) {
    const index = this.getLineIndex(id);

    if (index > -1) {
      this.lineItems.splice(index, 1);
    }
  }

  private getLineIndex(id: LineItemId) {
    return findIndex(this.lineItems, ['id', id]);
  }

  get subtotal() {
    return this.lineItems.reduce((curr, next) => curr + next.total, 0);
  }

  get total() {
    const tax = this.subtotal * this.taxRate;
    return this.subtotal + tax - this.deductions;
  }
}