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

export default ({setSettingStatus, setAdminName}: SetSettingStatusProp) => {
    const t = useTranslations("modal.admin.setting.addAdmin");
    const name = useRef<HTMLInputElement>(null);
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSettingStatus("addAdminDone");
        setAdminName?.(name.current?.value);
    }
    return (
        <ModalSection onSubmit={onSubmit}>
            <ModalForm>
                <ModalFormInputContainer>
                    <ModalFormInputTitle>{t('id')}</ModalFormInputTitle>
                    <ModalFormInput placeholder={t('idPlaceholder')} type="text"/>
                </ModalFormInputContainer>
                <ModalFormInputContainer>
                    <ModalFormInputTitle>{t('name')}</ModalFormInputTitle>
                    <ModalFormInput placeholder={t('namePlaceholder')} type="text" ref={name}/>
                </ModalFormInputContainer>
                <ModalFormButton>{t('addAdmin')}</ModalFormButton>
            </ModalForm>
        </ModalSection>
    )
}