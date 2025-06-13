import {FormEvent} from "react";
import {
    RegisterBellButton,
    RegisterBellForm,
    RegisterBellInput,
    RegisterBellInputTitle,
    RegisterBellSection
} from "@/component/modalContent/registerBell/registerBell.style";
import {useTranslations} from "next-intl";

interface RegisterBellProp {
    registerBell: () => void;
}

export default ({registerBell}: RegisterBellProp) => {
    const t = useTranslations("modal.registerBell");
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        registerBell();
    }
    return (
        <RegisterBellForm onSubmit={onSubmit}>
            <RegisterBellSection>
                <RegisterBellInputTitle>{t('bell')}</RegisterBellInputTitle>
                <RegisterBellInput type="number" inputMode="numeric" placeholder={t('number')}/>
            </RegisterBellSection>
            <RegisterBellButton>{t('register')}</RegisterBellButton>
        </RegisterBellForm>
    )
}