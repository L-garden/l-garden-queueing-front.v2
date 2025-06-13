import {Dispatch, FormEvent, SetStateAction, useEffect} from "react";
import {
    LoginButton,
    LoginForm,
    LoginInput,
    LoginInputContainer,
    LoginInputTitle
} from "@/component/modalContent/loginForm/loginForm.style";
import {useTranslations} from "next-intl";

interface LoginFormProp {
    setWidth: Dispatch<SetStateAction<string | undefined>>;
    setHeight: Dispatch<SetStateAction<string | undefined>>;
}

export default ({setWidth, setHeight}: LoginFormProp) => {
    const t = useTranslations("modal.customer.loginForm");
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    }
    useEffect(() => {
        setWidth("330px");
        setHeight("270px");
    }, []);
    return (
        <LoginForm onSubmit={onSubmit}>
            <LoginInputContainer>
                <LoginInputTitle>{t('id')}</LoginInputTitle>
                <LoginInput placeholder="id" type="text"/>
            </LoginInputContainer>
            <LoginInputContainer>
                <LoginInputTitle>{t('pw')}</LoginInputTitle>
                <LoginInput placeholder="pw" type="password"/>
            </LoginInputContainer>
            <LoginButton type="submit">로그인</LoginButton>
        </LoginForm>
    )
}