import {useTranslations} from "next-intl";
import {ModalButton, ModalSection} from "@/component/modalContent/styles/modalNormal.style";
import {useRouter} from "@/i18n/navigation";
import {AdminInfo, SetSettingStatusProp} from "@/component/modalContent/adminSetting/AdminSetting.type";
import {deleteCookie} from "cookies-next";
import {useCallback} from "react";

export default ({setSettingStatus}: SetSettingStatusProp) => {
    const t = useTranslations("modal.admin.setting.console");
    const router = useRouter();
    const kickUser = useCallback(() => {
        sessionStorage.removeItem('adminsInfo');
        sessionStorage.removeItem('access');
        deleteCookie("refresh");
        router.replace('/queue');
    }, []);
    const changePw = () => {
        setSettingStatus("changePw");
    }
    const adminChange = () => {
        const adminsInfoString = sessionStorage.getItem('adminsInfo');
        if (!adminsInfoString) {
            kickUser();
            return;
        }
        const adminsInfo = JSON.parse(adminsInfoString) as AdminInfo;
        if (!adminsInfo.adminRole || (adminsInfo.adminRole !== 'CEO' && adminsInfo.adminRole !== 'DEVELOPER')) {
            setSettingStatus("adminChangeDenied");
            return;
        }
        setSettingStatus("adminChange");
    }
    const logout = () => {
        kickUser();
    }
    return (
        <ModalSection>
            <ModalButton onClick={changePw}>{t('changePassword')}</ModalButton>
            <ModalButton onClick={adminChange}>{t('adminChange')}</ModalButton>
            <ModalButton onClick={logout}>{t('logout')}</ModalButton>
        </ModalSection>
    )
}