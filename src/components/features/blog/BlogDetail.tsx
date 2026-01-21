import { format } from "date-fns";
import { Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BlogDetailSkeleton } from "./BlogSkeletons";
import type { Blog } from "@/types";

interface BlogDetailProps {
    blog?: Blog;
    isLoading: boolean;
}

export function BlogDetail({ blog, isLoading }: BlogDetailProps) {
    if (isLoading) return <BlogDetailSkeleton />;

    if (!blog) {
        return (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                {}
            </div>
        );
    }

    
    return (
        <article className="max-w-5xl space-y-8 pb-20 mx-auto">
            {}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    {blog.category.map((cat) => (
                        <Badge key={cat} variant="outline" className="text-indigo-600 border-indigo-200 bg-indigo-50">
                            {cat}
                        </Badge>
                    ))}
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 lg:text-5xl">
                    {blog.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 font-medium">
                    {blog.author && (
                        <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{blog.author}</span>
                        </div>
                    )}
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{format(new Date(blog.date), "MMMM d, yyyy")}</span>
                    </div>
                </div>
            </div>

            {}
            <div className="relative aspect-video overflow-hidden rounded-xl border bg-slate-100 shadow-sm w-full">
                <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
            </div>

            <Separator />

            {}
            <div className="prose prose-slate prose-lg max-w-4xl text-slate-600 leading-relaxed whitespace-pre-wrap">
                {blog.content}
            </div>

            {}
            <div className="flex items-center justify-between pt-8 border-t max-w-4xl">
                <p className="font-semibold text-slate-900">Enjoyed this read?</p>
                <Button>Share Article</Button>
            </div>
        </article>
    );
}