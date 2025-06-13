'use client'

import styled from "styled-components";

export const LoginForm = styled.form`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;

export const LoginInputContainer = styled.section`
    display: flex;
    align-items: center;
`;

export const LoginInputTitle = styled.section`
    width: 130px;
    height: 60px;
    text-align: center;
    font-size: 20px;
    align-content: center;
`;

export const LoginInput = styled.input`
    width: 150px;
    height: 40px;
    text-align: start;
    background-color: #F2F2F2;

    border: 1.5px solid black;
    border-radius: 10px;
    color: black;
    font-family: sans-serif;

    margin-right: 15px;
    padding-left: 10px;
`;

export const LoginButton = styled.button`
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