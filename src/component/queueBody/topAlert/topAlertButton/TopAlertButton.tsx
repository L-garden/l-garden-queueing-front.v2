import {useTranslations} from "next-intl";
import {TopAlertButton} from "@/component/queueBody/topAlert/topAlertButton/topAlertButton.style";
import {Dispatch, MouseEvent, SetStateAction, useState} from "react";
import CustomModal from "@/component/common/CustomModal";
import RegisterBellContent from "@/component/modalContent/registerBell/RegisterBellContent";
import {adminBellEnqueueApi} from "@/api/rest/bell/BellAdminApi";

interface TopAlertButtonProp {
    isAdmin?: boolean;
    orderDone?: boolean;
    myOrderNo?: number;
    setMyBellNo: Dispatch<SetStateAction<number | undefined>>;
}

export default ({isAdmin, orderDone, myOrderNo, setMyBellNo}: TopAlertButtonProp) => {
    const [hiddenModal, setHiddenModal] = useState<boolean>(true);
    const onClick = () => {
        setHiddenModal(false);
    }
    const onClickOutSide = (e: MouseEvent) => {
        e.stopPropagation();
        setHiddenModal(true);
    }
    const registerBellByAdmin = (bellNo: number) => {
        adminBellEnqueueApi(bellNo);
        setHiddenModal(true);
    }
    const registerBellByCustomer = (bellNo: number) => {
        setMyBellNo(bellNo);
        setHiddenModal(true);
    }
    const registerBellRelease = () => {
        setMyBellNo(undefined);
    }

    if (isAdmin) {
        const t = useTranslations("topAlert.admin");
        return (
            <TopAlertButton onClick={onClick}>
                {t(`registerBell`)}
                <CustomModal
                    hidden={hiddenModal}
                    onClickOutSide={onClickOutSide}
                >
                    <RegisterBellContent registerBell={registerBellByAdmin}/>
                </CustomModal>
            </TopAlertButton>
        )
    }
    const t = useTranslations("topAlert.customer");
    if (orderDone) {
        return (
            <TopAlertButton onClick={registerBellRelease}>
                {t(`orderDone`)}
            </TopAlertButton>
        )
    }
    if (myOrderNo) {
        return (
            <TopAlertButton onClick={registerBellRelease}>
                {t(`queueing`, {bellNo: myOrderNo})}
            </TopAlertButton>
        )
    }
    return (
        <TopAlertButton onClick={onClick}>
            {t(`enqueue`)}
            <CustomModal
                hidden={hiddenModal}
                onClickOutSide={onClickOutSide}
            >
                <RegisterBellContent registerBell={registerBellByCustomer}/>
            </CustomModal>
        </TopAlertButton>
    )
}
