import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import type { BlogFormValues } from "@/lib/validators";

// Query Keys Factory (Best Practice)
export const BLOG_KEYS = {
    all: ["blogs"] as const,
    lists: () => [...BLOG_KEYS.all, "list"] as const,
    detail: (id: string) => [...BLOG_KEYS.all, "detail", id] as const,
};

// Hook 1: Fetch All Blogs
export function useBlogs() {
    return useQuery({
        queryKey: BLOG_KEYS.lists(),
        queryFn: api.getBlogs,
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}

// Hook 2: Fetch Single Blog
export function useBlog(id: string) {
    return useQuery({
        queryKey: BLOG_KEYS.detail(id),
        queryFn: () => api.getBlogById(id),
        enabled: !!id, // Only run if ID is present
    });
}

// Hook 3: Create Blog Mutation
export function useCreateBlog(onSuccessCallback?: () => void) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (values: BlogFormValues) => {
            // Transform the comma-separated string back to an array
            const payload = {
                ...values,
                category: values.category.split(",").map((c) => c.trim()),
            };
            return api.createBlog(payload);
        },
        onSuccess: () => {
            // 1. Invalidate cache to refetch the list
            queryClient.invalidateQueries({ queryKey: BLOG_KEYS.lists() });
            // 2. Run any UI callbacks (like closing a modal)
            if (onSuccessCallback) onSuccessCallback();
        },
    });
}