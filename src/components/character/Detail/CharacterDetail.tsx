import { Character } from "../../../Api/Schemas/character"
import { CharacterInfo } from "./CharacterInfo"
import { OtherCharactersView } from "./OtherCharacters"



export const CharacterDetailView = (
    props: { character: Character, otherCharacters: Character[] }
) => {
    return (
        <div className="pl-5 pr-5 row justify-content-between">
            <div className="col-md-4">
                <CharacterInfo character={props.character} />
            </div>
            <div className="col-lg-8" style={{
                maxHeight: "70vh",
                overflowY: "auto"
            }}>
                <OtherCharactersView otherCharacters={props.otherCharacters} />
            </div>
        </div>
    )
}