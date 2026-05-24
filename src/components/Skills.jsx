const skillGroups = [
  {
    label: 'Programming Languages',
    items: ['Java', 'Python', 'C/C++', 'JavaScript', 'React'],
  },
  {
    label: 'Embedded Systems',
    items: ['Arduino', 'ESP32', 'ATmega328', 'Altium'],
  },
  {
    label: 'Tools',
    items: ['GitHub', 'WebSocket', 'IntelliJ', 'GNS', 'Spring Boot', 'Antigravity', 'Claude'],
  },
  {
    label: 'Soft Skills',
    items: ['Problem-Solving', 'Teamwork', 'Leadership', 'Project Management'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section bg-white">
      <div className="section-wide">
        <p className="section-eyebrow">Expertise</p>
        <h2 className="section-heading mt-3">Skills</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="transition-transform duration-300 ease-apple hover:-translate-y-0.5"
            >
              <h3 className="text-sm font-semibold tracking-tight text-neutral-900">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill} className="pill-outline">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
