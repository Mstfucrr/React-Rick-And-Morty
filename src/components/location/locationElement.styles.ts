// location element style ts

import styled from "styled-components";

export const LocationItem = styled.a`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: #EFE04B;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
    cursor: pointer;
    &:hover {
        transition: 0.2s;
        transform: scale(1.01);
        text-decoration: none;
        color: #000000;
    }
    @media screen and (max-width: 768px) {
        height: 100%;
        width: 75%;
    }
`;

export const ColTitle = styled.div`
    font-size: 13px;
    line-height: 22px;
    font-weight: 400;
`;

export const ColInfo = styled.div`
    font-size: 13px;
    line-height: 22px;
    font-weight: 500;
`;

export const LocationItemName = styled.h3`
    font-family: Poppins;
    font-size: 18px !important;
    font-weight: 600;
`;


