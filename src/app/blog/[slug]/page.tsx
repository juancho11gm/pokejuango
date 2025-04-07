import { getPostBySlug } from "@/utils/markdown";
import "highlight.js/styles/github-dark.css";
import { Code } from "@/components/Code/Code";
import { Metadata } from "next";

interface BlogPostProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostProps): Promise<Metadata> {
  const slug = (await params).slug;
  const post = getPostBySlug(slug);

  return {
    title: `Juan González | ${post?.title} 👾`,
    description: "Senior Web Engineer at Kinesso",
    metadataBase: new URL("https://juangodev.netlify.app/"),
  };
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
