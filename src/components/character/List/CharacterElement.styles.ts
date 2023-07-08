import styled from "styled-components";

export const CharacterItem = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 340px;
`;

export const CharacterImage = styled.img`
    border-radius: 15px;
    width: 310px;
    height: 310px;
    object-fit: cover;
`;

export const CharacterName = styled.a`
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

export const CharacterItemInfo = styled.div`
font-family: Poppins;
font-size: 16px;
font-weight: 500;
line-height: 22px;
letter-spacing: 0em;
text-align: left;
color: rgba(68, 40, 29, 1);
`;

export const CharacterItemStatusIcon = styled.span<{ status: string }>`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin-right: 5px;
    background-color: ${props => props.status === 'Alive' ? 'rgba(152, 205, 77, 1)' : props.status === 'Dead' ? 'rgba(185, 0, 0, 1)' : 'rgba(184, 184, 184, 1)'};
`;


