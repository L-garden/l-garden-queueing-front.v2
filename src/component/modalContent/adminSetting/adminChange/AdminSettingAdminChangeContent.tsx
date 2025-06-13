import {ModalButton, ModalSection} from "@/component/modalContent/styles/modalNormal.style";
import {useTranslations} from "next-intl";
import {SetSettingStatusProp} from "@/component/modalContent/adminSetting/AdminSetting.type";
import {useEffect} from "react";

export default ({setSettingStatus, adminRole}: SetSettingStatusProp) => {
    if (adminRole === "ADMIN") {
        useEffect(() => {
            setSettingStatus('adminChangeDenied');
        }, []);
        return null;
    }
    const t = useTranslations("modal.admin.setting.changeAdmin");
    const addAdmin = () => {
        setSettingStatus('addAdmin');
    }
    const removeAdmin = () => {
        setSettingStatus('removeAdmin');
    }
    return (
        <ModalSection>
            <ModalButton onClick={addAdmin}>{t('addAdmin')}</ModalButton>
            <ModalButton onClick={removeAdmin}>{t('removeAdmin')}</ModalButton>
        </ModalSection>
    )
}