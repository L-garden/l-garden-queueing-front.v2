import {FormEvent} from "react";
import {
    LoginButton,
    LoginForm,
    LoginInput,
    LoginInputContainer,
    LoginInputTitle
} from "@/component/modalContent/loginForm/loginForm.style";
import {useTranslations} from "next-intl";

export default () => {
    const t = useTranslations("modal.customer.loginForm");
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
    }
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