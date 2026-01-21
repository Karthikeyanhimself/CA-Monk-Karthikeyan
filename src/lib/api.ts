import type { Blog } from "@/types";

const API_URL = "http://localhost:3001";

async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `API Error: ${response.statusText}`);
    }
    return response.json();
}

export const api = {
    getBlogs: async (): Promise<Blog[]> => {
        const res = await fetch(`${API_URL}/blogs?_sort=date&_order=desc`);
        return handleResponse<Blog[]>(res);
    },

    getBlogById: async (id: string): Promise<Blog> => {
        const res = await fetch(`${API_URL}/blogs/${id}`);
        return handleResponse<Blog>(res);
    },

    createBlog: async (blog: Omit<Blog, "id" | "date">): Promise<Blog> => {
        const res = await fetch(`${API_URL}/blogs`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                ...blog,
                id: crypto.randomUUID(),
                date: new Date().toISOString(),
            }),
        });
        return handleResponse<Blog>(res);
    },
};