import { Component, OnInit } from '@angular/core';
import {Deck, DeckWithID} from "../shared/models/deck";
import {DeckDAO} from "../core/services/database/deck.dexie";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public decks: Promise<Deck[]>;
  public showDeckCreationForm: boolean = true;
  public showNav: boolean = false;
  public showedDeck: DeckWithID = null;

  constructor(private deckDAO: DeckDAO) {
    this.decks = this.deckDAO.getAllDecks();
  }

  ngOnInit(): void { }

  createDeck() {
    this.showDeckCreationForm = true;
    this.showedDeck = null;
  }

  deckCreated($event: DeckWithID) {
    this.decks = this.deckDAO.getAllDecks();
    this.showNav = true;
  }

  deleteDeck($event: number) {
    if (this.showedDeck && this.showedDeck.id === $event) {
      this.showedDeck = null;
    }

    this.deckDAO.deleteDeck($event).then(it => {
      this.decks = this.deckDAO.getAllDecks();
    })
  }

  pickADeck(deckId: number) {
    this.deckDAO.getDeck(deckId).then(deck => {
      this.showedDeck = deck;
      this.showNav = false;
      this.showDeckCreationForm = false;
    });
  }


}
