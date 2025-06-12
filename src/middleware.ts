import createMiddleware from "next-intl/middleware";
import {routing} from "@/i18n/routing";

export default createMiddleware(routing);

export const config = {
    matcher: ['/', '/(en|ko)/:path*']
    // matcher: ['/((?!_next).*)',]
    // matcher: ['/((?!api|_next|.*\\..*).*)']
    // matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}