import type { Metadata } from "next";
import { CustomCursor } from "./components/custom-cursor";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import "../globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: {
    default: "Zhi Lit Lim — Software & Embedded Systems Engineering Student",
    template: "%s — Zhi Lit Lim",
  },
  description:
    "Software and electronics engineering: computer vision, embedded automation, reliable backend systems, and thoughtful full-stack products.",
};

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <div className="site-shell">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CustomCursor />
        </div>
      </body>
    </html>
  );
}