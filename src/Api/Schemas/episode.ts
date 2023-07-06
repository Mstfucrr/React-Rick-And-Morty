import { Character } from "./character";
import { main } from "./main";

export interface Episode extends main {
    air_date: string;
    episode: string;
    characters: Character[];
    created: string;
  }