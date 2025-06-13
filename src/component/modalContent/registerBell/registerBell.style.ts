'use client'

import styled from "styled-components";

export const RegisterBellForm = styled.form`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

export const RegisterBellSection = styled.section`
    display: flex;
    flex-direction: row;
    
    align-items: center;
`;

export const RegisterBellInputTitle = styled.div`
    width: 160px;
    height: 100px;
    font-size: 30px;
    text-align: center;
    align-content: center;
`;

export const RegisterBellInput = styled.input`
    width: 150px;
    height: 110px;
    text-align: center;
    font-size: 28px;
    padding-left: 10px;
    align-content: center;
    background-color: #F2F2F2;
    border-radius: 20px;

    border: 3px solid black;
`;

export const RegisterBellButton = styled.button`
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