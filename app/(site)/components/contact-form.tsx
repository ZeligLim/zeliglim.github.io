"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.get("name")}`);
    const body = encodeURIComponent(
      `From: ${form.get("name")} (${form.get("email")})\n\n${form.get("message")}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-row">
        <label>
          <span>Your name</span>
          <input name="name" autoComplete="name" placeholder="Alex Morgan" required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" placeholder="alex@example.com" required />
        </label>
      </div>
      <label>
        <span>What would you like to talk about?</span>
        <textarea name="message" rows={5} placeholder="A few details about your project..." required />
      </label>
      <div className="form-submit-row">
        <p role="status">{sent ? "Your email app is ready to send this note." : "Usually replies within two working days."}</p>
        <button className="button-primary" type="submit" data-cursor="SEND">
          Send a note <ArrowUpRight size={16} aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}