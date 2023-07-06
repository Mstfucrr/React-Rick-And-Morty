import { PATH } from "../constants/paths";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";

export default function CharacterRoutes() {
    return (
        <Routes>
            <Route path={PATH.CHARACTERS}
                Component={() => (
                    <Suspense fallback={ <div>Loading...</div> }>
                        <div>Characters</div>
                    </Suspense>
                )} />
        </Routes>
    )
}