import { Skeleton } from "@/components/ui/skeleton";

export function BlogListSkeleton() {
    return (
        <div className="space-y-1">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="p-4 space-y-3 border-b border-slate-100 last:border-0">
                    <div className="flex gap-2">
                        <Skeleton className="h-3 w-16 rounded-full" />
                        <Skeleton className="h-3 w-16 rounded-full" />
                    </div>
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-3 w-full" />
                    <div className="flex justify-between pt-1">
                        <Skeleton className="h-3 w-12" />
                        <Skeleton className="h-3 w-12" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export function BlogDetailSkeleton() {
    return (
        <div className="max-w-3xl space-y-8 animate-pulse">
            {}
            <div className="space-y-4">
                <div className="flex gap-2">
                    <Skeleton className="h-6 w-20 rounded-full" />
                    <Skeleton className="h-6 w-20 rounded-full" />
                </div>

                <Skeleton className="h-12 w-3/4" />

                <div className="flex gap-6">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-32" />
                    <Skeleton className="h-4 w-16" />
                </div>
            </div>

            {}
            <Skeleton className="aspect-video w-full rounded-xl" />

            {}
            <div className="space-y-4 pt-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[95%]" />
                <Skeleton className="h-4 w-[80%]" />
            </div>
        </div>
    );
}