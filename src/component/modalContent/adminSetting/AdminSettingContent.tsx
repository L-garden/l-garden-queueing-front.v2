import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {AdminRole, SettingStatus} from "@/component/modalContent/adminSetting/AdminSetting.type";
import AdminSettingConsoleContent from "@/component/modalContent/adminSetting/console/AdminSettingConsoleContent";
import {notFound} from "next/navigation";
import AdminSettingChangePwContent from "@/component/modalContent/adminSetting/chagePw/AdminSettingChangePwContent";
import AdminSettingChangePwDoneContent
    from "@/component/modalContent/adminSetting/chagePw/AdminSettingChangePwDoneContent";
import AdminSettingAdminChangeContent
    from "@/component/modalContent/adminSetting/adminChange/AdminSettingAdminChangeContent";
import AdminSettingAdminChangeDeniedContent
    from "@/component/modalContent/adminSetting/adminChange/AdminSettingAdminChangeDeniedContent";
import AdminSettingAddAdminContent from "@/component/modalContent/adminSetting/addAdmin/AdminSettingAddAdminContent";
import AdminSettingAddAdminDoneContent
    from "@/component/modalContent/adminSetting/addAdmin/AdminSettingAddAdminDoneContent";
import AdminSettingRemoveAdminContent
    from "@/component/modalContent/adminSetting/removeAdmin/AdminSettingRemoveAdminContent";
import AdminSettingRemoveAdminDoneContent
    from "@/component/modalContent/adminSetting/removeAdmin/AdminSettingRemoveAdminDoneContent";
import AdminSettingRemoveCeoDeniedContent
    from "@/component/modalContent/adminSetting/removeAdmin/AdminSettingRemoveCeoDeniedContent";

interface AdminSettingProp {
    hiddenModal: boolean;
    adminRole: AdminRole;
    setModalWidth: Dispatch<SetStateAction<string | undefined>>
    setModalHeight: Dispatch<SetStateAction<string | undefined>>
}

export default ({hiddenModal, adminRole, setModalWidth, setModalHeight}: AdminSettingProp) => {
    const [settingStatus, setSettingStatus] = useState<SettingStatus>("console");
    const [adminName, setAdminName] = useState<string | undefined>();
    useEffect(() => {
        setSettingStatus("console");
        setAdminName(undefined);
        setModalWidth(undefined);
        setModalHeight(undefined);
    }, [hiddenModal, setModalWidth, setModalHeight]);
    switch (settingStatus) {
        case "console":
            return <AdminSettingConsoleContent setSettingStatus={setSettingStatus}/>
        case "changePw":
            return <AdminSettingChangePwContent setSettingStatus={setSettingStatus}/>
        case "changePwDone":
            return <AdminSettingChangePwDoneContent/>
        case "adminChange":
            return <AdminSettingAdminChangeContent setSettingStatus={setSettingStatus} adminRole={adminRole}/>
        case "adminChangeDenied":
            return <AdminSettingAdminChangeDeniedContent/>
        case "addAdmin":
            return <AdminSettingAddAdminContent setSettingStatus={setSettingStatus} setAdminName={setAdminName}/>
        case "addAdminDone":
            return <AdminSettingAddAdminDoneContent setSettingStatus={setSettingStatus} adminName={adminName}/>
        case "removeAdmin":
            return <AdminSettingRemoveAdminContent
                setSettingStatus={setSettingStatus}
                setAdminName={setAdminName}
                setModalWidth={setModalWidth}
                setModalHeight={setModalHeight}
            />
        case "removeAdminDone":
            return <AdminSettingRemoveAdminDoneContent setSettingStatus={setSettingStatus} adminName={adminName}/>
        case "removeCeoDenied":
            return <AdminSettingRemoveCeoDeniedContent setSettingStatus={setSettingStatus} adminName={adminName}/>
        default:
            notFound();
    }
}