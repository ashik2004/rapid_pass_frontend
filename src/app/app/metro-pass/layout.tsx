import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Metro Pass",
    description: "Metro Pass",
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
