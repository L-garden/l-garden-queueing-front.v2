import {SetSettingStatusProp} from "@/component/modalContent/adminSetting/AdminSetting.type";
import {ModalAnnounceDiv, ModalButton, ModalSection} from "@/component/modalContent/styles/modalNormal.style";
import {useTranslations} from "next-intl";

export default ({setSettingStatus, adminName}: SetSettingStatusProp) => {
    const t = useTranslations("modal.admin.setting.addAdmin");
    const onClickBack = () => {
        setSettingStatus("addAdmin");
    }
    return (
        <ModalSection>
            <ModalAnnounceDiv>{t('done', {name: adminName || t('unknown')})}</ModalAnnounceDiv>
            <ModalButton onClick={onClickBack}>{t('back')}</ModalButton>
        </ModalSection>
    )
}