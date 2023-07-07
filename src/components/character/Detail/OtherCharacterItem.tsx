import { Character } from '../../../Api/Schemas/character';
import { OtherCharacterItem, OtherCharacterItemImg, OtherCharacterItemLocationDimension, OtherCharacterItemName, OtherCharacterItemSpecies } from "./OtherCharacterItem.styles"


export const OtherCharacterItemView = (
    props: { character: Character }
) => {

    return (
        <OtherCharacterItem className="d-flex" >
            <div className="flex-1">
                <OtherCharacterItemImg src={props.character.image} alt={props.character.name} />
            </div>
            <div className="flex-3 pl-2">
                <div className="d-flex flex-column">
                    <div>
                        <OtherCharacterItemName href={`/character/${props.character.id}`}>
                            {props.character.name}
                        </OtherCharacterItemName>

                    </div>
                    <OtherCharacterItemLocationDimension>
                        {props.character.location.dimension}
                    </OtherCharacterItemLocationDimension>
                    <OtherCharacterItemSpecies>
                        {props.character.species} - {props.character.gender}
                    </OtherCharacterItemSpecies>
                </div>
            </div>
        </OtherCharacterItem>

    )
}

