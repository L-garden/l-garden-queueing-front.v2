import TopAlertButton from "@/component/queueBody/topAlert/topAlertButton/TopAlertButton";
import {TopAlertSection} from "@/component/queueBody/topAlert/topAlert.style";

interface TopAlertProp {
    isAdmin?: boolean;
    orderDone?: boolean;
    myOrderNo?: number
}

export default ({isAdmin, orderDone, myOrderNo}: TopAlertProp) => {
    return (
        <TopAlertSection>
            <TopAlertButton isAdmin={isAdmin} orderDone={orderDone} myOrderNo={myOrderNo}/>
        </TopAlertSection>
    )
}
