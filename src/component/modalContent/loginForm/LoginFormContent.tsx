import {FormEvent} from "react";
import {
    LoginButton,
    LoginForm,
    LoginInput,
    LoginInputContainer,
    LoginInputTitle
} from "@/component/modalContent/loginForm/loginForm.style";
import {useTranslations} from "next-intl";
import {useRouter} from "@/i18n/navigation";

export default () => {
    const t = useTranslations("modal.customer.loginForm");
    const router = useRouter();
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        router.push("/admin");
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
            <LoginButton type="submit">{t('signIn')}</LoginButton>
        </LoginForm>
    )
}