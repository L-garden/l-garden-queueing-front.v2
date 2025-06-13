import {
    BellAdminButton
} from "@/component/queueBody/bellQueue/bellInfo/bellAdmin/bellAdminButton/bellAdminButton.style";

interface BellAdminButtonProp {
    children: React.ReactNode;
    type: "positive" | "negative";
}

export default ({children, type}: BellAdminButtonProp) => {
    return (
        <BellAdminButton $type={type}>
            {children}
        </BellAdminButton>
    )
}