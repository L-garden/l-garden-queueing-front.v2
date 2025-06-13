import {useTranslations} from "next-intl";
import {TopAlertButton} from "@/component/queueBody/topAlert/topAlertButton/topAlertButton.style";

interface TopAlertButtonProp {
    isAdmin?: boolean;
    queueNo?: number;
    orderDone?: boolean;
}

export default ({isAdmin, queueNo, orderDone}: TopAlertButtonProp) => {
    if (isAdmin) {
        const t = useTranslations("topAlert.admin");
        return (
            <TopAlertButton>
                {t(`registerBell`)}
            </TopAlertButton>
        )
    }
    const t = useTranslations("topAlert.customer");
    if (queueNo) {
        return (
            <TopAlertButton>
                {t(`queueing`, {queueNo})}
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
