import type { Metadata } from "next";
import { ArrowLeft, Clock3 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost } from "@/lib/payload";
import { RichText } from "../../components/rich-text";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return post ? { title: post.title, description: post.excerpt } : { title: "Article not found" };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const wordCount = `${post.excerpt} ${JSON.stringify(post.content ?? "")}`.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(wordCount / 220));

  return (
    <article className="page-width reader-page">
      <Link className="back-link" href="/blog"><ArrowLeft size={15} aria-hidden="true" /> All writing</Link>
      <header className="reader-header">
        <span className="category-label">{post.category}</span>
        <h1>{post.title}</h1>
        <p className="reader-excerpt">{post.excerpt}</p>
        <div className="reader-meta">
          <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString("en-IE", { day: "numeric", month: "long", year: "numeric" })}</time>
          <span><Clock3 size={14} aria-hidden="true" /> {minutes} min read</span>
        </div>
      </header>
      <div className="reader-rule" />
      <RichText data={post.content} />
      {!post.content && <p className="empty-state reader-empty">This article is being prepared.</p>}
      <footer className="reader-footer"><span>Thanks for reading.</span><Link href="/contact">Continue the conversation <ArrowLeft size={14} aria-hidden="true" /></Link></footer>
    </article>
  );
}