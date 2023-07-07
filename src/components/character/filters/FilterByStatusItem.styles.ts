
import styled from 'styled-components';

export const BtnFilterStye = styled.a<{ active: boolean , color : string , hoverColor : string , activeColor : string, border: string }>`
    width: 120px;
    height: 40px;
    text-decoration: none !important;
    color: #000 !important;
    border-radius: 50px;
    transition: .2s;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 0 5px;
    cursor: pointer;
    background-color: ${props => props.active ? props.color : 'white'};
    border: ${props => props.active ? props.border : '1px solid #000'};
    &:hover {
        background-color: ${props => props.hoverColor};
        text-decoration: none;
    }
    &:active {
         background-color: ${props => props.activeColor};
            text-decoration: none;
    }

`;

export const BtnFilterIcon = styled.div<{ active: boolean , color: string }>`
    width: 12px;
    height: 12px;
    margin-right: 8px;
    border-radius: 50%;
    display: inline-block;
    background-color: ${props => props.active ? props.color : 'white'};
`;


