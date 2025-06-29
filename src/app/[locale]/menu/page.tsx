"use client"
import QueueBody from "@/component/queueBody/QueueBody";
import {MenuImg, MenuPageSection} from "@/app/[locale]/menu/menuPage.style";
import {useState} from "react";

export default () => {
    const [anyQueue, setAnyQueue] = useState<boolean>(false);
    return (
        <MenuPageSection $isMini={anyQueue}>
            <MenuImg
                src={`${process.env.NEXT_PUBLIC_S3_SERVER_URL}${anyQueue ? "/menu-mini.png" : "/menu.png"}`}
            />
            <QueueBody onMenu={true} anyQueue={anyQueue} setAnyQueue={setAnyQueue}/>
        </MenuPageSection>
    )
}