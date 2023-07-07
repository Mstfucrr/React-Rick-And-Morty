
import styled from 'styled-components';


export const NavbarContainer = styled.div`
    width: 100%;
    height: 100px;
    color: white;
    background-color: white;
    border-bottom: 1px solid #E5E5E5;
`;

export const NavbarTitle = styled.img`
    transition: .25s;
    width: 150px;
    height: 100%;
    cursor: 'pointer';
    
    &:hover {
        transform: scale(1.1, 1.3);
    }
`;

export const BackArrow = styled.img`
    width: 50px;
    height: 100%;
    cursor: 'pointer';
    transition: .25s;

    &:hover {
        transform: scale(1.1);
    }
`;

