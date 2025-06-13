import {useTranslations} from "next-intl";
import {TopAlertButton} from "@/component/queueBody/topAlert/topAlertButton/topAlertButton.style";
import {MouseEvent, useState} from "react";
import CustomModal from "@/component/common/CustomModal";
import RegisterBellContent from "@/component/modalContent/registerBell/RegisterBellContent";

interface TopAlertButtonProp {
    isAdmin?: boolean;
    orderDone?: boolean;
    myOrderNo?: number;
}

export default ({isAdmin, orderDone, myOrderNo}: TopAlertButtonProp) => {
    const [hiddenModal, setHiddenModal] = useState<boolean>(true);
    const onClick = () => {
        setHiddenModal(false);
    }
    const onClickOutSide = (e: MouseEvent) => {
        e.stopPropagation();
        setHiddenModal(true);
    }
    const registerBellByAdmin = () => {
    }
    const registerBellByCustomer = () => {
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
    if (myOrderNo) {
        return (
            <TopAlertButton>
                {t(`queueing`, {bellNo: myOrderNo})}
            </TopAlertButton>
        )
    }
    if (orderDone) {
        return (
            <TopAlertButton>
                {t(`orderDone`)}
            </TopAlertButton>
        )
    }
    return (
        <TopAlertButton>
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
