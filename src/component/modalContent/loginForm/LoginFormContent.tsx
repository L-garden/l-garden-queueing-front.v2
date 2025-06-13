import {FormEvent} from "react";
import {
    ModalForm,
    ModalFormButton,
    ModalFormInput,
    ModalFormInputContainer,
    ModalFormInputTitle
} from "@/component/modalContent/styles/modalForm.style";
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
        <ModalForm onSubmit={onSubmit}>
            <ModalFormInputContainer>
                <ModalFormInputTitle>{t('id')}</ModalFormInputTitle>
                <ModalFormInput placeholder="id" type="text"/>
            </ModalFormInputContainer>
            <ModalFormInputContainer>
                <ModalFormInputTitle>{t('pw')}</ModalFormInputTitle>
                <ModalFormInput placeholder="pw" type="password"/>
            </ModalFormInputContainer>
            <ModalFormButton type="submit">{t('signIn')}</ModalFormButton>
        </ModalForm>
    )
}