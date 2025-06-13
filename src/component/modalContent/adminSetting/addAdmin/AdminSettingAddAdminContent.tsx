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
import {FormEvent} from "react";

export default ({setSettingStatus}: SetSettingStatusProp) => {
    const t = useTranslations("modal.admin.setting.addAdmin");
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSettingStatus("addAdminDone");
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
                    <ModalFormInput placeholder={t('namePlaceholder')} type="text"/>
                </ModalFormInputContainer>
                <ModalFormButton>{t('addAdmin')}</ModalFormButton>
            </ModalForm>
        </ModalSection>
    )
}