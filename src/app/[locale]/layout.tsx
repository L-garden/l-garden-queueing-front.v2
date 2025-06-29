import type {Metadata} from "next";
import "./globals.css";
import {NextIntlClientProvider} from "next-intl";
import {setRequestLocale} from "next-intl/server";
import {routing} from "@/i18n/routing";
import {notFound} from "next/navigation";
import {hasLocale} from "use-intl";
import * as Sentry from '@sentry/nextjs';
import {FontFamilyProvider} from "@/app/[locale]/layout.style";

export function generateMetadata(): Metadata {
    return {
        title: "엘가든",
        other: {
            ...Sentry.getTraceData(),
        }
    }
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
            <FontFamilyProvider>
                {children}
            </FontFamilyProvider>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
