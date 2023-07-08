import { PATH } from "../constants/paths";
import { Route, Routes } from "react-router-dom";
import { LocationsPage } from "../pages/location";

export default function LocationRoutes() {
    return (
        <Routes>
            <Route path={PATH.LOCATIONS}
                Component={() => (
                    <LocationsPage />
                )} />
            <Route path={PATH.HOME}
                Component={() => (
                    <LocationsPage />
                )} />


        </Routes>
    )
}