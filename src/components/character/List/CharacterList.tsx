
import { useEffect, useState } from 'react';
import { Character } from '../../../Api/Schemas/character';
import { SkeletonLoading } from '../../SkeletonLoading';
import { CharacterElement } from './CharacterElement';
import { CharacterListStyle } from './CharacterList.styles';

export const CharacterList = (props: { characters: Character[] }) => {
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(props.characters.length === 0);
    }, [props.characters]);




    return (
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
    );
};


