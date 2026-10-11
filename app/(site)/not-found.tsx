import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <p className="eyebrow">404 / Page not found</p>
      <h1>This page took a wrong turn.</h1>
      <p>The link may be out of date, or the page may have moved.</p>
      <Link className="button-primary" href="/">Back to the homepage</Link>
    </section>
  );
}