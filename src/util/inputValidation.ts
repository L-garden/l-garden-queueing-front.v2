import {FormEvent} from "react";

export const onlyEngNumInput = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    input.value = input.value.replace(/[^A-Za-z0-9]/g, '');
}

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d!@#$%^&*_-]{8,32}$/;

export const onlyEngNumSpecialInput = (e: FormEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    input.value = input.value.replace(/[^A-Za-z0-9!@#$%^&*_-]/g, '');
}

export function validatePassword(pw: string): boolean {
    return passwordRegex.test(pw);
}