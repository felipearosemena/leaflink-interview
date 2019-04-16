import uuid from 'uuid';

export function newLineItem() {
  return { id: uuid.v4(), description: '', quantity: 0, rate: 0, taxRate: 0 };
}
