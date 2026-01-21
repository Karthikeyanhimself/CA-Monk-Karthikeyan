import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Blog } from "@/types";

interface InfiniteBlogListProps {
    blogs?: Blog[];
}

export function InfiniteBlogList({ blogs = [] }: InfiniteBlogListProps) {
    const content = blogs.length > 0 ? blogs : [];

    return (
        <div className="flex flex-col items-center justify-center h-full space-y-8 overflow-hidden relative">
            <div className="text-center space-y-2 z-10 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
                <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl drop-shadow-sm">
                    Discover Insights
                </h1>
                <p className="text-lg text-black/80 max-w-2xl mx-auto font-medium">
                    Explore the latest trends in Finance, Tech, and Regulations.
                </p>
            </div>

            <div className="relative w-full overflow-hidden py-10">

                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#a0aecd] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#a0aecd] to-transparent z-20 pointer-events-none" />

                <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] gap-6 px-6">
                    {content.map((blog, idx) => (
                        <InfiniteCard key={`a-${blog.id}-${idx}`} blog={blog} />
                    ))}
                    {content.map((blog, idx) => (
                        <InfiniteCard key={`b-${blog.id}-${idx}`} blog={blog} />
                    ))}
                    {content.map((blog, idx) => (
                        <InfiniteCard key={`c-${blog.id}-${idx}`} blog={blog} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function InfiniteCard({ blog }: { blog: Blog }) {
    return (
        <Link
            to={`/blogs/${blog.id}`}
            className="w-[85vw] md:w-[320px] shrink-0 transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 py-4"
        >
            <Card className="h-full bg-white/20 backdrop-blur-md border border-white/40 shadow-xl hover:shadow-2xl hover:bg-white/30 transition-all rounded-xl overflow-hidden group">
                <div className="aspect-video w-full overflow-hidden">
                    <img
                        src={blog.coverImage}
                        alt={blog.title}
                        className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                    />
                </div>
                <CardHeader className="p-4 space-y-2">
                    <div className="flex gap-2">
                        {blog.category.slice(0, 1).map((c) => (
                            <Badge key={c} variant="secondary" className="bg-white/60 text-black border border-white/30 backdrop-blur-sm">{c}</Badge>
                        ))}
                    </div>
                    <CardTitle className="text-sm font-bold leading-tight text-black line-clamp-2">
                        {blog.title}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                    <p className="text-xs text-black font-medium line-clamp-2 opacity-80">
                        {blog.description}
                    </p>
                </CardContent>
            </Card>
        </Link>
    );
}