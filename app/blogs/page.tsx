// app/blogs/page.tsx
import BlogPostCard from "@/app/blogs/BlogPostCard";
import { StaticImageData } from "next/image";
import placeholderImage from "@/public/images/claude-3.5-sonnet.png";
import slugify from "slugify";
import { motion } from "framer-motion";

// In a real application, you'd fetch this data from an API or database
const blogPosts = [
  {
    title: "Implementing Claude 3.5 into PearAI's Ecosystem",
    slug: slugify("Implementing Claude 3.5 into PearAI's Ecosystem", {
      lower: true,
    }),
    excerpt:
      "Diving into how Claude 3.5 implementation differs from other LLM's.",
    date: "2024-08-20",
    author: "Conor Quinlan",
    image: placeholderImage as StaticImageData,
  },
  // Add more blog posts here
];

const BlogPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-8 text-center text-3xl font-bold">dev blogs</h1>
        <div className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;