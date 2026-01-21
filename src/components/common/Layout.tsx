import type { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
    sidebarContent: ReactNode;
    mainContent: ReactNode;
}

export function Layout({ sidebarContent, mainContent }: LayoutProps) {
    return (
        <div className="flex flex-col h-screen overflow-hidden bg-white">
            <Header /> {/* No props needed now */}
            <div className="flex flex-1 overflow-hidden">
                <Sidebar>{sidebarContent}</Sidebar>
                <main className="flex-1 overflow-y-auto bg-white relative">
                    <div className="h-full w-full p-6 md:p-10">
                        {mainContent}
                    </div>
                </main>
            </div>
        </div>
    );
}