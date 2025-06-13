import styled from "styled-components";

export const ModalSection = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const ModalButton = styled.button`
    width: 250px;
    height: 55px;
    font-size: 20px;
    background-color: #F2F2F2;
    border-radius: 20px;
    border: 2px solid black;

    &:hover {
        background-color: #BABABAFF;
    }
`;

export const ModalAnnounceDiv = styled.div`
    font-size: 30px;
    white-space: pre-line;
    text-align: center;
`;

export const ModalDataContainer = styled.section`
    display: flex;
    align-items: center;
    margin: 5px 0;
`;

export const ModalDataTitle = styled.section`
    width: 130px;
    height: 60px;
    text-align: center;
    font-size: 20px;
    align-content: center;
`;

export const ModalDataButton = styled.button<{$type?: "normal" | "negative"}>`
    width: 150px;
    height: 55px;
    font-size: 20px;
    background-color: ${({$type}) => $type === "normal" || $type === undefined ? "#F2F2F2" : "#FF8686"};
    border-radius: 20px;
    border: 2px solid black;

    &:hover {
        background-color: ${({$type}) => $type === "normal" || $type === undefined ? "#BABABAFF" : "#c56565"};
    }
`;