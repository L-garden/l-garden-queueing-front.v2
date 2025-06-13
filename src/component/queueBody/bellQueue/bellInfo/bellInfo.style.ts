'use client'

import styled from "styled-components";

export const BellInfoSection = styled.section<{$isAdmin: boolean, $isMine: boolean}>`
    background-color: white;
    // background-color: ${({$isMine}) => $isMine ? 'skyblue' : 'white'};
    margin: 10px 20px;
    border-radius: 10px;
    height: ${({$isAdmin}) => $isAdmin ? '150px' : "100px"};
`;

export const BellInfoSectionOverlay = styled.section<{$isDone: boolean, $isAdmin: boolean}>`
    border-radius: 10px;
    height: ${({$isAdmin}) => $isAdmin ? '150px' : "100px"};
    animation: ${({$isDone}) => $isDone ? `blink-bg-color 2s infinite` : `none`};

    @keyframes blink-bg-color {
        0% {
            background-color: rgba(255, 99, 99, 0.6)
        }
        50% {
            background-color: rgba(0, 0, 0, 0)
        }
        100% {
            background-color: rgba(255, 99, 99, 0.6)
        }
    }
`;

export const BellInfoDiv = styled.div<{$isMine: boolean}>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100px;
    color: ${({$isMine}) => $isMine ? "#0B48CD" : "inherit"};
`;

export const BellInfoDetail = styled.div`
    font-size: 45px;
`;