export class Deck {
  public name: string = "";
  public icon: string = "";
  public cards: string[] = [];
  public background: string = "";
}

export class DeckWithID extends Deck {
  public id: number;
}
