'use client'
import TopAlert from "@/component/queueBody/topAlert/TopAlert";
import Queue from "@/component/queueBody/bellQueue/BellQueue";
import {QueueBellTitle, QueueBodySection} from "@/component/queueBody/queueBody.style";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {BellData} from "@/component/queueBody/types/Bell";
import {bellListApi} from "@/api/rest/bell/BellApi";
import {useBellStompClient} from "@/api/stomp/bell/BellStomp";

interface QueueBodyProp {
    isAdmin?: boolean;
    onMenu?: boolean;
    anyQueue?: boolean;
    setAnyQueue?: Dispatch<SetStateAction<boolean>>;
}

const initBellList: BellData[] = [];

export default ({isAdmin, onMenu = false, anyQueue, setAnyQueue}: QueueBodyProp) => {
    const [bellList, setBellList] = useState<BellData[]>(initBellList);
    const [myBellNo, setMyBellNo] = useState<number | undefined>();
    const [myOrderNo, setMyOrderNo] = useState<number | undefined>();
    const [orderDone, setOrderDone] = useState<boolean>(false);
    useBellStompClient(setBellList);
    useEffect(() => {
        bellListApi().then((bellInfoResponseSlice) => {
            setBellList(bellInfoResponseSlice.content);
        });
    }, []);
    useEffect(() => {
        setOrderDone(false);
        setMyOrderNo(undefined);
        bellList.slice().reverse().forEach((bellData, index) => {
            if (bellData.bellNum === myBellNo) {
                setMyOrderNo(bellList.length - index);
                if (bellData.bellStatus === 'DONE') {
                    setOrderDone(true);
                }
            }
        })
    }, [bellList, myBellNo]);
    useEffect(() => {
        if (setAnyQueue) {
            if (bellList.length > 0) {
                setAnyQueue(true);
            } else {
                setAnyQueue(false);
            }
        }
    }, [bellList]);
    if (anyQueue !== undefined && !anyQueue)
        return <></>;
    return (
        <QueueBodySection $onMenu={onMenu}>
            {
                onMenu ?
                    <QueueBellTitle>
                        진동벨 번호
                    </QueueBellTitle> :
                    <TopAlert isAdmin={isAdmin} orderDone={orderDone} myOrderNo={myOrderNo} setMyBellNo={setMyBellNo}/>
            }
            <Queue isAdmin={isAdmin} bellList={bellList} myBellNo={myBellNo} onMenu={onMenu}/>
        </QueueBodySection>
    );
}