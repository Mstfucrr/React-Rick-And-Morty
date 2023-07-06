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
    locations: {
        info: Info;
        results: Location[];
    }
}

