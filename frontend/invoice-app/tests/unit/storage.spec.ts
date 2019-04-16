import { storage } from '@/storage';

const KEY = 'invoice-app'; // Need to dedupe this

describe('storage', () => {
  it('saves data to localStorage', () => {
    const afterSave = jest.fn();
    const state = {
      invoice: {
        id: 'invoice-id',
      },
    };
    storage.saveState(state, afterSave);
    expect(localStorage.getItem(KEY)).toEqual(JSON.stringify(state));
  });

  it('gets data from localStorage', () => {
    const state = {
      invoice: {
        id: 'invoice-id',
      },
    };
    storage.saveState(state);
    const restored = storage.restoreState();
    expect(restored.invoice.id).toEqual(state.invoice.id);
  });
});
