import { Character } from '../../../Api/Schemas/character';
import { OtherCharacterItemView } from "./OtherCharacterItem";
import { OtherCharactersTitle } from "./OtherCharacters.styles"


export const OtherCharactersView = (
    props: { otherCharacters: Character[] }
) => {
    return (
        <div className="d-flex flex-column">
            <OtherCharactersTitle className="row">
                <div className="col-12">
                    Other characters
                </div>
            </OtherCharactersTitle>
            <div>
                <div className="d-flex flex-wrap">
                    {props.otherCharacters.map((character) => {
                        return (
                            <OtherCharacterItemView character={character} key={character.id} />
                        );
                    })}
                    
                </div>
            </div>
        </div>
    )
}