import {FormEvent, useRef} from "react";
import {
    ModalForm,
    ModalFormButton,
    ModalFormInput,
    ModalFormInputContainer,
    ModalFormInputTitle
} from "@/component/modalContent/styles/modalForm.style";
import {useTranslations} from "next-intl";
import {useRouter} from "@/i18n/navigation";
import {authAdminsLoginApi} from "@/api/rest/admins/AdminsAuthApi";

export default () => {
    const t = useTranslations("modal.customer.loginForm");
    const router = useRouter();
    const idRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!idRef.current?.value || !passwordRef.current?.value) {
            alert("로그인 정보를 다시 확인하세요.");
            return;
        }
        authAdminsLoginApi({userId: `${idRef.current?.value}`, password: `${passwordRef.current?.value}`})
            .then((logined) => {
                if (logined)
                    router.push("/admin")
            });
    }
    return (
        <ModalForm onSubmit={onSubmit}>
            <ModalFormInputContainer>
                <ModalFormInputTitle>{t('id')}</ModalFormInputTitle>
                <ModalFormInput placeholder="id" type="text" ref={idRef}/>
            </ModalFormInputContainer>
            <ModalFormInputContainer>
                <ModalFormInputTitle>{t('pw')}</ModalFormInputTitle>
                <ModalFormInput placeholder="pw" type="password" ref={passwordRef}/>
            </ModalFormInputContainer>
            <ModalFormButton type="submit">{t('signIn')}</ModalFormButton>
        </ModalForm>
    )
}