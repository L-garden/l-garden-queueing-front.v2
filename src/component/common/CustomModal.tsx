'use client'
import {ModalBackground, ModalContentContainer} from "@/component/common/customModal.style";
import {MouseEvent, useEffect, useState} from "react";
import {createPortal} from "react-dom";

interface ModalProp {
    children: React.ReactNode;
    hidden: boolean;
    onClickOutSide: (e: MouseEvent) => void;
    width?: string;
    height?: string;
    z_index?: number
}

export default (
    {
        children,
        hidden = true,
        onClickOutSide,
        width = "330px",
        height = "270px",
        z_index = 10
    }: ModalProp) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (!hidden) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.overflowY = 'scroll';
            document.body.style.width = '100%';
            return () => {
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.overflowY = '';
                document.body.style.width = '';
                window.scrollTo(0, scrollY);
            };
        }
    }, [hidden]);

    if (!mounted) return null;

    return createPortal(
        <ModalBackground $z_index={z_index} $hidden={hidden} onClick={(e) => onClickOutSide(e)}>
            <ModalContentContainer
                $height={height}
                $width={width}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </ModalContentContainer>
        </ModalBackground>
        , document.body
    );
}