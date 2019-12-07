import {Injectable} from "@angular/core";
import Dexie from 'dexie';
import {Deck, DeckWithID} from "../../../shared/models/deck";
import {DexieService} from "./dexie.service";

@Injectable({providedIn: 'root'})
export class DeckDAO {
  private table: Dexie.Table<DeckWithID, number>;

  constructor(private database: DexieService) {
    this.table = this.database.table("decks")
  }


  /**
   * Retrieve all decks from Dexie
   *
   * @return All decks
   */
  public getAllDecks(): Promise<DeckWithID[]> {
    return this.table.toArray();
  }

  /**
   * Get a deck according to its id
   *
   * @param id The card's id
   *
   * @return The card with the given ID
   */
  public getDeck(id: number): Promise<DeckWithID> {
    return this.table.get(id);
  }

  /**
   * Create a new Deck
   * @param deck The deck to create
   *
   * @return A promise with the deck's id
   */
  createDeck(deck: Deck): Promise<number> {
    return this.table.add(<DeckWithID> deck)
  }

  deleteDeck($event: number) {
    return this.table.delete($event);
  }
}
