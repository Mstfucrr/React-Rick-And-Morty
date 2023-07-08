
import styled from 'styled-components';

export const BtnFilterStye = styled.a<{ active: number , color : string , hovercolor : string , activecolor : string, border: string }>`
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
    background-color: ${props => props.active == 1 ? props.color : 'white'};
    border: ${props => props.active == 1 ? props.border : '1px solid '+props.activecolor};
    &:hover {
        background-color: ${props => props.hovercolor};
        text-decoration: none;
    }
    &:active {
         background-color: ${props => props.activecolor};
            text-decoration: none;
    }

`;

export const BtnFilterIcon = styled.div<{status: string }>`
    width: 12px;
    height: 12px;
    margin-right: 8px;
    border-radius: 50%;
    display: inline-block;
    background-color: ${props => props.status === 'Alive' ? 'rgba(152, 205, 77, 1)' : props.status === 'Dead' ? 'rgba(185, 0, 0, 1)' : 'rgba(184, 184, 184, 1)'};
}  
`;

