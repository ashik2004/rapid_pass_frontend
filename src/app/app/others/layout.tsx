import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Others - Rapid Pass",
    description: "Others - Rapid Pass",
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
