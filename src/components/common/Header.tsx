import { useState } from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { CreateBlogForm } from "@/components/features/blog/CreateBlogForm";

export function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            {/* ✅ FIX APPLIED: 
          - Removed 'container' (which was centering content).
          - Added 'w-full px-4' to align strictly with the Sidebar's padding.
      */}
            <div className="flex h-14 items-center justify-between w-full px-4">
                {/* Logo Area - Aligned with Sidebar Title */}
                <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-slate-900">
                    <span className="bg-slate-900 text-white px-2 py-0.5 rounded text-lg">CA</span>
                    <span>Monk Blog</span>
                </div>

                {/* Action Area - Pushed to the far right edge */}
                <div className="flex items-center gap-4">
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button size="sm" className="gap-2">
                                <PlusCircle className="h-4 w-4" />
                                New Article
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                                <DialogTitle>Create New Article</DialogTitle>
                                <DialogDescription>
                                    Share your knowledge with the community. Fields marked with * are required.
                                </DialogDescription>
                            </DialogHeader>
                            <CreateBlogForm onSuccess={() => setOpen(false)} />
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </header>
    );
}