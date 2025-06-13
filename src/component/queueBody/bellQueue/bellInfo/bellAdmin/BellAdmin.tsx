import BellAdminButton from "@/component/queueBody/bellQueue/bellInfo/bellAdmin/bellAdminButton/BellAdminButton";
import {BellAdminSection} from "@/component/queueBody/bellQueue/bellInfo/bellAdmin/belladmin.style";
import {useTranslations} from "next-intl";

export default () => {
    const t = useTranslations("bellQueue");
    return (
        <BellAdminSection>
            <BellAdminButton type={"negative"}>{t('delButton')}</BellAdminButton>
            <BellAdminButton type={"positive"}>{t('callButton')}</BellAdminButton>
        </BellAdminSection>
    )
}