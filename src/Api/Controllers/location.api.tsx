import { LocationsData ,Location , FilterLocation } from "../Schemas/location";
import { getLocationApi , getLocationsApi } from "../server/location.api";


export const getLocation = async (id: string) => {
    const data = await getLocationApi(id);
    if (data) {
        return data as Location;
    }
    return {} as Location;
}

export const getLocations = async (page: number , filter? : FilterLocation) => {
    const data = await getLocationsApi(page , filter);
    if (data) {
        return data as LocationsData;
    }
    return {} as LocationsData;
}
