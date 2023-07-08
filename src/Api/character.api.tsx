import request from "graphql-request";
import { API_ENDPOINT } from ".";
import { getLocation } from "./location.api";
import { CharacterByIdQuery, CharactersQuery } from "./query/character.query";
import { Character, FilterCharacter , CharactersData } from "./Schemas/character";
import { Location } from "./Schemas/location";


export const getCharacter = async (id: string) => {
    var query = CharacterByIdQuery();
    const { character }: { character: Character } = await request(API_ENDPOINT, query , { id });
    return character;
}

export const getCharacters = async (page: number , filter? : FilterCharacter) => {
    var query = CharactersQuery();
    const { characters }: { characters: CharactersData} = await request(API_ENDPOINT, query , { page , filter });
    return characters;
}

export const getCharactersByLocation = async (id: string , page: number , filter? : FilterCharacter) => {
    // FilterCharacter ile Tüm characterler getirip içindeki 
    function filterLocationResidents(location: Location, filter: FilterCharacter): Character[] {
        return location.residents.filter((character) => {
            if (filter.name && !character.name.toLowerCase().includes(filter.name.toLowerCase())) {
                return false;
            }
            if (filter.status && character.status.toLowerCase() !== filter.status.toLowerCase()) {
                return false;
            }
            if (filter.species && character.species.toLowerCase() !== filter.species.toLowerCase()) {
                return false;
            }
            if (filter.type && !character.type.toLowerCase().includes(filter.type.toLowerCase())) {
                return false;
            }
            if (filter.gender && character.gender.toLowerCase().includes(filter.gender.toLowerCase())) {
                return false;
            }
            
            return true;
        });

    }
    const location = await getLocation(id);
    const characters = filterLocationResidents(location, filter ?? {});
    const info = {
        count: characters.length,
        pages: Math.ceil(characters.length / 20),
        next: null,
        prev: null
    }
    const data = {
        info,
        results: characters.slice((page - 1) * 20, page * 20)
    } as CharactersData;

    data.info.next = data.results.length > 0 ? page + 1 : null;
    data.info.prev = page > 1 ? page - 1 : null;
    

    return data;    
}