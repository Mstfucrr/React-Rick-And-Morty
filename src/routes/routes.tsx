import { BrowserRouter } from "react-router-dom";
import { Navbar } from "../components/navbar/navbar";
import CharacterRoutes from "./character";
import LocationRoutes from "./location";

export default function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <CharacterRoutes />
            <LocationRoutes />
        </BrowserRouter>
    )
}