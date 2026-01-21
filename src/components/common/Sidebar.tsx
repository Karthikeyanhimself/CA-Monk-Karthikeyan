import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area"; // ✅ Now strictly used

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function Sidebar({ className, children, ...props }: SidebarProps) {
    return (
        <aside
            className={cn(
                "hidden md:flex flex-col w-[400px] border-r bg-slate-50/50",
                className
            )}
            {...props}
        >
            <div className="p-4 border-b bg-white sticky top-0 z-10">
                <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Latest Articles
                </h2>
            </div>

            {/* ✅ Replaced standard div with ScrollArea for polished UI */}
            <ScrollArea className="flex-1">
                <div className="p-4 space-y-4">
                    {children}
                </div>
            </ScrollArea>
        </aside>
    );
}