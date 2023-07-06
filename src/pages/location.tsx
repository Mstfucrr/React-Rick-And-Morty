import { useState } from "react";
import { useParams } from "react-router-dom";



export const LocationsPage = () => {
    const [page, setPage] = useState(1);
    const { id } = useParams<{ id: string }>();

    return (
        <div>
            Locations
        </div>
    )
}