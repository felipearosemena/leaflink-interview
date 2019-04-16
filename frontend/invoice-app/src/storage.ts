import Invoice from './models/Invoice';
import Router from 'vue-router';

const KEY = 'invoice-app';

class Storage {
  public restoreState() {
    const stored: string = localStorage.getItem(KEY) || '{}';
    const parsed = JSON.parse(stored);

    if (parsed.invoice) {
      parsed.invoice = new Invoice(parsed.invoice);
      parsed.lastSaved = new Date();
    }

    return parsed;
  }
  public saveState(state: object, afterSave: () => void) {
    const data = JSON.stringify(state);
    localStorage.setItem(KEY, data);
    afterSave();
  }
}

const storage = new Storage();

export { storage };
