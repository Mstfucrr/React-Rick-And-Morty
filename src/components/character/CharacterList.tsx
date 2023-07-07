
import { Character } from '../../Api/Schemas/character';
import { CharacterElement } from './CharacterElement';
import { CharacterListStyle } from './CharacterList.styles';

export const CharacterList = (props: { characters: Character[] }) => {
    return (
        <CharacterListStyle>

            <div className="d-flex flex-wrap justify-content-center">
                {props.characters.map((character) => {
                    return (
                        <CharacterElement character={character} key={character.id} />
                    );
                })}
            </div>
        </CharacterListStyle>
    );
};


