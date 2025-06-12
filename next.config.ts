import type {NextConfig} from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
    /* config options here */
    compiler: {
        styledComponents: true,
    },
    output: process.env.NODE_ENV === "production" ? 'export' : undefined,
};

export default withNextIntl(nextConfig);