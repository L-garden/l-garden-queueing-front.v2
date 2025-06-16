import BellAdminButton from "@/component/queueBody/bellQueue/bellInfo/bellAdmin/bellAdminButton/BellAdminButton";
import {BellAdminSection} from "@/component/queueBody/bellQueue/bellInfo/bellAdmin/belladmin.style";
import {useTranslations} from "next-intl";
import {BellData} from "@/component/queueBody/types/Bell";
import React, {useCallback} from "react";
import {adminBellDeleteApi, adminBellDoneApi} from "@/api/rest/bell/BellAdminApi";

interface BellAdminProp {
    bellData: BellData;
};

export default React.memo(({bellData}: BellAdminProp) => {
    const t = useTranslations("bellQueue");
    const deleteBell = useCallback(() => {
        adminBellDeleteApi(bellData.bellId);
    }, [bellData]);
    const callBell = useCallback(() => {
        adminBellDoneApi(bellData.bellId);
    }, [bellData]);
    return (
        <BellAdminSection>
            <BellAdminButton type={"negative"} onClick={deleteBell}>{t('delButton')}</BellAdminButton>
            <BellAdminButton type={"positive"} onClick={callBell}>{t('callButton')}</BellAdminButton>
        </BellAdminSection>
    )
});