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

export type AdminRole = "CEO" | "ADMIN" | "DEVELOPER";

export interface SetSettingStatusProp {
    setSettingStatus: Dispatch<SetStateAction<SettingStatus>>;
    adminRole?: AdminRole;
    adminName?: string | undefined;
    setAdminName?: Dispatch<SetStateAction<string | undefined>>;
    setModalWidth?: Dispatch<SetStateAction<string | undefined>>
    setModalHeight?: Dispatch<SetStateAction<string | undefined>>
}

export interface AdminInfo {
    adminId: number;
    adminName: string;
    adminRole: AdminRole;
    createdAt: Date;
}