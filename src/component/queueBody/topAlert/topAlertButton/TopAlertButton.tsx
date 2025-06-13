import {useTranslations} from "next-intl";
import {TopAlertButton} from "@/component/queueBody/topAlert/topAlertButton/topAlertButton.style";

interface TopAlertButtonProp {
    isAdmin?: boolean;
    bellNo?: number;
    orderDone?: boolean;
}

export default ({isAdmin, bellNo, orderDone}: TopAlertButtonProp) => {
    if (isAdmin) {
        const t = useTranslations("topAlert.admin");
        return (
            <TopAlertButton>
                {t(`registerBell`)}
            </TopAlertButton>
        )
    }
    const t = useTranslations("topAlert.customer");
    if (bellNo) {
        return (
            <TopAlertButton>
                {t(`queueing`, {bellNo: bellNo})}
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
        </TopAlertButton>
    )
}
