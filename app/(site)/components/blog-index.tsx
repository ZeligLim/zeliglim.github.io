"use client";

import { ArrowUpRight, Clock3 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import type { Post } from "@/lib/payload";
import { SpotlightCard } from "./spotlight-card";

const categories = [
  "All writing",
  "AI & Developer Tools",
  "Open Source",
  "Performance Engineering",
  "Hardware & Design",
];

export function BlogIndex({ posts }: { posts: (Post & { readingTime: number })[] }) {
  const [category, setCategory] = useState("All writing");
  const visiblePosts = category === "All writing" ? posts : posts.filter((post) => post.category === category);

  return (
    <>
      <div className="filter-bar" aria-label="Filter articles by category">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={item === category ? "filter-chip filter-chip-active" : "filter-chip"}
            aria-pressed={item === category}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))}
      </div>

      {visiblePosts.length ? (
        <div className="article-grid">
          {visiblePosts.map((post, index) => (
            <SpotlightCard className="article-card" key={post.id}>
              <div className="article-card-top">
                <span className="category-label">{post.category}</span>
                <span className="article-number">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h2><Link href={`/blog/${post.slug}`} data-cursor="READ">{post.title}</Link></h2>
              <p>{post.excerpt}</p>
              <div className="article-card-bottom">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-IE", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </time>
                <span><Clock3 size={14} aria-hidden="true" /> {post.readingTime} min read</span>
                <Link href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`} data-cursor="READ">
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>
      ) : (
        <p className="empty-state">No articles in this category yet.</p>
      )}
    </>
  );
}