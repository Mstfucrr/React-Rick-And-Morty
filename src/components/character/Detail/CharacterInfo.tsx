import { Character } from '../../../Api/Schemas/character';
import { CharacterItemInfo, CharacterItemStatusIcon } from '../List/CharacterElement.styles';
import { CharacterItemImg, CharacterName } from "./CharacterInfo.styles"

export const CharacterInfo = (
    props: { character: Character }
) => {
    return (
        <div className="d-flex flex-column pb-3">
            <div className="row">
                <div className="col-12">
                    <CharacterItemImg src={props.character.image} alt={props.character.name} />
                </div>
            </div>
            <CharacterName className="row mt-3">
                <div className="col-12">
                    {props.character.name}
                </div>
            </CharacterName>
            <div className="row">
                <CharacterItemInfo className="col-6">
                    <CharacterItemStatusIcon status={props.character.status} />
                    {props.character.status}
                </CharacterItemInfo>
                <div className="col-6 text-right">
                    {props.character.species} - {props.character.gender}
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {props.character.location.dimension} <br/> {props.character.origin.name}
                </div>
            </div>
        </div>
    )
}
