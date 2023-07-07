import styled from "styled-components";

export const OtherCharacterItem = styled.div`
    width: 290px;
    padding: 20px 2px;
`;

// other_character_item_img
export const OtherCharacterItemImg = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 15px;
`;

// other_characters_title
export const OtherCharactersTitle = styled.div`
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 1);
`;

// other_character_item_name a
export const OtherCharacterItemName = styled.a`
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 1);
    text-decoration: none;
    &:hover {
        color: rgba(0, 0, 0, .5);
        text-decoration: none;
    }
`;




// other_character_item_species
export const OtherCharacterItemSpecies = styled.div`
    font-family: Poppins;
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, .5);
`;

// other_character_item_location_dimension
export const OtherCharacterItemLocationDimension = styled.div`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(0, 0, 0, 1);
`;