import {SetSettingStatusProp} from "@/component/modalContent/adminSetting/AdminSetting.type";
import {ModalSection} from "@/component/modalContent/styles/modalNormal.style";
import {
    ModalForm,
    ModalFormButton,
    ModalFormInput,
    ModalFormInputContainer,
    ModalFormInputTitle
} from "@/component/modalContent/styles/modalForm.style";
import {useTranslations} from "next-intl";
import {FormEvent, useRef} from "react";
import {ceoAdminsRegisterApi} from "@/api/rest/admins/AdminsCeoApi";
import {onlyEngNumInput, onlyEngNumSpecialInput, validatePassword} from "@/util/inputValidation";

export default ({setSettingStatus, setAdminName}: SetSettingStatusProp) => {
    const t = useTranslations("modal.admin.setting.addAdmin");
    const name = useRef<HTMLInputElement>(null);
    const id = useRef<HTMLInputElement>(null);
    const pw = useRef<HTMLInputElement>(null);
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!name.current?.value || !id.current?.value || !pw.current?.value) {
            alert(t('isBlankForm'));
            return;
        }
        if (!validatePassword(pw.current?.value)) {
            alert(t('validatePassword'));
            return;
        }
        ceoAdminsRegisterApi({
            userId: id.current?.value,
            name: String(name.current?.value),
            password: pw.current?.value
        }).then((isSuccessed) => {
            if (isSuccessed) {
                setAdminName?.(name.current?.value);
                setSettingStatus("addAdminDone");
            }
        }).catch((message) => {
            alert(t(`${message}`));
        })
    }
    return (
        <ModalSection>
            <ModalForm onSubmit={onSubmit}>
                <ModalFormInputContainer>
                    <ModalFormInputTitle>{t('name')}</ModalFormInputTitle>
                    <ModalFormInput placeholder={t('namePlaceholder')} type="text" ref={name}/>
                </ModalFormInputContainer>
                <ModalFormInputContainer>
                    <ModalFormInputTitle>{t('id')}</ModalFormInputTitle>
                    <ModalFormInput
                        placeholder={t('idPlaceholder')}
                        type="text"
                        onInput={onlyEngNumInput}
                        ref={id}
                    />
                </ModalFormInputContainer>
                <ModalFormInputContainer>
                    <ModalFormInputTitle>{t('pw')}</ModalFormInputTitle>
                    <ModalFormInput
                        placeholder={t('pwPlaceholder')}
                        type="password"
                        onInput={onlyEngNumSpecialInput}
                        ref={pw}
                    />
                </ModalFormInputContainer>
                <ModalFormButton>{t('addAdmin')}</ModalFormButton>
            </ModalForm>
        </ModalSection>
    )
}