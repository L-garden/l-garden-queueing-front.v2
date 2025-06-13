import {FormEvent, useRef} from "react";
import {
    RegisterBellButton,
    RegisterBellForm,
    RegisterBellInput,
    RegisterBellInputTitle,
    RegisterBellSection
} from "@/component/modalContent/registerBell/registerBell.style";
import {useTranslations} from "next-intl";

interface RegisterBellProp {
    registerBell: (bellNo: number) => void;
}

export default ({registerBell}: RegisterBellProp) => {
    const t = useTranslations("modal.registerBell");
    const registerBellInputRef = useRef<HTMLInputElement>(null);
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        registerBell(Number(registerBellInputRef.current?.value));
    }
    return (
        <RegisterBellForm onSubmit={onSubmit}>
            <RegisterBellSection>
                <RegisterBellInputTitle>{t('bell')}</RegisterBellInputTitle>
                <RegisterBellInput
                    type="number"
                    inputMode="numeric"
                    placeholder={t('number')}
                    ref={registerBellInputRef}
                />
            </RegisterBellSection>
            <RegisterBellButton>{t('register')}</RegisterBellButton>
        </RegisterBellForm>
    )
}