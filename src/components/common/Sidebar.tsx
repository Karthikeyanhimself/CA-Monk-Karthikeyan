import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronLeft, LayoutList } from "lucide-react";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    isCollapsed?: boolean;
    toggleCollapse?: () => void;
}

export function Sidebar({ className, children, isCollapsed, toggleCollapse, ...props }: SidebarProps) {
    return (
        <aside
            className={cn(
                "hidden md:flex flex-col border-r h-full transition-all duration-300 ease-in-out",
                isCollapsed ? "w-[60px]" : "w-[400px]",
                className
            )}
            {...props}
        >
            <div className={cn(
                "flex items-center border-b border-white/20 bg-white/10 backdrop-blur-md sticky top-0 z-10 h-[57px]",
                isCollapsed ? "justify-center p-0" : "justify-between p-4"
            )}>

                {!isCollapsed && (
                    <h2 className="text-sm font-bold text-black/80 uppercase tracking-wider drop-shadow-sm whitespace-nowrap overflow-hidden">
                        Latest Articles
                    </h2>
                )}

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleCollapse}
                    className="h-8 w-8 text-black hover:bg-white/20"
                    title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                >
                    {isCollapsed ? (
                        <LayoutList className="h-5 w-5" />
                    ) : (
                        <ChevronLeft className="h-5 w-5" />
                    )}
                </Button>
            </div>

            <ScrollArea className={cn(
                "flex-1 transition-opacity duration-300",
                isCollapsed ? "opacity-0 pointer-events-none" : "opacity-100"
            )}>
                <div className="p-4 space-y-6 min-w-[400px]">
                    {children}
                </div>
            </ScrollArea>
        </aside>
    );
}