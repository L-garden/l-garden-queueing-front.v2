import {Dispatch, SetStateAction} from "react";

export type SettingStatus =
    "console" |
    "changePw" |
    "changePwDone" |
    "adminChange" |
    "adminChangeDenied" |
    "addAdmin" |
    "addAdminDone" |
    "removeAdmin" |
    "removeAdminDone" |
    "removeCeoDenied" |
    ""
    ;

export interface SetSettingStatusProp {
    setSettingStatus: Dispatch<SetStateAction<SettingStatus>>;
}