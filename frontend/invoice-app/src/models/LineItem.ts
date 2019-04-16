export type LineItemId = number | string;

export interface LineItemData {
  id: LineItemId;
  description: string;
  quantity: number;
  rate: number;
  taxRate: number;
}

export default class LineItem implements LineItemData {
  public id: LineItemId;
  public description: string = '';
  public quantity: number = 0;
  public rate: number = 0;
  public taxRate: number = 0;
  constructor(data: LineItemData) {
    this.id = data.id;
    this.description = data.description;
    this.quantity = data.quantity;
    this.rate = data.rate;
    this.taxRate = data.taxRate || 0;
  }
  get totalBeforeTax() {
    return this.quantity * this.rate;
  }

  set totalBeforeTax(value) {
    if (!this.quantity) {
      this.quantity = 1;
    }

    this.rate = value / this.quantity;
  }

  get tax(): number {
    return this.totalBeforeTax * this.taxRate;
  }
  get total(): number {
    return this.totalBeforeTax + this.tax;
  }
}
