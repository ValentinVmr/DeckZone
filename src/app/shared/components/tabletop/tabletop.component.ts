import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeckWithID} from "../../models/deck";

@Component({
  selector: 'app-tabletop',
  templateUrl: './tabletop.component.html',
  styleUrls: ['./tabletop.component.scss']
})
export class TabletopComponent implements OnInit {
  @Output()
  private deckCreatedEvent: EventEmitter<DeckWithID> = new EventEmitter<DeckWithID>();

  @Input()
  public showAddDeckForm: boolean;

  @Input()
  public showedDeck: DeckWithID;

  constructor() { }

  ngOnInit() {
  }

  deckCreated($event) {
    this.deckCreatedEvent.emit($event)
  }
}
