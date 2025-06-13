import TopAlertButton from "@/component/queueBody/topAlert/topAlertButton/TopAlertButton";
import {TopAlertSection} from "@/component/queueBody/topAlert/topAlert.style";

interface TopAlertProp {
    isAdmin?: boolean;
    bellNo?: number;
    orderDone?: boolean;
}

export default ({isAdmin, bellNo, orderDone}: TopAlertProp) => {
    return (
        <TopAlertSection>
            <TopAlertButton isAdmin={isAdmin} bellNo={bellNo} orderDone={orderDone}/>
        </TopAlertSection>
    )
}
