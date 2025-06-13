import {AdminAuthButton, AdminSettingSection} from "@/component/modalContent/adminSetting/adminSetting.style";
import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

export default () => {
    const t = useTranslations("modal.admin.setting");
    return (
        <AdminSettingSection>
            <AdminAuthButton>{t('changePassword')}</AdminAuthButton>
            <AdminAuthButton>{t('adminChange')}</AdminAuthButton>
            <Link href="/queue">
                <AdminAuthButton>{t('logout')}</AdminAuthButton>
            </Link>
        </AdminSettingSection>
    )
}