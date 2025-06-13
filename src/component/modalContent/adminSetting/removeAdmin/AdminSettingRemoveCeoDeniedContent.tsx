import {SetSettingStatusProp} from "@/component/modalContent/adminSetting/AdminSetting.type";
import {ModalAnnounceDiv, ModalButton, ModalSection} from "@/component/modalContent/styles/modalNormal.style";
import {useTranslations} from "next-intl";

export default ({setSettingStatus, adminName}: SetSettingStatusProp) => {
    const t = useTranslations("modal.admin.setting.removeAdmin");
    const onClick = () => {
        setSettingStatus("removeAdmin");
    }
    return (
        <ModalSection>
            <ModalAnnounceDiv>{t('denied', {name: adminName || t('unknown')})}</ModalAnnounceDiv>
            <ModalButton onClick={onClick}>{t('back')}</ModalButton>
        </ModalSection>
    )
}