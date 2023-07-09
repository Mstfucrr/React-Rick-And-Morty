import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../Api/Controllers/character.api";
import { Character } from "../Api/Schemas/character";
import { CharacterDetailView } from "../components/character/Detail/CharacterDetail";
import { SkeletonLoading } from "../components/SkeletonLoading";


export const CharacterDetailPage = () => {
    var params = useParams<{ id: string }>();
    var id = params.id;
    const [character, setCharacter] = useState<Character>({} as Character);
    const [otherCharacters, setOtherCharacters] = useState<Character[]>([] as Character[]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                await getCharacter(id as string).then((data) => {
                    setCharacter(data);
                    setOtherCharacters(data.location.residents.filter((item) => item.status === data.status));
                });
                setError(false);
            } catch (error) {
                setError(true);
            }
            setLoading(false);

        }

        fetchData();
    }, [id]);

    return (
        <>
            {error &&
                <div className="container p-5">
                    <div className="alert alert-danger" role="alert">
                        Error loading character
                    </div>
                </div>

            }
            {loading &&
                <div className="pl-5 pr-5 row justify-content-between">
                    <div className="col-md-4">
                        <SkeletonLoading width="100%" height={400} />
                    </div>
                    <div className="col-lg-8" style={{
                        maxHeight: "70vh",
                        overflowY: "auto"
                    }}>
                        <SkeletonLoading width="100%" height={600} />
                    </div>
                </div>
            }
            {character && otherCharacters && character.location &&
                <CharacterDetailView character={character} otherCharacters={otherCharacters} />
            }
        </>
    )
}
