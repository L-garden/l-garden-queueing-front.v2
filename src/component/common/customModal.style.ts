'use client'

import styled from "styled-components";

export const ModalBackground = styled.section<{ $z_index: number, $hidden: boolean }>`
    z-index: ${({$z_index}) => $z_index};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 0.4);

    visibility: ${({$hidden}) => $hidden ? "hidden" : "visible"};
`;

export const ModalContentContainer = styled.div<{ $width: string, $height: string }>`
    background-color: white;
    width: ${({$width}) => $width};
    height: ${({$height}) => $height};
    overflow: scroll;

    border: 2px solid black;
    border-radius: 30px;
`;