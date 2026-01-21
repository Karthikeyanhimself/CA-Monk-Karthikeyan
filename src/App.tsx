import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import { Layout } from "@/components/common/Layout";
import { BlogCard } from "@/components/features/blog/BlogCard";
import { BlogDetail } from "@/components/features/blog/BlogDetail";
import { BlogListSkeleton } from "@/components/features/blog/BlogSkeletons";
import { useBlogs, useBlog } from "@/hooks/useBlogs";

// 1. The Main Dashboard Component
function Dashboard() {
  const { id } = useParams();
  const { data: blogs, isLoading: isListLoading } = useBlogs();
  const { data: selectedBlog, isLoading: isDetailLoading } = useBlog(id || "");

  return (
    <Layout
      // LEFT PANEL
      sidebarContent={
        isListLoading ? (
          <BlogListSkeleton />
        ) : (
          blogs?.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              isActive={blog.id === id}
            />
          ))
        )
      }

      // RIGHT PANEL
      mainContent={
        <BlogDetail
          blog={selectedBlog}
          isLoading={isDetailLoading}
        />
      }
    />
  );
}

// 2. The Router Wrapper
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