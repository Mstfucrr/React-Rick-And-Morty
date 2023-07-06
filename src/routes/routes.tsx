import { BrowserRouter } from "react-router-dom";
import CharacterRoutes from "./character";
import LocationRoutes from "./location";

export default function Routes() {
    return (
        <BrowserRouter>
            <CharacterRoutes />
            <LocationRoutes />
        </BrowserRouter>
    )
}