import {useTranslations} from "next-intl";
import {ModalButton, ModalSection} from "@/component/modalContent/styles/modalNormal.style";
import {Link} from "@/i18n/navigation";
import {Dispatch, SetStateAction} from "react";
import {SettingStatus} from "@/component/modalContent/adminSetting/AdminSetting.type";

interface AdminSettingConsoleProp {
    setSettingStatus: Dispatch<SetStateAction<SettingStatus>>;
}

export default ({setSettingStatus}: AdminSettingConsoleProp) => {
    const t = useTranslations("modal.admin.setting.console");
    const changePw = () => {
        setSettingStatus("changePw");
    }
    const adminChange = () => {
        setSettingStatus("adminChange");
    }
    return (
        <ModalSection>
            <ModalButton onClick={changePw}>{t('changePassword')}</ModalButton>
            <ModalButton onClick={adminChange}>{t('adminChange')}</ModalButton>
            <Link href="/queue">
                <ModalButton>{t('logout')}</ModalButton>
            </Link>
        </ModalSection>
    )
}