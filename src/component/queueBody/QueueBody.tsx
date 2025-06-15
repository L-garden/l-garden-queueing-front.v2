'use client'
import TopAlert from "@/component/queueBody/topAlert/TopAlert";
import Queue from "@/component/queueBody/bellQueue/BellQueue";
import {QueueBodySection} from "@/component/queueBody/queueBody.style";
import {useEffect, useState} from "react";
import {BellData} from "@/component/queueBody/types/Bell";
import {bellListApi} from "@/api/rest/bell/BellApi";

interface QueueBodyProp {
    isAdmin?: boolean
}

const initBellList: BellData[] = [];

export default ({isAdmin}: QueueBodyProp) => {
    const [bellList, setBellList] = useState<BellData[]>(initBellList);
    const [myBellNo, setMyBellNo] = useState<number | undefined>();
    const [myOrderNo, setMyOrderNo] = useState<number | undefined>();
    const [orderDone, setOrderDone] = useState<boolean>(false);
    useEffect(() => {
        bellListApi().then((bellInfoResponseSlice) => {
            setBellList(bellInfoResponseSlice.content);
        });
    }, []);
    useEffect(() => {
        setOrderDone(false);
        setMyOrderNo(undefined);
        bellList.reverse().forEach((bellData, index) => {
            if (bellData.bellNum === myBellNo) {
                setMyOrderNo(index + 1);
                if (bellData.bellStatus === 'DONE') {
                    setOrderDone(true);
                }
            }
        })
    }, [bellList, myBellNo]);
    return (
        <QueueBodySection>
            <TopAlert isAdmin={isAdmin} orderDone={orderDone} myOrderNo={myOrderNo} setMyBellNo={setMyBellNo}/>
            <Queue isAdmin={isAdmin} bellList={bellList} myBellNo={myBellNo}/>
        </QueueBodySection>
    );
}