import styled from "styled-components";

export const AdminSettingSection = styled.section`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const AdminAuthButton = styled.button`
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