import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign In - Rapid Pass",
    description: "Sign In - Rapid Pass",
};

export default function SignInLayout({
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
