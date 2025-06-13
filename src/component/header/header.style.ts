'use client'
import styled from "styled-components";

export const HeaderSection = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 60px;

    @font-face {
        font-family: 'Cafe24Ohsquare';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Cafe24Ohsquare.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    font-family: "Cafe24Ohsquare";
    
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    backdrop-filter: blur(10px);
`