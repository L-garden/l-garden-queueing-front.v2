'use client'
import styled from "styled-components";

export const FontFamilyProvider = styled.section`
    @font-face {
        font-family: 'MaplestoryOTFLight';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFLight.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Gerhaus';
        font-style: normal;
        font-weight: normal;
        src: local('Gerhaus'), url('https://fonts.cdnfonts.com/s/98696/Gerhaus-vmMKA.woff') format('woff');
    }

    @font-face {
        font-family: 'YanoljaYacheR';
        src: url('https://gcore.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/YanoljaYacheR.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'TmonMonsori';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/TmonMonsori.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Cafe24Ohsquare';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Cafe24Ohsquare.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    font-family: "Cafe24Ohsquare", Arial, Helvetica, sans-serif;
    width: 100dvw;
    height: 100dvh;
`;