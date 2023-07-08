import { useEffect, useState } from "react";
import { getLocations } from "../Api/location.api";
import { Location } from "../Api/Schemas/location";
import { Info } from "../Api/Schemas/main";
import { LocationList } from "../components/location/LocationList";
import { PageButtons } from "../components/PageNumbersBar";



export const LocationsPage = () => {

    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);
    const [locations, setLocations] = useState<Location[]>([]);
    const [info, setInfo] = useState<Info>(undefined!);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getLocations(page).then((data) => {
                    setLocations(data.results);
                    setInfo(data.info);
                });
            } catch (error) {
                setError(true);
            }

        }
        fetchData();
    }, [page]);


    return (
        <>
            <LocationList locations={locations} />
            <PageButtons page={page} setPage={setPage} info={info} />
        </>
    )
}
