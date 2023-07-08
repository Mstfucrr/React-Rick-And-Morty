
import styled from 'styled-components';

export const CharacterItemImg = styled.img`
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
    border-radius: 15px;
`;

export const CharacterName = styled.div`
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
    
    @media (max-width: 768px) {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
         

    }

`;