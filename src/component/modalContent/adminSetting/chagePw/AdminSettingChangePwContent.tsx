import {useTranslations} from "next-intl";
import {ModalSection} from "@/component/modalContent/styles/modalNormal.style";
import {FormEvent, useEffect, useRef, useState} from "react";
import {SetSettingStatusProp} from "@/component/modalContent/adminSetting/AdminSetting.type";
import {
    ModalForm,
    ModalFormButton,
    ModalFormInput,
    ModalFormInputContainer,
    ModalFormInputTitle
} from "@/component/modalContent/styles/modalForm.style";
import {adminsChangePwApi, adminsGetIdApi} from "@/api/rest/admins/AdminsApi";

export default ({setSettingStatus}: SetSettingStatusProp) => {
    const t = useTranslations("modal.admin.setting.changePw");
    const [userId, setUserId] = useState<string>('');
    const pw = useRef<HTMLInputElement>(null);
    const pwCheck = useRef<HTMLInputElement>(null);
    useEffect(() => {
        adminsGetIdApi().then((adminsIdResponse) => {
            setUserId(adminsIdResponse.id);
        });
    }, []);
    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (pw.current?.value !== pwCheck.current?.value) {
            alert(t('pwNotMatchAlert'));
            return;
        }
        if (((pw.current?.value.length || 0) * (pwCheck.current?.value.length || 0)) === 0) {
            alert(t('plzInsertPw'));
            return;
        }
        adminsChangePwApi({
            userId: String(userId),
            pw: String(pw.current?.value),
            pwChk: String(pwCheck.current?.value)
        });
        setSettingStatus("changePwDone");
    }
    return (
        <ModalSection onSubmit={onSubmit}>
            <ModalForm>
                <ModalFormInputContainer>
                    <ModalFormInputTitle>{t('id')}</ModalFormInputTitle>
                    <ModalFormInput
                        placeholder={t('idPlaceholder')}
                        type="text"
                        disabled
                        value={userId}
                    />
                </ModalFormInputContainer>
                <ModalFormInputContainer>
                    <ModalFormInputTitle>{t('pw')}</ModalFormInputTitle>
                    <ModalFormInput placeholder={t('pwPlaceholder')} type="password" ref={pw}/>
                </ModalFormInputContainer>
                <ModalFormInputContainer>
                    <ModalFormInputTitle>{t('pwCheck')}</ModalFormInputTitle>
                    <ModalFormInput placeholder={t('pwCheckPlaceholder')} type="password" ref={pwCheck}/>
                </ModalFormInputContainer>
                <ModalFormButton>{t('changePw')}</ModalFormButton>
            </ModalForm>
        </ModalSection>
    )
}