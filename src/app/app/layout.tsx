import type { Metadata } from "next";
import Sidebar from "./Sidebar";

export const metadata: Metadata = {
    title: "App - Rapid Pass",
    description: "App - Rapid Pass",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1">
                <div className="wrapper">
                    {children}
                </div>
            </div>
        </div>
    );
}
