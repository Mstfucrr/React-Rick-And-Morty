
import { useEffect, useState } from 'react';
import { Character } from '../../../Api/Schemas/character';
import { SkeletonLoading } from '../../SkeletonLoading';
import { CharacterElement } from './CharacterElement';
import { CharacterListStyle } from './CharacterList.styles';

export const CharacterList = (props: { characters: Character[] }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);


    useEffect(() => {

        const skeletonDuration = 400;
        // Hata tetikleme süresi (örneğin 5 saniye)
        const errorDuration = 3000;

        const skeletonTimer = setTimeout(() => {
            setLoading(props.characters.length > 0 ? false : true);
        }, skeletonDuration);

        const errorTimer = setTimeout(() => {
            setLoading(false);
            setError(props.characters.length > 0 ? false : true);
        }, errorDuration);

        return () => {
            clearTimeout(skeletonTimer);
            clearTimeout(errorTimer);
        };


    }, [props.characters]);




    return (
        <>

            {error && (
                <div className="container p-5">
                    <div className="alert alert-danger" role="alert">
                        Error loading characters
                    </div>
                </div>
            )}

            <CharacterListStyle>

                <div className="d-flex flex-wrap justify-content-center container-fluid">

                    {loading ? (
                        <>
                            {Array.from(Array(20).keys()).map((_, index) => (
                                <SkeletonLoading width={310} height={340}
                                    style={{
                                        borderRadius: '15px'
                                    }}
                                    className="p-4 m-2"
                                    key={index}
                                />
                            ))}
                        </>
                    ) :
                        (
                            props.characters.map((character) => {
                                return (
                                    <CharacterElement character={character} key={character.id} />
                                );
                            })
                        )
                    }
                </div>
            </CharacterListStyle>
        </>
    );
};


