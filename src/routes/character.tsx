import { PATH } from "../constants/paths";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import { SkeletonLoading } from "../components/SkeletonLoading";
import { SkeletonProps } from "react-loading-skeleton";
import { CharactersPage } from "../pages/characters";
import { CharacterDetailPage } from "../pages/characterDetail";

export default function CharacterRoutes() {
    const skeletonProps: SkeletonProps = {
        count: 10,
        height: 50,
        width: 50,
        duration: 2,
        circle: true
    }

    return (
        <Routes>
            <Route path={PATH.CHARACTERS}
                Component={() => (
                    <Suspense fallback={<SkeletonLoading {...skeletonProps} />}>
                        <CharactersPage />
                    </Suspense>
                )} />
            <Route path={PATH.CHRACTER_DETAIL}
                Component={() => (
                    <Suspense fallback={<SkeletonLoading {...skeletonProps} />}>
                        <CharacterDetailPage />
                    </Suspense>
                )} />
                                
        </Routes>
    )
}