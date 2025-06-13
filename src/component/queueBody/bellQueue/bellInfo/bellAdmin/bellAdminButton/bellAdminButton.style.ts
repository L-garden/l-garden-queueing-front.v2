'use client'

import styled from "styled-components";

export const BellAdminButton = styled.button<{ $type: "positive" | "negative" }>`
    background-color: ${({$type}) => $type == "positive" ? "#8FDAFF" : "#FF8686"};
    width: 165px;
    height: 42px;
    font-size: 30px;
    border-radius: 10px;

    border: 2px solid ${({$type}) => $type == "positive" ? "#8FDAFF" : "#FF8686"};

    &:hover {
        background-color: ${({$type}) => $type == "positive" ? "#75b3cf" : "#c56565"};
    }
`;