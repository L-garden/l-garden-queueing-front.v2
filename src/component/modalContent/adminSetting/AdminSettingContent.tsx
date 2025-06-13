import {AdminAuthButton, AdminSettingSection} from "@/component/modalContent/adminSetting/adminSetting.style";
import {Dispatch, SetStateAction, useEffect} from "react";
import {useTranslations} from "next-intl";

interface AdminSettingProp {
    setWidth: Dispatch<SetStateAction<string | undefined>>;
    setHeight: Dispatch<SetStateAction<string | undefined>>;
}

export default ({setWidth, setHeight}: AdminSettingProp) => {
    const t = useTranslations("modal.admin.setting");
    useEffect(() => {
        setWidth("330px");
        setHeight("270px");
    }, []);
    return (
        <AdminSettingSection>
            <AdminAuthButton>{t('changePassword')}</AdminAuthButton>
            <AdminAuthButton>{t('adminChange')}</AdminAuthButton>
        </AdminSettingSection>
    )
}