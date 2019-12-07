import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DeckWithID} from "../../models/deck";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Input()
  public decks: DeckWithID[];

  @Output()
  public createDeckEvent: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public pickADeckEvent: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public deleteDeckEvent: EventEmitter<number> = new EventEmitter<number>();

  public __show: boolean;

  @Input()
  set showNav(newValue: boolean) {
    this.__show = newValue;
    if (newValue) this.showNavigation();
    else this.hideNavigation();
  }

  @Output()
  public showNavChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Toggle the side navigator
   */
  toggleNavigation(): void {
    const el = document.getElementById('navigator');

    if (this.__show) {
      this.hideNavigation()
    } else {
      this.showNavigation()
    }
  }

  private showNavigation() {
    const el = document.getElementById('navigator');

    if (!el.classList.contains('active')) {
      el.classList.add('active');
      this.showNav = true;
    }
  }

  private hideNavigation() {
    const el = document.getElementById('navigator');

    if (el.classList.contains('active')) {
      el.classList.remove('active');
      this.showNav = false;
    }
  }

  /**
   * Send an event to create a deck
   */
  createDeck(): void {
    this.createDeckEvent.emit(true);
    this.toggleNavigation();
  }

  /**
   * Pick a deck
   *
   * @param id The deck's id
   */
  pickADeck(id: number) {
    this.pickADeckEvent.emit(id);
    this.toggleNavigation();
  }

  deleteDeck(id: number) {
    console.log(id);
    this.deleteDeckEvent.emit(id);
  }
}
