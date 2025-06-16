import {BellData} from "@/component/queueBody/types/Bell";
import {
    BellInfoDetail,
    BellInfoDiv,
    BellInfoSection,
    BellInfoSectionOverlay
} from "@/component/queueBody/bellQueue/bellInfo/bellInfo.style";
import BellAdmin from "@/component/queueBody/bellQueue/bellInfo/bellAdmin/BellAdmin";
import {useTranslations} from "next-intl";

interface BellInfoProp {
    isAdmin?: boolean;
    bellData: BellData;
    isMine: boolean;
}

export default ({isAdmin, bellData, isMine}: BellInfoProp) => {
    const t = useTranslations("bellQueue");
    return (
        <BellInfoSection $isAdmin={isAdmin == true} $isMine={isMine}>
            <BellInfoSectionOverlay $isDone={bellData.bellStatus === 'DONE'} $isAdmin={isAdmin == true}>
                <BellInfoDiv $isMine={isMine}>
                    <BellInfoDetail>{t('bell')}</BellInfoDetail>
                    <BellInfoDetail>{padSingleDigit(bellData.bellNum)}</BellInfoDetail>
                </BellInfoDiv>
                {
                    isAdmin ? <BellAdmin bellData={bellData}/> : <></>
                }
            </BellInfoSectionOverlay>
        </BellInfoSection>
    )
}

function padSingleDigit(num: number) {
    return num < 10 ? '0' + num : String(num);
}