import {useTranslations} from "next-intl";
import {ModalAnnounceDiv, ModalSection} from "@/component/modalContent/styles/modalNormal.style";

export default () => {
    const t = useTranslations("modal.admin.setting.changeAdmin");
    return (
        <ModalSection>
            <ModalAnnounceDiv>{t('denied')}</ModalAnnounceDiv>
        </ModalSection>
    )
}