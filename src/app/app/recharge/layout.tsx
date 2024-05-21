import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Recharge - Rapid Pass",
    description: "Recharge - Rapid Pass",
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
