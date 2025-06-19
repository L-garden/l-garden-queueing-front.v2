'use client'
import {SteffNameDiv, TitleDiv, TitleSection} from "@/component/header/title/title.style";
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import {AdminInfo} from "@/component/modalContent/adminSetting/AdminSetting.type";
import {usePathname, useRouter} from "@/i18n/navigation";

export default () => {
    const t = useTranslations("header");
    const [adminName, setAdminName] = useState<string | undefined>();
    const pathName = usePathname();
    const router = useRouter();
    useEffect(() => {
        const adminsInfoItem = sessionStorage.getItem("adminsInfo");
        if (adminsInfoItem) {
            const adminsInfo = JSON.parse(String(adminsInfoItem)) as AdminInfo;
            if (adminsInfo.adminName && adminsInfo.adminName && adminsInfo.adminRole) {
                setAdminName(adminsInfo.adminName);
                return;
            }
        }
        if (pathName === '/admin') {
            router.replace("/queue");
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