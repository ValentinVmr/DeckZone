import {Component, Input, OnInit} from '@angular/core';
import {DeckWithID} from "../../models/deck";

@Component({
  selector: 'app-show-deck',
  templateUrl: './show-deck.component.html',
  styleUrls: ['./show-deck.component.scss']
})
export class ShowDeckComponent implements OnInit {

  @Input()
  public showedDeck: DeckWithID;
  pickedCard: string;


  constructor() { }

  ngOnInit() {
  }

  turnACard() {
    const el = document.getElementById('flip-card')

    if(el.classList.contains('pick')) {
      el.classList.remove('pick')
    } else {
      this.pickedCard = this.pickRandomElementFromItem(this.showedDeck.cards);
      el.classList.add('pick')
    }
  }

  private pickRandomElementFromItem(items: string[]) {
    return items[Math.floor(Math.random()*items.length)];
  }
}
