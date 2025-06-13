import TopAlertButton from "@/component/queueBody/topAlert/topAlertButton/TopAlertButton";
import {TopAlertSection} from "@/component/queueBody/topAlert/topAlert.style";

interface TopAlertProp {
    isAdmin?: boolean
}

export default ({isAdmin}: TopAlertProp) => {
    return (
        <TopAlertSection>
            <TopAlertButton isAdmin={isAdmin}/>
        </TopAlertSection>
    )
}
