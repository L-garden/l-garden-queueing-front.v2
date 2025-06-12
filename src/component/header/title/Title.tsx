import {SteffNameDiv, TitleDiv, TitleSection} from "@/component/header/title/title.style";
import {useTranslations} from "next-intl";

interface TitleProps {
    userName?: string
}

export default ({userName}: TitleProps) => {
    const t = useTranslations("header");
    return (
        <TitleSection>
            <TitleDiv>{t('title')}</TitleDiv>
            {
                userName ?
                    <SteffNameDiv>{userName}</SteffNameDiv>
                    : <></>
            }
        </TitleSection>
    )
}