import { getPostBySlug } from "@/utils/markdown";
import "highlight.js/styles/github-dark.css";
import { Code } from "@/components/Code/Code";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostProps) {
  const waitedParams = await params;
  const post = getPostBySlug(waitedParams.slug);

  if (!post) return <div>Post not found</div>;

  return (
    <main>
      <h1>{post.title}</h1>
      <time className="text-gray-400 mb-8 block">{post.date}</time>
      <Code content={post.content} />
    </main>
  );
}
