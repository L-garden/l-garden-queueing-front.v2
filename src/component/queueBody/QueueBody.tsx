'use client'
import TopAlert from "@/component/queueBody/topAlert/TopAlert";
import Queue from "@/component/queueBody/bellQueue/BellQueue";
import {QueueBodySection} from "@/component/queueBody/queueBody.style";
import {useEffect, useState} from "react";
import {BellData} from "@/component/queueBody/types/Bell";

interface QueueBodyProp {
    isAdmin?: boolean
}

const initBellList: BellData[] = [
    {
        bellNo: 2,
        createdAt: new Date(Date.now() - 10 * 60 * 1000),
        isDone: true
    },
    {
        bellNo: 1,
        createdAt: new Date(Date.now() - 5 * 60 * 1000),
        isDone: true
    },
    {
        bellNo: 3,
        createdAt: new Date(Date.now() - 40 * 1000),
        isDone: false
    },
    {
        bellNo: 7,
        createdAt: new Date(),
        isDone: false
    },
];

const initMyBell = 7;
const initOrderDone = false;

export default ({isAdmin}: QueueBodyProp) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [bellList, setBellList] = useState<BellData[]>(initBellList);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [myBellNo, setMyBellNo] = useState<number>(initMyBell);
    const [myOrderNo, setMyOrderNo] = useState<number | undefined>();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [orderDone, setOrderDone] = useState<boolean>(initOrderDone);
    useEffect(() => {
        bellList.forEach((bellData, index) => {
            if (bellData.bellNo === myBellNo) {
                setMyOrderNo(index + 1);
            }
        })
    }, [bellList]);
    return (
        <QueueBodySection>
            <TopAlert isAdmin={isAdmin} orderDone={orderDone} myOrderNo={myOrderNo}/>
            <Queue isAdmin={isAdmin} bellList={bellList} myBellNo={myBellNo}/>
        </QueueBodySection>
    );
}