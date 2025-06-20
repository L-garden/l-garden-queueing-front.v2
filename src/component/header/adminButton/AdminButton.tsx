'use client'

import {MdSettings} from "react-icons/md";
import {AdminButton} from "@/component/header/adminButton/adminButton.style";
import CustomModal from "@/component/common/CustomModal";
import {MouseEvent, useState} from "react";
import LoginFormContent from "@/component/modalContent/loginForm/LoginFormContent";
import AdminSettingContent from "@/component/modalContent/adminSetting/AdminSettingContent";

interface AdminButtonProp {
    isAdmin?: boolean;
}

export default ({isAdmin}: AdminButtonProp) => {
    const [hiddenModal, setHiddenModal] = useState<boolean>(true);
    const [modalWidth, setModalWidth] = useState<string | undefined>();
    const [modalHeight, setModalHeight] = useState<string | undefined>();
    const onClick = () => {
        setHiddenModal(false);
    }
    const onClickOutSide = (e: MouseEvent) => {
        e.stopPropagation();
        setHiddenModal(true);
    }
    return (
        <AdminButton onClick={onClick}>
            <MdSettings size="30px"/>
            <CustomModal
                hidden={hiddenModal}
                onClickOutSide={onClickOutSide}
                width={modalWidth}
                height={modalHeight}
            >
                {
                    isAdmin ?
                        <AdminSettingContent hiddenModal={hiddenModal} adminRole="DEVELOPER" setModalWidth={setModalWidth} setModalHeight={setModalHeight}/>
                        :
                        <LoginFormContent/>
                }
            </CustomModal>
        </AdminButton>
    )
}
