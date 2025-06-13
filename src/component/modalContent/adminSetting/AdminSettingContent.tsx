import {useEffect, useState} from "react";
import {SettingStatus} from "@/component/modalContent/adminSetting/AdminSetting.type";
import AdminSettingConsoleContent from "@/component/modalContent/adminSetting/console/AdminSettingConsoleContent";
import {notFound} from "next/navigation";
import AdminSettingChangePwContent from "@/component/modalContent/adminSetting/chagePw/AdminSettingChangePwContent";
import AdminSettingChangePwDoneContent
    from "@/component/modalContent/adminSetting/chagePw/AdminSettingChangePwDoneContent";
import AdminSettingAdminChangeContent
    from "@/component/modalContent/adminSetting/adminChange/AdminSettingAdminChangeContent";

interface AdminSettingProp {
    hiddenModal: boolean;
}

export default ({hiddenModal}: AdminSettingProp) => {
    const [settingStatus, setSettingStatus] = useState<SettingStatus>("console");
    useEffect(() => {
        setSettingStatus("console");
    }, [hiddenModal]);
    switch (settingStatus) {
        case "console":
            return <AdminSettingConsoleContent setSettingStatus={setSettingStatus}/>
        case "changePw":
            return <AdminSettingChangePwContent setSettingStatus={setSettingStatus}/>
        case "changePwDone":
            return <AdminSettingChangePwDoneContent/>
        case "adminChange":
            return <AdminSettingAdminChangeContent setSettingStatus={setSettingStatus}/>
        case "adminChangeDenied":
            return <></>
        case "addAdmin":
            return <></>
        case "addAdminDone":
            return <></>
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