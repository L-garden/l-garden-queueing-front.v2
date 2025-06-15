import {useSocketClient} from "@/api/stomp/Client";
import {BellData} from "@/component/queueBody/types/Bell";
import {Dispatch, SetStateAction} from "react";
import EventResponse from "@/api/stomp/EventResponse";
import {BellEvent} from "@/api/stomp/bell/BellEvent.type";
import {BellInfoResponse} from "@/api/dto/bell/BellResponse";
import {ENDPOINT_BELL_STATUS_STOMP} from "@/constants/servers";

export const useBellStompClient = (setBellList: Dispatch<SetStateAction<BellData[]>>) => {
    return useSocketClient<BellInfoResponse>(
        [`${ENDPOINT_BELL_STATUS_STOMP}`],
        (eventResponse: EventResponse<BellInfoResponse>) => {
            console.log(eventResponse);
            switch (eventResponse.eventType as BellEvent) {
                case "BELL_ENQUEUE" :
                    console.log("BELL_ENQUEUE?");
                    setBellList(prevState => {
                        console.log("prev", prevState);
                        const nextState = [
                            ...prevState,
                            eventResponse.eventObject as BellInfoResponse,
                        ];
                        console.log("next", nextState);
                        return nextState;
                    });
                    break;
                case "BELL_STATUS_CHANGED":
                    setBellList(prevState => {
                        console.log("prev", prevState);
                        const nextState = prevState.map((bellInfo) => {
                            if (bellInfo.bellId === eventResponse.eventObject.bellId) {
                                bellInfo = eventResponse.eventObject;
                            }
                            return bellInfo;
                        });
                        console.log("next", nextState);
                        return nextState;
                    });
                    break;
                case "ORDER_DELETED":
                    console.log("ORDER_DELETED?");
                    setBellList(prevState =>
                        prevState.filter(bellInfo => bellInfo.bellId !== eventResponse.eventObject.bellId)
                    );
                    break;
                default :
                    console.log("what?");
            }
        });
}