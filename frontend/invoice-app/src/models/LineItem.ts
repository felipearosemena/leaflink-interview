export type LineItemId = number | string;

export interface LineItemData {
  id: LineItemId;
  description: string;
  quantity: number;
  rate: number;
}

export default class LineItem implements LineItemData {
  public id: LineItemId;
  public description: string = '';
  public quantity: number = 0;
  public rate: number = 0;
  constructor(data: LineItemData) {
    this.id = data.id;
    this.description = data.description;
    this.quantity = data.quantity;
    this.rate = data.rate;
  }
  get total(): number {
    return this.quantity * this.rate;
  }
}
