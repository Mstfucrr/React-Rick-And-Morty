import { useEffect, useState } from "react";
import { Character, FilterCharacter } from "../Api/Schemas/character";
import { Info } from "../Api/Schemas/main";
import { getCharactersByLocation } from "../Api/character.api";
import { FilterByStatusList } from "../components/character/filters/FilterByStatusList";
import {colors} from "../assets/Colors/Colors";
import { CharacterList } from "../components/character/List/CharacterList";


export const CharactersPage = () => {
    const [page, setPage] = useState(1);
    const [error, setError] = useState(false);
    const [info, setInfo] = useState<Info>(undefined!);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [filter, setFilter] = useState<FilterCharacter>(undefined!);

    const params = new URLSearchParams(window.location.search);
    const locationid = params.get('location');

    const name = params.get('name');
    const status = params.get('status');
    const species = params.get('species');
    const type = params.get('type');
    const gender = params.get('gender');

    useEffect(() => {
        const fetchData = async () => {
            const filter = {
                name: name ? name : undefined,
                status: status ? status : undefined,
                species: species ? species : undefined,
                type: type ? type : undefined,
                gender: gender ? gender : undefined
            } as FilterCharacter;
            setFilter(filter);
            setPage(params.get('page') ? parseInt(params.get('page') as string) : 1);
            try {
                await getCharactersByLocation(locationid as string, page, filter).then((data) => {
                    setCharacters(data.results);
                    setInfo(data.info);
                });
                setError(false);

            } catch (error) {
                setError(true);
            }

        }
        fetchData();
    }, [page]);

    var statusList = [
        {
            name: "Dead",
            active: true,
            colorSet : colors.status.Dead
        },
        {
            name: "Alive",
            active: true,
            colorSet : colors.status.Alive
        },
        {
            name: "unknown",
            active: true,
            colorSet : colors.status.Unknown
        },
        {
            name: "All",
            active: true,
            colorSet : colors.status.All
        }
    ]

    return (
        <>
            <FilterByStatusList status={statusList} location={locationid as string} />
            <CharacterList characters={characters} />
        </>
    )
}


