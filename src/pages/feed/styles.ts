import styled from "styled-components";
import { IColumn } from "./types";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`

export const Title = styled.h3`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;
    
    color: #ffffff;
`

export const TitleHighlight = styled.h3`
    color: #E41050;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 18px; 
    line-height: 25px;
    color: #ffffff70;
    margin-bottom: 24px;
`

export const Column = styled.div<IColumn>`
    flex: ${({flex}) => flex};
    padding-right: 24px;
`