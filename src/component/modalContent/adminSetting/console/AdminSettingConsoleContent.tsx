import {useTranslations} from "next-intl";
import {ModalButton, ModalSection} from "@/component/modalContent/styles/modalNormal.style";
import {useRouter} from "@/i18n/navigation";
import {SetSettingStatusProp} from "@/component/modalContent/adminSetting/AdminSetting.type";
import {deleteCookie} from "cookies-next";

export default ({setSettingStatus}: SetSettingStatusProp) => {
    const t = useTranslations("modal.admin.setting.console");
    const router = useRouter();
    const changePw = () => {
        setSettingStatus("changePw");
    }
    const adminChange = () => {
        setSettingStatus("adminChange");
    }
    const logout = () => {
        sessionStorage.removeItem('adminsInfo');
        sessionStorage.removeItem('access');
        deleteCookie("refresh");
        router.replace('/queue');
    }
    return (
        <ModalSection>
            <ModalButton onClick={changePw}>{t('changePassword')}</ModalButton>
            <ModalButton onClick={adminChange}>{t('adminChange')}</ModalButton>
            <ModalButton onClick={logout}>{t('logout')}</ModalButton>
        </ModalSection>
    )
}