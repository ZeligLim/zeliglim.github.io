import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>Made with care in Ireland.</p>
        <Link href={`mailto:${site.email}`} data-cursor="SAY HI">
          Say hello <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </footer>
  );
}