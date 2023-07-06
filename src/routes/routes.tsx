import { BrowserRouter } from "react-router-dom";
import CharacterRoutes from "./character";

export default function Routes() {
    return (
        <BrowserRouter>
            <CharacterRoutes />
            
        </BrowserRouter>
    )
}