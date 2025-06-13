import {useEffect, useState} from "react";
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

interface AdminSettingProp {
    hiddenModal: boolean;
    adminRole: AdminRole;
}

export default ({hiddenModal, adminRole}: AdminSettingProp) => {
    const [settingStatus, setSettingStatus] = useState<SettingStatus>("console");
    const [adminName, setAdminName] = useState<string | undefined>();
    useEffect(() => {
        setSettingStatus("console");
        setAdminName(undefined);
    }, [hiddenModal]);
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
            return <></>
        case "removeAdminDone":
            return <></>
        case "removeCeoDenied":
            return <></>
        default:
            notFound();
    }
}