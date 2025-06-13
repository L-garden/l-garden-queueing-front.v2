import {useTranslations} from "next-intl";
import {ModalSection} from "@/component/modalContent/styles/modalNormal.style";
import {FormEvent, useRef} from "react";
import {SetSettingStatusProp} from "@/component/modalContent/adminSetting/AdminSetting.type";
import {
    ModalForm,
    ModalFormButton,
    ModalFormInput,
    ModalFormInputContainer,
    ModalFormInputTitle
} from "@/component/modalContent/styles/modalForm.style";

export default ({setSettingStatus}: SetSettingStatusProp) => {
    const t = useTranslations("modal.admin.setting.changePw");
    const pw = useRef<HTMLInputElement>(null);
    const pwCheck = useRef<HTMLInputElement>(null);
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (pw.current?.value !== pwCheck.current?.value) {
            alert(t('pwNotMatchAlert'));
            return;
        }
        if(((pw.current?.value.length || 0) * (pwCheck.current?.value.length || 0)) === 0) {
            alert(t('plzInsertPw'));
            return;
        }
        setSettingStatus("changePwDone");
    }
    return (
        <ModalSection onSubmit={onSubmit}>
            <ModalForm>
                <ModalFormInputContainer>
                    <ModalFormInputTitle>{t('id')}</ModalFormInputTitle>
                    <ModalFormInput placeholder={t('idPlaceholder')} type="text" disabled={true} value={"원래아이디"}/>
                </ModalFormInputContainer>
                <ModalFormInputContainer>
                    <ModalFormInputTitle>{t('pw')}</ModalFormInputTitle>
                    <ModalFormInput placeholder={t('pwPlaceholder')} type="password" ref={pw}/>
                </ModalFormInputContainer>
                <ModalFormInputContainer>
                    <ModalFormInputTitle>{t('pwCheck')}</ModalFormInputTitle>
                    <ModalFormInput placeholder={t('pwCheckPlaceholder')} type="password" ref={pwCheck}/>
                </ModalFormInputContainer>
                <ModalFormButton>{t('changePw')}</ModalFormButton>
            </ModalForm>
        </ModalSection>
    )
}