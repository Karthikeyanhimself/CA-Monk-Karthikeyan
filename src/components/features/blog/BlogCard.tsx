import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Blog } from "@/types";

interface BlogCardProps {
    blog: Blog;
    isActive?: boolean;
}

export function BlogCard({ blog, isActive }: BlogCardProps) {
    return (
        <Link to={`/blogs/${blog.id}`}>
            <article className="group relative">
                <Card
                    className={cn(
                        "cursor-pointer transition-all duration-200 hover:shadow-md border-transparent bg-transparent shadow-none",
                        isActive
                            ? "bg-white shadow-sm border-slate-200 ring-1 ring-slate-900/5"
                            : "hover:bg-white/50"
                    )}
                >
                    <CardHeader className="p-4 pb-2 space-y-2">
                        <div className="flex flex-wrap gap-2">
                            {blog.category.map((cat) => (
                                <Badge
                                    key={cat}
                                    variant="secondary"
                                    className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 bg-slate-100"
                                >
                                    {cat}
                                </Badge>
                            ))}
                        </div>
                        <CardTitle className="text-base font-bold leading-tight text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {blog.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <p className="text-sm text-slate-500 line-clamp-2 mb-3">
                            {blog.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
                            <span>{formatDistanceToNow(new Date(blog.date))} ago</span>
                            {blog.readTime && <span>{blog.readTime}</span>}
                        </div>
                    </CardContent>
                </Card>
            </article>
        </Link>
    );
}