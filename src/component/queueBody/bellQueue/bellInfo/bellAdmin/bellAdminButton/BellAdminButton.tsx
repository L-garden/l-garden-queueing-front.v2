import {
    BellAdminButton
} from "@/component/queueBody/bellQueue/bellInfo/bellAdmin/bellAdminButton/bellAdminButton.style";
import {MouseEvent} from "react";

interface BellAdminButtonProp {
    children: React.ReactNode;
    type: "positive" | "negative";
    onClick: (e: MouseEvent) => void;
}

export default ({children, type, onClick}: BellAdminButtonProp) => {
    return (
        <BellAdminButton $type={type} onClick={onClick}>
            {children}
        </BellAdminButton>
    )
}