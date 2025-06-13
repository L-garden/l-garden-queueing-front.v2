import {ModalButton, ModalSection} from "@/component/modalContent/styles/modalNormal.style";
import {useTranslations} from "next-intl";
import {SetSettingStatusProp} from "@/component/modalContent/adminSetting/AdminSetting.type";
import {useCallback, useEffect} from "react";

export default ({setSettingStatus, adminRole}: SetSettingStatusProp) => {
    if (adminRole === "ADMIN") {
        useEffect(() => {
            setSettingStatus('adminChangeDenied');
        }, [setSettingStatus]);
        return null;
    }
    const t = useTranslations("modal.admin.setting.changeAdmin");
    const addAdmin = useCallback(() => {
        setSettingStatus('addAdmin');
    }, [setSettingStatus]);
    const removeAdmin = useCallback(() => {
        setSettingStatus('removeAdmin');
    }, [setSettingStatus]);
    return (
        <ModalSection>
            <ModalButton onClick={addAdmin}>{t('addAdmin')}</ModalButton>
            <ModalButton onClick={removeAdmin}>{t('removeAdmin')}</ModalButton>
        </ModalSection>
    )
}