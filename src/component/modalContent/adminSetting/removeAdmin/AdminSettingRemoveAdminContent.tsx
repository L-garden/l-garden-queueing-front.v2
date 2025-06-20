import {AdminInfo, SetSettingStatusProp} from "@/component/modalContent/adminSetting/AdminSetting.type";
import {useCallback, useEffect, useState} from "react";
import {
    ModalDataButton,
    ModalDataContainer,
    ModalDataTitle,
    ModalSection
} from "@/component/modalContent/styles/modalNormal.style";
import {useTranslations} from "next-intl";
import {ceoAdminsAdminDeleteApi, ceoAdminsAdminListApi} from "@/api/rest/admins/AdminsCeoApi";
import {Slice} from "@/api/rest/ResponseFormat";

export default ({setSettingStatus, setAdminName, setModalWidth, setModalHeight}: SetSettingStatusProp) => {
    const t = useTranslations("modal.admin.setting.removeAdmin");
    const [adminList, setAdminList] = useState<AdminInfo[]>([]);
    useEffect(() => {
        ceoAdminsAdminListApi().then((sliceAdminInfos: Slice<AdminInfo>) => {
                const adminInfos = sliceAdminInfos.content;
                setAdminList(adminInfos);
            }
        );
    }, []);
    useEffect(() => {
        setModalWidth?.("330px");
        setModalHeight?.("420px");
        return () => {
            setModalWidth?.(undefined);
            setModalHeight?.(undefined);
        }
    }, [setModalWidth, setModalHeight]);

    const onClick = useCallback((adminInfo: AdminInfo) => {
        if (adminInfo.adminRole === "CEO" || adminInfo.adminRole === "DEVELOPER") {
            setAdminName?.(adminInfo.adminName);
            setSettingStatus("removeCeoDenied");
            return;
        }
        ceoAdminsAdminDeleteApi(adminInfo.adminId).then((isSuccess) => {
            if (isSuccess) {
                setAdminName?.(adminInfo.adminName);
                setSettingStatus("removeAdminDone");
                return;
            }
        }).catch((message) => {
            alert(t(`${message}`));
        })
    }, [setAdminName, setSettingStatus]);
    return (
        <ModalSection>
            {
                adminList.map((adminInfo, index) =>
                    <ModalDataContainer key={index}>
                        <ModalDataTitle>{adminInfo.adminName}</ModalDataTitle>
                        <ModalDataButton $type="negative"
                                         onClick={() => onClick(adminInfo)}>{t('removeButton')}</ModalDataButton>
                    </ModalDataContainer>
                )
            }
        </ModalSection>
    )
}