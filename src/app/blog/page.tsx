import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Juan González | Blog 👾",
  description: "Senior Web Engineer at Kinesso",
  metadataBase: new URL("https://juangodev.netlify.app/"),
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main>
      <h1 className="text-4xl font-bold mb-8 text-white">Projects</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-gray-700 pb-8">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-[#ae46de]">
                {post.title}
              </h2>
            </Link>
            <time className="text-gray-400 block mt-2">{post.date}</time>
            {post.excerpt && (
              <p className="mt-4 text-gray-300">{post.excerpt}</p>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
