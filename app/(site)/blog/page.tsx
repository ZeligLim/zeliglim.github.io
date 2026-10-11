import type { Metadata } from "next";
import { getPosts, type Post } from "@/lib/payload";
import { BlogIndex } from "../components/blog-index";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Writing" };

function textFromContent(value: unknown): string {
  if (Array.isArray(value)) return value.map(textFromContent).join(" ");
  if (!value || typeof value !== "object") return "";
  const record = value as Record<string, unknown>;
  return [typeof record.text === "string" ? record.text : "", textFromContent(record.children), textFromContent(record.root)]
    .filter(Boolean)
    .join(" ");
}

function readingTime(post: Post) {
  const words = `${post.title} ${post.excerpt} ${textFromContent(post.content)}`.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 220));
}

export default async function BlogPage() {
  const posts = (await getPosts()).map((post) => ({ ...post, readingTime: readingTime(post) }));

  return (
    <section className="page-width listing-page writing-page">
      <div className="page-heading">
        <p className="eyebrow">Field notes / ideas in progress</p>
        <h1>Thoughts from<br /><span>the workbench.</span></h1>
        <p>Writing on developer tools, performance, open source, and the meeting point between software and hardware.</p>
      </div>
      <BlogIndex posts={posts} />
    </section>
  );
}