import axios from 'axios';
import { LocationByIdQuery, LocationsQuery } from '../queries/location.query';
import { API_ENDPOINT } from './index.api';


const getLocationApi = async (id) => {

    var query = LocationByIdQuery();
    try {
        const res = await axios.post(API_ENDPOINT, { query, variables: { id } })
            .then(response => {
                console.log(response.data.data.location);
                return response.data.data.location;
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


const getLocationsApi = async (page, filter) => {
    var query = LocationsQuery();
    try {
        const response = await axios.post(API_ENDPOINT, { query, variables: { page, filter } })
            .then(response => {
                console.log(response.data.data.locations);
                return response.data.data.locations;
            })
            .catch(error => {
                console.error(error);
            });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export { getLocationApi, getLocationsApi };