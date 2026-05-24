import { useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 bg-white/80 backdrop-blur-xl backdrop-saturate-150">
      <nav className="section-wide flex items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#"
          className="text-sm font-semibold tracking-tight text-neutral-900 transition-opacity duration-200 hover:opacity-70"
          onClick={closeMenu}
        >
          Zhi Lit Lim
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="nav-link">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-neutral-600 transition-colors duration-200 hover:bg-neutral-100 md:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">{open ? 'Close' : 'Menu'}</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-neutral-200/60 bg-white/95 transition-all duration-300 ease-apple md:hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="block rounded-xl px-3 py-3 text-sm font-medium text-neutral-700 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-900"
                onClick={closeMenu}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
