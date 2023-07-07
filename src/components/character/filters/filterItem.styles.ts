
import styled from 'styled-components';

// iconColors
export const FilterItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 340px;
`;

export const FilterImage = styled.img`
    border-radius: 15px;
    width: 310px;
    height: 310px;
    object-fit: cover;
`;

export const FilterName = styled.a`
    font-family: Poppins;
    font-size: 24px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(68, 40, 29, 1);
    text-decoration: none;
    transition: .3s;
        &:hover {
            color: rgba(68, 40, 29, 0.5);
            text-decoration: none;
        }
`;


