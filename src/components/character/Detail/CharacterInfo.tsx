import { useEffect, useState } from 'react';
import { Character } from '../../../Api/Schemas/character';
import { SkeletonLoading } from '../../SkeletonLoading';
import { CharacterItemInfo, CharacterItemStatusIcon } from '../List/CharacterElement.styles';
import { CharacterItemImg, CharacterName } from "./CharacterInfo.styles"
import { OtherCharacterItemSpecies } from './OtherCharacterItem.styles';
import { motion } from "framer-motion"

export const CharacterInfo = (
    props: { character: Character }
) => {
    return (
        <div className="d-flex flex-column pb-3">
            <div className="row">
                <div className="col-12">
                    <motion.div
                        initial={{ 
                            opacity: 0,
                            
                         }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <CharacterItemImg src={props.character.image} alt={props.character.name} />
                    </motion.div>
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
                <div className="col-6">
                    <OtherCharacterItemSpecies className='text-right'>
                        {props.character.species} - {props.character.gender}
                    </OtherCharacterItemSpecies>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {props.character.location.dimension === "unknown" ? "-" : props.character.location.dimension
                    } <br />
                    {props.character.origin.name === "unknown" ? "-" : props.character.origin.name}
                </div>
            </div>
        </div >

    )
}
