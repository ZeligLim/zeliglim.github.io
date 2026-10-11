import { Fragment, type ReactNode } from "react";

type LexicalNode = {
  type?: string;
  text?: string;
  format?: number | string;
  tag?: string;
  url?: string;
  fields?: { url?: string };
  root?: LexicalNode;
  children?: LexicalNode[];
};

function asNode(value: unknown): LexicalNode | null {
  return value && typeof value === "object" ? value as LexicalNode : null;
}

function childrenOf(node: LexicalNode): ReactNode[] {
  return (node.children ?? []).map((child, index) => renderNode(child, index));
}

function renderNode(node: LexicalNode, index: number): ReactNode {
  const content = childrenOf(node);
  const key = `${node.type ?? "node"}-${index}`;
  if (node.type === "text") {
    let text: ReactNode = node.text ?? "";
    const format = typeof node.format === "number" ? node.format : 0;
    if (format & 1) text = <strong>{text}</strong>;
    if (format & 2) text = <em>{text}</em>;
    if (format & 4) text = <s>{text}</s>;
    if (format & 8) text = <u>{text}</u>;
    if (format & 16) text = <code>{text}</code>;
    return <Fragment key={key}>{text}</Fragment>;
  }
  if (node.type === "linebreak") return <br key={key} />;
  if (node.type === "heading") {
    const tag = node.tag === "h3" || node.tag === "h4" ? node.tag : "h2";
    return tag === "h3" ? <h3 key={key}>{content}</h3> : tag === "h4" ? <h4 key={key}>{content}</h4> : <h2 key={key}>{content}</h2>;
  }
  if (node.type === "quote") return <blockquote key={key}>{content}</blockquote>;
  if (node.type === "list") return node.tag === "ol" ? <ol key={key}>{content}</ol> : <ul key={key}>{content}</ul>;
  if (node.type === "listitem") return <li key={key}>{content}</li>;
  if (node.type === "code") return <pre key={key}><code>{content}</code></pre>;
  if (node.type === "link" || node.type === "autolink") {
    const href = node.fields?.url ?? node.url ?? "#";
    return <a key={key} href={href}>{content}</a>;
  }
  if (node.type === "paragraph") return <p key={key}>{content}</p>;
  return <Fragment key={key}>{content}</Fragment>;
}

export function RichText({ data }: { data: unknown }) {
  const root = asNode(data)?.root;
  const children = root?.children;
  if (!children?.length) return null;
  return <div className="prose-content">{children.map((node, index) => renderNode(node, index))}</div>;
}