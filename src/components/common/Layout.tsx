import { useState } from "react";
import type { ReactNode } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";

interface LayoutProps {
    sidebarContent: ReactNode;
    mainContent: ReactNode;
}

export function Layout({ sidebarContent, mainContent }: LayoutProps) {
    
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex flex-col h-screen overflow-hidden bg-white text-black">

            {}
            <Header />

            {}
            <div className="flex flex-1 overflow-hidden relative z-0">

                {}
                <Sidebar
                    isCollapsed={isCollapsed}
                    toggleCollapse={() => setIsCollapsed(!isCollapsed)}
                    className="backdrop-blur-md bg-white/10 border-r border-white/20 transition-all duration-300 ease-in-out"
                >
                    {sidebarContent}
                </Sidebar>

                {}
                <main className="flex-1 overflow-y-auto relative transition-all duration-300 ease-in-out">
                    <div className="min-h-full p-6 md:p-10">
                        {mainContent}
                    </div>
                </main>
            </div>

            {}
            <div className="z-10 bg-white/10 backdrop-blur-md border-t border-white/20">
                <Footer />
            </div>
        </div>
    );
}