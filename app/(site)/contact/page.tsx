import type { Metadata } from "next";
import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { ContactForm } from "../components/contact-form";
import { MagneticLink } from "../components/magnetic-link";

export const metadata: Metadata = { title: "Contact" };

const socials = [
  { label: "GitHub", href: site.social.github, icon: Github },
  { label: "LinkedIn", href: site.social.linkedin, icon: Linkedin },
  { label: "WhatsApp", href: site.social.whatsapp, icon: MessageCircle },
];

export default function ContactPage() {
  return (
    <section className="page-width contact-page">
      <div className="contact-intro">
        <p className="eyebrow">Open to good problems</p>
        <h1>Let&apos;s build<br /><span>something useful.</span></h1>
        <p>I&apos;m open to engineering placement opportunities from January to August 2027, thoughtful collaborations, and conversations about software, systems, or electronics.</p>
        <a className="email-direct" href={`mailto:${site.email}`}><Mail size={17} aria-hidden="true" /> {site.email}</a>
        <a className="email-direct" href={`tel:${site.phone.replaceAll(" ", "")}`}><Phone size={17} aria-hidden="true" /> {site.phone}</a>
        <div className="social-links" aria-label="Social links">
          {socials.map(({ label, href, icon: Icon }) => (
            <MagneticLink key={label} href={href} target="_blank" rel="noreferrer" className="social-link" aria-label={label} data-cursor="OPEN">
              <Icon size={18} aria-hidden="true" />
            </MagneticLink>
          ))}
        </div>
      </div>
      <div className="contact-form-wrap">
        <div className="contact-form-heading"><span>01</span><h2>Send a note</h2><p>Share a little context and I&apos;ll get back to you.</p></div>
        <ContactForm />
      </div>
    </section>
  );
}