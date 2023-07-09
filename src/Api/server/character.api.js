import axios from 'axios';
import { API_ENDPOINT } from './index.api';
import { CharacterByIdQuery, CharactersQuery } from '../queries/character.query';


const getCharacterApi = async (id) => {

    var query = CharacterByIdQuery();
    try {
        const res = await axios.post(API_ENDPOINT, { query, variables: { id } })
            .then(response => {
                console.log(response.data.data.character);
                return response.data.data.character;
            })
            .catch(error => {
                console.error(error);
                return null;
            });
        return res;

    } catch (error) {
        console.log(error);
    }
}


const getCharactersApi = async (page, filter) => {
    var query = CharactersQuery();
    try {
        const response = await axios.post(API_ENDPOINT, { query, variables: { page, filter } })
            .then(response => {
                console.log(response.data.data.characters);
                return response.data.data.characters;
            })
            .catch(error => {
                console.error(error);
            });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export { getCharacterApi, getCharactersApi };