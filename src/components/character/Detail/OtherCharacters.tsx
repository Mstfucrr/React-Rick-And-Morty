import { Character } from '../../../Api/Schemas/character';
import { OtherCharacterItemView } from "./OtherCharacterItem";
import { OtherCharactersTitle } from "./OtherCharacters.styles"
import { motion } from "framer-motion"


export const OtherCharactersView = (
    props: { otherCharacters: Character[] }
) => {
    return (
        <div className="d-flex flex-column">
            <motion.div
                initial={{
                    opacity: 0,
                    x: -100,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{ duration: 0.7 }}
                className="row"
            >

                <OtherCharactersTitle className="row">
                    <div className="col-12">
                        Other characters
                    </div>
                </OtherCharactersTitle>
            </motion.div>
            <div>
                <div className="d-flex flex-wrap">
                    {props.otherCharacters.map((character, index) => {
                        return (
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: -50,

                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    x: 0,

                                }}
                                transition={{ duration: 0.7, delay: index * 0.1 }}
                                key={character.id}
                                className="m-2"
                                whileHover={{
                                    scale: 1.02,
                                    boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.15)',
                                    transition: { duration: 0.1 }
                                }}

                            >
                                <OtherCharacterItemView character={character} key={character.id} />
                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </div>
    )
}