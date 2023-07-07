import request from "graphql-request";
import { API_ENDPOINT } from ".";
import { CharacterByIdQuery } from "./query/character.query";
import { Character } from "./Schemas/character";


export const getCharacter = async (id: string) => {
    var query = CharacterByIdQuery();
    const { character }: { character: Character } = await request(API_ENDPOINT, query , { id });
    return character;
}