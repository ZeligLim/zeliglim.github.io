export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="section bg-white pb-12 pt-0">
      <div className="section-wide border-t border-neutral-200/60 pt-10">
        <p className="text-center text-sm text-neutral-500">
          &copy; {year} Zhi Lit Lim. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
