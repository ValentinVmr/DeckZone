import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { IconsEnum } from "../../icons.enum";
import {Deck, DeckWithID} from "../../models/deck";
import {DeckDAO} from "../../../core/services/database/deck.dexie";

@Component({
  selector: 'app-add-deck-form',
  templateUrl: './add-deck-form.component.html',
  styleUrls: ['./add-deck-form.component.scss']
})
export class AddDeckFormComponent implements OnInit {

  @ViewChild('cardsPaths', undefined)
  public cardsPaths;

  @ViewChild('backgroundPath', undefined)
  public backgroundPath;

  @Output()
  private deckCreated: EventEmitter<DeckWithID> = new EventEmitter<DeckWithID>();

  public icons = Object.values(IconsEnum);
  public deck: Deck = new Deck();

  constructor(private deckDAO: DeckDAO) { }

  ngOnInit() {
  }

  /**
   * @return true iff the button is disabled, false otherwise
   */
  isSubmitDisabled(): boolean {
    return this.deck.cards.length == 0 ||
      this.deck.background.length == 0 ||
      this.deck.icon.length == 0 ||
      this.deck.name.length == 0;
  }

  pickAnIcon(icon: string) {
    this.deck.icon = icon
  }

  getCardsPaths() {
    this.deck.cards = (<File[]>Object.values(this.cardsPaths.nativeElement.files)).map(it => it.path)
  }

  getBackgroundPath() {
    this.deck.background = this.backgroundPath.nativeElement.files[0].path
  }

  createTheDeck() {
    this.deckDAO.createDeck(this.deck).then(id => {
      const deckWithId: DeckWithID = <DeckWithID>this.deck;
      deckWithId.id = id;

      this.deckCreated.emit(deckWithId);
      this.deck = new Deck();
    })
  }
}
