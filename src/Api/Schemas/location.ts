import { Character } from "./character";
import { Info, main } from "./main";

export interface Location extends main {
    type: string;
    dimension: string;
    residents: Character[];
    url: string;
    created: string;
}

export interface LocationData {
    location: Location;
}

export interface LocationsData {
    info: Info;
    results: Location[];
}

export interface FilterLocation {
    name?: string;
    type?: string;
    dimension?: string;
}


