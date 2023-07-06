import { Episode } from "./episode";
import { Info, main } from "./main";

export interface Character extends main {
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: Location;
    location: Location;
    image: string;
    episode: Episode[];
}

export interface CharacterData {
    character: Character;
}

export interface CharactersData {
    info: Info;
    results: Character[];
}

export interface FilterCharacter {
    name?: string;
    status?: string;
    species?: string;
    type?: string;
    gender?: string;
}

