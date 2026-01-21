import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import type { BlogFormValues } from "@/lib/validators";

export const BLOG_KEYS = {
    all: ["blogs"] as const,
    lists: () => [...BLOG_KEYS.all, "list"] as const,
    detail: (id: string) => [...BLOG_KEYS.all, "detail", id] as const,
};

export function useBlogs() {
    return useQuery({
        queryKey: BLOG_KEYS.lists(),
        queryFn: api.getBlogs,
        staleTime: 1000 * 60 * 5,
    });
}

export function useBlog(id: string) {
    return useQuery({
        queryKey: BLOG_KEYS.detail(id),
        queryFn: () => api.getBlogById(id),
        enabled: !!id,
    });
}

export function useCreateBlog(onSuccessCallback?: () => void) {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (values: BlogFormValues) => {
            const payload = {
                ...values,
                category: values.category.split(",").map((c) => c.trim()),
            };
            return api.createBlog(payload);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: BLOG_KEYS.lists() });
            if (onSuccessCallback) onSuccessCallback();
        },
    });
}