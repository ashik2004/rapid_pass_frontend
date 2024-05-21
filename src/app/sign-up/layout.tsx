import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sign Up - Rapid Pass",
    description: "Sign Up - Rapid Pass",
};

export default function SignUpLayout({
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
