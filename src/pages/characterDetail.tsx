import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacter } from "../Api/character.api";
import { Character } from "../Api/Schemas/character";
import { CharacterDetailView } from "../components/character/Detail/CharacterDetail";


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
                    setOtherCharacters(data.location.residents);

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
            {loading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {character && otherCharacters && character.location &&
                <CharacterDetailView character={character} otherCharacters={otherCharacters} />
            }
        </>
    )
}
