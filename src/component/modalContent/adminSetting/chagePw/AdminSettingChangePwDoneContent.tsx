import {ModalAnnounceDiv, ModalSection} from "@/component/modalContent/styles/modalNormal.style";
import {useTranslations} from "next-intl";

export default () => {
    const t = useTranslations("modal.admin.setting.changePw");
    return (
        <ModalSection>
            <ModalAnnounceDiv>{t('done')}</ModalAnnounceDiv>
        </ModalSection>
    )
}