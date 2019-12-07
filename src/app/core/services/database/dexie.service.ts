import Dexie from 'dexie';
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class DexieService extends Dexie {
  private schema = {
    decks: "++id,name,icon,cards,background"
  };

  constructor() {
    super('deck-zone');
    this.version(1).stores(this.schema);
  }

}
