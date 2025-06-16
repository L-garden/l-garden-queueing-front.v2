'use client'
import {SteffNameDiv, TitleDiv, TitleSection} from "@/component/header/title/title.style";
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import {AdminInfo} from "@/component/modalContent/adminSetting/AdminSetting.type";

export default () => {
    const t = useTranslations("header");
    const [adminName, setAdminName] = useState<string | undefined>();
    useEffect(() => {
        const adminsInfoItem = sessionStorage.getItem("adminsInfo");
        if (adminsInfoItem) {
            const adminsInfo = JSON.parse(String(adminsInfoItem)) as AdminInfo;
            setAdminName(adminsInfo.adminName);
        }
    }, []);
    return (
        <TitleSection>
            <TitleDiv>{t('title')}</TitleDiv>
            {
                adminName ?
                    <SteffNameDiv>{adminName}</SteffNameDiv>
                    : <></>
            }
        </TitleSection>
    )
}