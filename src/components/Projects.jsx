const projects = [
  {
    title: 'Job Board',
    meta: 'Feb 2026 – May 2026 · Year 2 Group Project',
    stack: ['Spring Boot', 'React', 'Microservices', 'Jira', 'Agile'],
    points: [
      'Developed a job board platform using Spring Boot and React',
      '5 modular microservices architecture for separation of concerns',
      'Implemented Agile workflow with 2-week sprint cycles using Jira',
      'Collaborated in a 2-developer team to deliver end-to-end features',
      'Proposed and implemented business logic to optimise the job-seeking workflow',
    ],
  },
  {
    title: 'Smart Warehouse Inventory System',
    meta: 'Sep 2025 – May 2026 · Year 2 Individual Project',
    stack: ['ESP32', 'C', 'OpenCV', 'ArUco', 'WebSocket', 'NFC'],
    points: [
      'Designed system integrating NFC stock tracker and autonomous robot cart',
      'Researched OpenCV machine vision and ArUco markers for position pinpointing',
      'ESP32 microcontroller in C with WebSocket dashboard for real-time monitoring',
      'Aims to provide affordable automation for SMEs to increase operational efficiency',
      'Supports UN SDG 8 & 9 — industrial innovation, automation, and safer skilled jobs',
    ],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section bg-white">
      <div className="section-wide">
        <p className="section-eyebrow">Selected work</p>
        <h2 className="section-heading mt-3">Projects</h2>
        <ul className="mt-10 space-y-6">
          {projects.map((project) => (
            <li key={project.title} className="card">
              <h3 className="text-lg font-semibold tracking-tight text-neutral-900 sm:text-xl">
                {project.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-500">{project.meta}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="pill">
                    {tech}
                  </li>
                ))}
              </ul>
              <ul className="mt-6 space-y-2 border-t border-neutral-100 pt-6">
                {project.points.map((point) => (
                  <li key={point} className="body-text text-sm sm:text-base">
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
