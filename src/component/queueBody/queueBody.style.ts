'use client'
import styled from "styled-components";

export const QueueBodySection = styled.section<{ $onMenu: boolean }>`
    background-color: #E2E2E2;
    min-height: ${({$onMenu}) => $onMenu ? "100dvh" : "calc(100% - 60px)"};
    margin-bottom: ${({$onMenu}) => $onMenu ? "0" : "30px"};
`;

export const QueueBellTitle = styled.div`
    min-height: 100px;
    margin: 20px 20px 50px 20px;
    border-radius: 10px;
    background-color: white;

    font-size: 40px;
    text-align: center;
    align-content: center;
`;