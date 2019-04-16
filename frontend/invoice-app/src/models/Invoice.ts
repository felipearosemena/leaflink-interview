import LineItem, { LineItemData, LineItemId } from './LineItem';
import findIndex from 'lodash/findIndex';
import uuid from 'uuid';

export type InvoiceId = number | string;

export interface InvoiceData {
  id?: InvoiceId;
  lineItems?: LineItem[];
  deductions?: number;
  date?: Date;
  customer?: string;
  customerEmail?: string;
  notes?: string;
}

export default class Invoice implements InvoiceData {
  public id: InvoiceId = uuid.v4();
  public deductions: number = 0;
  public lineItems: LineItem[] = [];
  public date: Date = new Date();
  public customer: string = '';
  public customerEmail: string = '';
  public notes: string = '';

  constructor(data: InvoiceData = { id: uuid.v4(), lineItems: [] }) {
    /**
     * Need to figure out a less verbose way to do this
     */
    if (data.lineItems) {
      data.lineItems.map((line: LineItemData) => {
        this.lineItems.push(new LineItem(line));
      });
    }

    if (data.id) {
      this.id = data.id;
    }

    if (data.deductions) {
      this.deductions = data.deductions;
    }

    if (data.date) {
      this.date = data.date;
    }

    if (data.customer) {
      this.customer = data.customer;
    }

    if (data.customerEmail) {
      this.customerEmail = data.customerEmail;
    }

    if (data.notes) {
      this.notes = data.notes;
    }
  }

  public addLineItem(data: LineItemData, atIndex?: number|undefined): void {
    const newItem = new LineItem(data);

    if (typeof atIndex === 'number') {
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

  public currency(value: number = 0) {
    return `$${value.toFixed(2)}`;
  }

  private getLineIndex(id: LineItemId) {
    return findIndex(this.lineItems, ['id', id]);
  }

  get subtotal() {
    return this.lineItems.reduce((curr, next) => curr + next.total, 0);
  }

  get total() {
    return this.subtotal - this.deductions;
  }
}
