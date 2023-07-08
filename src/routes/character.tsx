import { PATH } from "../constants/paths";
import { Route, Routes } from "react-router-dom";
import { CharactersPage } from "../pages/characters";
import { CharacterDetailPage } from "../pages/characterDetail";

export default function CharacterRoutes() {
    return (
        <Routes>
            <Route path={PATH.CHARACTERS}
                Component={() => (
                    <CharactersPage />
                )} />
            <Route path={PATH.CHRACTER_DETAIL}
                Component={() => (
                    <CharacterDetailPage />
                )} />

        </Routes>
    )
}