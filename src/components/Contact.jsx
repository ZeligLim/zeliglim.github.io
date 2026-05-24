const links = [
  {
    label: 'Email',
    value: 'zeliglim8@gmail.com',
    href: 'mailto:zeliglim8@gmail.com',
  },
  {
    label: 'WhatsApp',
    value: '+353 89 410 4660',
    href: 'https://wa.me/353894104660',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/zhilitlim',
    href: 'https://linkedin.com/in/zhilitlim',
  },
  {
    label: 'Portfolio',
    value: 'zeliglim.github.io',
    href: 'https://zeliglim.github.io',
  },
  {
    label: 'GitHub',
    value: 'limzhilit',
    href: 'https://github.com/limzhilit',
  },
  {
    label: 'GitHub',
    value: 'ZeligLim',
    href: 'https://github.com/ZeligLim',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="section-wide">
        <p className="section-eyebrow">Get in touch</p>
        <h2 className="section-heading mt-3">Contact</h2>
        <p className="body-text mt-6 max-w-xl">
          Open to work placement opportunities (Jan–Aug 2027), collaborations, and
          enquiries. References available upon request.
        </p>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={`${link.href}-${link.value}`}>
              <a
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                className="contact-card group"
              >
                <p className="section-eyebrow">{link.label}</p>
                <p className="mt-2 text-sm font-medium text-neutral-900 transition-colors duration-200 group-hover:text-neutral-600 sm:text-base">
                  {link.value}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
