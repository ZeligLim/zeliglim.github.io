const year3Modules = [
  'Machine Learning',
  'Applied Linux',
  'CI/CD',
  'SoC Design',
  'Embedded Systems',
  'Maths',
]

const year2Modules = [
  'Computer Engineering',
  'Internet Technologies',
  'Analog Devices',
  'Object Oriented Programming',
  'Internet of Things Project',
  'Electronic Design',
  'Automation',
]

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="section-wide">
        <p className="section-eyebrow">Profile</p>
        <h2 className="section-heading mt-3">About</h2>
        <p className="body-text mt-6 max-w-3xl">
          First class honours second-year Bachelor of Engineering (Hons) in Software and
          Electronics Engineering student at Atlantic Technological University (ATU) with
          strong foundations in programming, embedded systems, and circuit design. Gained
          basic finance knowledge in the ICMS finance department. Passionate about
          financial technology and real-world automation. Built communication,
          time-management, and teamwork skills working part-time at Maldron Hotel.
          Seeking a work placement from Jan to Aug 2027 to develop enterprise-level
          software design and contribute to hardware–software integration.
        </p>

        <div className="mt-16">
          <h3 className="section-subheading">Education</h3>
          <div className="card mt-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-base font-semibold tracking-tight text-neutral-900 sm:text-lg">
                B.Eng. (Hons) Software and Electronics Engineering
              </p>
              <p className="text-sm text-neutral-500">Sep 2024 – May 2028</p>
            </div>
            <p className="mt-2 text-sm text-neutral-600">
              Atlantic Technological University
            </p>
            <p className="mt-3 text-sm font-medium text-neutral-900">
              Current grade: 90.91%
            </p>

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="section-eyebrow">Year 3</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {year3Modules.map((mod) => (
                    <li key={mod} className="pill">
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="section-eyebrow">Year 2</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {year2Modules.map((mod) => (
                    <li key={mod} className="pill">
                      {mod}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
