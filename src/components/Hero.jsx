export default function Hero() {
  return (
    <section className="section flex min-h-[calc(100svh-4rem)] items-center justify-center">
      <div className="section-inner text-center">
        <p className="section-eyebrow">Hello, I&apos;m</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
          Zhi Lit Lim
        </h1>
        <p className="mt-5 text-xl font-medium tracking-tight text-neutral-800 sm:text-2xl">
          B.Eng (Hons) Software &amp; Electronics Engineering
        </p>
        <p className="mt-3 text-sm text-neutral-500 sm:text-base">
          Atlantic Technological University · First class honours · 90.91%
        </p>
        <p className="body-text mx-auto mt-8 max-w-lg">
          Passionate about financial technology and real-world automation. Seeking a
          work placement from Jan–Aug 2027.
        </p>
        <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4">
          <a href="#projects" className="btn-primary">
            Projects
          </a>
          <a href="#contact" className="btn-secondary">
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
