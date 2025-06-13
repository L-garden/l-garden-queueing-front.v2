import {AdminAuthButton, AdminSettingSection} from "@/component/modalContent/adminSetting/adminSetting.style";
import {useTranslations} from "next-intl";

export default () => {
    const t = useTranslations("modal.admin.setting");
    return (
        <AdminSettingSection>
            <AdminAuthButton>{t('changePassword')}</AdminAuthButton>
            <AdminAuthButton>{t('adminChange')}</AdminAuthButton>
        </AdminSettingSection>
    )
}