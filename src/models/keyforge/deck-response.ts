export enum Expansions {
    CallOfTheArchons = 341,
    AgeOfAscension = 435,
    WorldsCollide = 452,
    MassMutations = 479,
    DarkTidings = 496,
    WindsOfExchange = 600,
    Unchained2022 = 601,
    VaultMasters2023 = 609,
    GrimReminders = 700,
    Menagerie2024 = 722,
    VaultMasters2024 = 737,
    // TODO: Add the new ones
}

export type DeckResponse = {
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