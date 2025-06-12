export default async function LocaleLayout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang='ko'>
        <body>
        {children}
        </body>
        </html>
    );
}
