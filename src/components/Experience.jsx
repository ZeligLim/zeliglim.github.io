const work = [
  {
    role: 'Software R&D Intern',
    org: 'ViTrox',
    period: 'Jun 2026 – Aug 2026',
    points: [
      'Developed and tested AI-powered software for computer vision in semiconductor inspection',
      'Collaborated with the R&D team to enhance system reliability and document technical processes',
    ],
  },
  {
    role: 'Food & Beverage Assistant',
    org: 'Maldron Hotel Oranmore',
    period: 'Sep 2025 – May 2026',
    points: [
      'Demonstrated teamwork, time management, and customer service in a fast-paced environment',
    ],
  },
  {
    role: 'Technical Trainee',
    org: 'Phifer Electronics Engineering',
    period: 'Jun 2025 – Aug 2025',
    points: [
      'Conducted PCB testing and soldering repairs with accurate fault identification',
      'Performed on-site fault diagnosis in a manufacturing environment',
    ],
  },
]

const leadership = [
  {
    role: 'Junior Associate, Finance Division',
    org: 'ICMS UK Division',
    period: 'Sep 2025 – Present',
    points: [
      'Planned and presented a fundraising proposal for the Council',
      'Worked collaboratively on budgeting and event strategy planning',
    ],
  },
  {
    role: 'Founder & Chairperson',
    org: 'ATU Software Development Society',
    period: 'Sep 2025 – Present',
    points: [
      'Established a 50-member student tech community',
      'Organised coding workshops, workplace visits, and led collaborative projects',
    ],
  },
  {
    role: 'International Student Ambassador',
    org: 'Atlantic Technological University',
    period: 'Sep 2024 – Sep 2025',
    points: [
      'Coordinated campus events including Global Week and Chinese New Year celebrations',
    ],
  },
]

function Timeline({ items }) {
  return (
    <ul className="mt-8 space-y-5">
      {items.map((item) => (
        <li key={`${item.role}-${item.org}`} className="card">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h4 className="text-base font-semibold tracking-tight text-neutral-900">
                {item.role}
              </h4>
              <p className="mt-1 text-sm text-neutral-600">{item.org}</p>
            </div>
            <p className="shrink-0 text-sm text-neutral-500">{item.period}</p>
          </div>
          <ul className="mt-5 space-y-2 border-t border-neutral-100 pt-5">
            {item.points.map((point) => (
              <li key={point} className="body-text text-sm sm:text-base">
                {point}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="section bg-white">
      <div className="section-wide">
        <p className="section-eyebrow">Career</p>
        <h2 className="section-heading mt-3">Experience</h2>

        <h3 className="section-subheading mt-14">Work</h3>
        <Timeline items={work} />

        <h3 className="section-subheading mt-16">Leadership &amp; Activities</h3>
        <Timeline items={leadership} />
      </div>
    </section>
  )
}
