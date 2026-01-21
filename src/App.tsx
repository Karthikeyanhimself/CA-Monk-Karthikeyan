import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Layout } from "@/components/common/Layout";
import { BlogCard } from "@/components/features/blog/BlogCard";
import { BlogDetail } from "@/components/features/blog/BlogDetail";
import { BlogListSkeleton } from "@/components/features/blog/BlogSkeletons";
import { InfiniteBlogList } from "@/components/features/blog/InfiniteBlogList"; 
import { useBlogs, useBlog } from "@/hooks/useBlogs";

function Dashboard() {
  const { id } = useParams();

  const { data: blogs, isLoading: isListLoading, isError, error } = useBlogs();
  const { data: selectedBlog, isLoading: isDetailLoading } = useBlog(id || "");

  return (
    <Layout
      
      sidebarContent={
        <>
          {isListLoading && <BlogListSkeleton />}

          {blogs?.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              isActive={blog.id === id}
            />
          ))}
        </>
      }

      
      mainContent={
        
        id ? (
          <BlogDetail
            blog={selectedBlog}
            isLoading={isDetailLoading}
          />
        ) : (
          <InfiniteBlogList blogs={blogs} />
        )
      }
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blogs/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;