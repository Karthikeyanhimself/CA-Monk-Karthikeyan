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
        <Link to={`/blogs/${blog.id}`} className="block perspective-1000">
            <article className="group relative">
                <Card
                    className={cn(
                        
                        "cursor-pointer transition-all duration-300 backdrop-blur-md border shadow-lg",
                        "bg-white/20 border-white/40 border-b-white/10 border-r-white/10", 

                        isActive
                            ? "bg-white/40 border-white/60 shadow-xl scale-[1.02]"
                            : "hover:bg-white/30 hover:shadow-2xl hover:-translate-y-1"
                    )}
                >
                    <CardHeader className="p-4 pb-2 space-y-2">
                        <div className="flex flex-wrap gap-2">
                            {blog.category.map((cat) => (
                                <Badge
                                    key={cat}
                                    variant="secondary"
                                    
                                    
                                    className="text-[10px] uppercase tracking-wider font-bold text-black bg-white border border-slate-200 shadow-sm"
                                >
                                    {cat}
                                </Badge>
                            ))}
                        </div>
                        <CardTitle className="text-base font-bold leading-tight text-black group-hover:text-black transition-colors">
                            {blog.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <p className="text-sm text-black line-clamp-2 mb-3 font-medium opacity-90">
                            {blog.description}
                        </p>
                        <div className="flex items-center justify-between text-xs text-black font-bold opacity-80">
                            <span>{formatDistanceToNow(new Date(blog.date))} ago</span>
                            {blog.readTime && <span>{blog.readTime}</span>}
                        </div>
                    </CardContent>
                </Card>
            </article>
        </Link>
    );
}