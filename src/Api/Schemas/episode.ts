import { Character } from "./character";
import { Info, main } from "./main";

export interface Episode extends main {
  air_date: string;
  episode: string;
  characters: Character[];
  created: string;
}

export interface EpisodeData {
  episode: Episode;
}

export interface EpisodesData {
  info: Info;
  results: Episode[];
}

export interface FilterEpisode {
  name?: string;
  episode?: string;
}
