import request from "graphql-request";
import { API_ENDPOINT } from ".";
import { LocationByIdQuery, LocationsQuery } from "./query/location.query";
import { LocationsData ,Location , FilterLocation } from "./Schemas/location";


export const getLocation = async (id: string) => {
    var query = LocationByIdQuery();
    const { location }: { location: Location } = await request(API_ENDPOINT, query, { id });
    return location;
}

export const getLocations = async (page: number , filter? : FilterLocation) => {
    var query = LocationsQuery();
    const { locations }: { locations: LocationsData } = await request(API_ENDPOINT, query, { page , filter });
    return locations;
}
