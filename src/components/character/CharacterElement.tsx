import { Character } from "../../Api/Schemas/character"
import { CharacterImage, CharacterItem, CharacterItemInfo, CharacterItemStatusIcon, CharacterName } from "./CharacterElement.styles"



export const CharacterElement = (
    props: { character: Character }
) => {

    return (
        <CharacterItem className="p-4 m-2">
            <div>
                <CharacterImage src={props.character.image} alt={props.character.name} />
            </div>
            <div className='d-flex flex-column justify-content-center mt-2'>
                <CharacterName href={`/character/${props.character.id}`}>
                    {props.character.name}
                </CharacterName>
                <CharacterItemInfo>
                    <CharacterItemStatusIcon
                        status={props.character.status}
                    />
                    {props.character.status} - {props.character.species}

                </CharacterItemInfo>
            </div>
        </CharacterItem>

    )
}