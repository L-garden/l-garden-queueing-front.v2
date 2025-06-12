import {redirect} from "@/i18n/navigation";
import {useTranslations} from "next-intl";

export default function Home() {
    const t = useTranslations();
    redirect({
        href: `/queue`, locale: t('locale')
    });
}
