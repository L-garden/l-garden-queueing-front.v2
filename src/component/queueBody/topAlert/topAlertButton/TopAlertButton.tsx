import {useTranslations} from "next-intl";
import {TopAlertButton} from "@/component/queueBody/topAlert/topAlertButton/topAlertButton.style";
import {Dispatch, MouseEvent, SetStateAction, useState} from "react";
import CustomModal from "@/component/common/CustomModal";
import RegisterBellContent from "@/component/modalContent/registerBell/RegisterBellContent";

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const registerBellByAdmin = (bellNo: number) => {
    }
    const registerBellByCustomer = (bellNo: number) => {
        setMyBellNo(bellNo);
        setHiddenModal(true);
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
            <TopAlertButton>
                {t(`orderDone`)}
            </TopAlertButton>
        )
    }
    if (myOrderNo) {
        return (
            <TopAlertButton>
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
