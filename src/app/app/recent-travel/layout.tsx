import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Recent Travel - Rapid Pass",
    description: "Recent Travel - Rapid Pass",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
