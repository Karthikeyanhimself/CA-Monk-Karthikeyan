export interface Blog {
    id: string;
    title: string;
    category: string[];
    description: string;
    date: string;
    coverImage: string;
    content: string;
    author?: string;
    readTime?: string;
}