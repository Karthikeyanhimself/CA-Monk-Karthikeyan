import { useState } from "react";
import { PlusCircle, Menu } from "lucide-react"; 
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { CreateBlogForm } from "@/components/features/blog/CreateBlogForm";
import { useBlogs } from "@/hooks/useBlogs";
import { BlogCard } from "../features/blog/BlogCard";

export function Header() {
    const [open, setOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { data: blogs } = useBlogs();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/20 bg-white/10 backdrop-blur-md">
            <div className="flex h-14 items-center justify-between w-full px-4">

                <div className="flex items-center gap-2">

                    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden mr-2 text-black hover:bg-white/20">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px] bg-[#c5d3e8] border-r-white/40 p-0">
                            <SheetHeader className="p-4 border-b border-black/10 text-left">
                                <SheetTitle className="font-bold text-black">Menu</SheetTitle>
                            </SheetHeader>
                            <div className="h-full overflow-y-auto p-4 space-y-4">
                                {blogs?.map((blog) => (
                                    <div key={blog.id} onClick={() => setMobileMenuOpen(false)}>
                                        <BlogCard blog={blog} />
                                    </div>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>

                    <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-black drop-shadow-sm">
                        <span className="bg-black text-white px-2 py-0.5 rounded text-lg shadow-sm">CA</span>
                        <span className="hidden sm:inline-block">Monk Blog</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Dialog open={open} onOpenChange={setOpen}>
                        <DialogTrigger asChild>
                            <Button size="sm" className="gap-2 bg-black text-white hover:bg-black/80 border-0 shadow-lg transition-transform active:scale-95">
                                <PlusCircle className="h-4 w-4" />
                                <span className="hidden sm:inline">New Article</span>
                                <span className="sm:hidden">New</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[500px] bg-[#c5d3e8] border-white/40">
                            <DialogHeader>
                                <DialogTitle>Create New Article</DialogTitle>
                                <DialogDescription className="text-black/70">
                                    Share your knowledge with the community.
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