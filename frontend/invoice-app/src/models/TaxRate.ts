export interface TaxRateData {
  rate: number;
  name: string;
}

export default class TaxRate {
  public rate: number = 0;
  public name!: string;
  constructor(data: TaxRateData) {
    this.rate = data.rate;
    this.name = data.name;
  }
  get percentage() {
    return `${this.rate * 100}%`;
  }
}
