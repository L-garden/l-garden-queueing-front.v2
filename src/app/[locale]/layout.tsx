import type {Metadata} from "next";
import "./globals.css";
import {NextIntlClientProvider} from "next-intl";
import {setRequestLocale} from "next-intl/server";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";
import {hasLocale} from "use-intl";

export const metadata: Metadata = {
    title: "엘가든",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout(
    {
        children,
        params
    }: Readonly<{
        children: React.ReactNode;
        params: Promise<{ locale: string }>
    }>) {
    const {locale} = await params;
    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }
    setRequestLocale(locale);
    return (
        <html lang={locale} suppressHydrationWarning>
        <body>
        <NextIntlClientProvider>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
