import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useCreateBlog } from "@/hooks/useBlogs";

import { blogFormSchema, type BlogFormValues } from "@/lib/validators";

interface CreateBlogFormProps {
    onSuccess: () => void;
}

export function CreateBlogForm({ onSuccess }: CreateBlogFormProps) {
    
    const form = useForm<BlogFormValues>({
        resolver: zodResolver(blogFormSchema),
        defaultValues: {
            title: "",
            category: "",
            description: "",
            coverImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
            content: "",
        },
    });

    const { mutate, isPending } = useCreateBlog(onSuccess);

    function onSubmit(values: BlogFormValues) {
        mutate(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Article Title</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., The Future of React" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Categories (comma separated)</FormLabel>
                            <FormControl>
                                <Input placeholder="e.g., Tech, Finance, Career" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Short Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="A brief summary for the card..."
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Content</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Write your article here..."
                                    className="min-h-[150px]"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end gap-2 pt-2">
                    <Button type="submit" disabled={isPending}>
                        {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        {isPending ? "Publishing..." : "Publish Article"}
                    </Button>
                </div>
            </form>
        </Form>
    );
}