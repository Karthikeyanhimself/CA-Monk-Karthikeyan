import { z } from "zod";

export const blogFormSchema = z.object({
    title: z.string().min(5, { message: "Title must be at least 5 characters." }),
    category: z.string().min(2, { message: "At least one category is required." }),
    description: z.string().min(10, { message: "Description must be at least 10 characters." }),
    coverImage: z.string().url({ message: "Please enter a valid URL." }),
    content: z.string().min(20, { message: "Content is too short." }),
});

export type BlogFormValues = z.infer<typeof blogFormSchema>;