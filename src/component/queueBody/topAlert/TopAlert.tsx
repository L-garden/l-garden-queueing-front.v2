import TopAlertButton from "@/component/queueBody/topAlert/topAlertButton/TopAlertButton";
import {TopAlertSection} from "@/component/queueBody/topAlert/topAlert.style";
import {Dispatch, SetStateAction} from "react";

interface TopAlertProp {
    isAdmin?: boolean;
    orderDone?: boolean;
    myOrderNo?: number;
    setMyBellNo: Dispatch<SetStateAction<number | undefined>>;
}

export default ({isAdmin, orderDone, myOrderNo, setMyBellNo}: TopAlertProp) => {
    return (
        <TopAlertSection>
            <TopAlertButton isAdmin={isAdmin} orderDone={orderDone} myOrderNo={myOrderNo} setMyBellNo={setMyBellNo}/>
        </TopAlertSection>
    )
}
