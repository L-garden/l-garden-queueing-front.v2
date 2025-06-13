import {AdminInfo, SetSettingStatusProp} from "@/component/modalContent/adminSetting/AdminSetting.type";
import {useEffect, useState} from "react";
import {
    ModalDataButton,
    ModalDataContainer,
    ModalDataTitle,
    ModalSection
} from "@/component/modalContent/styles/modalNormal.style";
import {useTranslations} from "next-intl";

const initData: AdminInfo[] = [
    {
        adminId: 1,
        adminName: "사장님",
        adminRole: "CEO"
    },
    {
        adminId: 2,
        adminName: "주방 앞",
        adminRole: "ADMIN"
    },
    {
        adminId: 3,
        adminName: "브런치",
        adminRole: "ADMIN"
    },
    {
        adminId: 4,
        adminName: "홍길동",
        adminRole: "ADMIN"
    },
    {
        adminId: 5,
        adminName: "신짱구",
        adminRole: "ADMIN"
    },
    {
        adminId: 6,
        adminName: "노징구",
        adminRole: "ADMIN"
    },
    {
        adminId: 7,
        adminName: "코난",
        adminRole: "ADMIN"
    },
    {
        adminId: 8,
        adminName: "김아무개",
        adminRole: "ADMIN"
    },
]

export default ({setSettingStatus, setAdminName, setModalWidth, setModalHeight}: SetSettingStatusProp) => {
    const t = useTranslations("modal.admin.setting.removeAdmin");
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [adminList, setAdminList] = useState(initData);
    useEffect(() => {
        setModalWidth?.("330px");
        setModalHeight?.("420px");
        return () => {
            setModalWidth?.(undefined);
            setModalHeight?.(undefined);
        }
    }, []);
    const onClick = (adminInfo: AdminInfo) => {
        if (adminInfo.adminRole === "CEO") {
            setAdminName?.(adminInfo.adminName);
            setSettingStatus("removeCeoDenied");
            return;
        }
        setAdminName?.(adminInfo.adminName);
        setSettingStatus("removeAdminDone");
    }
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