export type Deck = {
    data: DeckData;
    _linked: DeckLinked;
};

type DeckData = {
    id: string;
    name: string;
    expansion: number;
};

type DeckLinked = {
    houses: DeckHouse[];
}

type DeckHouse = {
    name: string;
    image: string;
}