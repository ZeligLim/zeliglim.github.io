import { ArrowDown, ArrowRight, ArrowUpRight, Cpu, Gauge, Layers3, ScanEye } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import { ExperienceTimeline } from "./components/experience-timeline";
import { MagneticLink } from "./components/magnetic-link";
import { SpotlightCard } from "./components/spotlight-card";
import { getProjects } from "@/lib/payload";

const skillGroups = [
  { name: "Programming", items: ["C / C++", "Python", "Java", "JavaScript", "SQL", "Verilog"] },
  { name: "Software", items: ["React", "Next.js", "Spring Boot", "WebSocket", "CI / CD", "Linux"] },
  { name: "High performance", items: ["NVIDIA CUDA", "SYCL", "AVX-512", "Parallel computing"] },
  { name: "Embedded systems", items: ["ESP32", "Arduino", "ATmega328", "ARM Cortex-M4"] },
  { name: "Hardware", items: ["Altium Designer", "FPGA", "PCB design", "ARM Cortex-M4"] },
  { name: "Tools", items: ["GitLab", "IntelliJ", "Visual Studio", "VS Code", "Jira", "Vivado"] },
  { name: "Engineering practice", items: ["Algorithms", "Debugging", "OOP", "Machine learning", "Agile"] },
  { name: "Ways of working", items: ["Problem-solving", "Teamwork", "Leadership", "Project management"] },
];

const highlights = [
  { icon: Gauge, label: "High-performance computing", value: "CUDA · SYCL · AVX-512" },
  { icon: ScanEye, label: "X-ray inspection", value: "FFT · filtered back projection" },
  { icon: Layers3, label: "Software systems", value: "Five-service job platform" },
  { icon: Cpu, label: "Embedded", value: "Microcontrollers · PCB design" },
];

export default async function HomePage() {
  const projects = (await getProjects()).slice(0, 2);

  return (
    <>
      <section className="hero-section page-width">
        <div className="hero-copy">
          <div className="status-badge"><span className="availability-dot" /> Available for engineering projects</div>
          <p className="eyebrow hero-eyebrow">Software × embedded systems · Ireland</p>
          <h1>Engineering<br />software for the <span>real world.</span></h1>
          <p className="hero-intro">
            I&apos;m {site.name}, a third-year engineering student working across accelerated computing, embedded systems, and software automation.
          </p>
          <div className="hero-actions">
            <MagneticLink className="button-primary" href="/projects" data-cursor="VIEW">
              Explore my work <ArrowUpRight size={16} aria-hidden="true" />
            </MagneticLink>
            <Link className="text-link" href="/contact" data-cursor="SAY HI">
              Let&apos;s talk <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <a className="scroll-cue" href="#work" aria-label="Scroll to selected work">
            <ArrowDown size={14} aria-hidden="true" /> Scroll to explore
          </a>
        </div>
        <div className="hero-aside" aria-label="Engineering focus areas">
          <div className="hero-aside-caption"><span>01 — 04</span><span>Areas I work across</span></div>
          {highlights.map(({ icon: Icon, label, value }, index) => (
            <div className="focus-row" key={label}>
              <span className="focus-index">0{index + 1}</span>
              <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
              <span><strong>{label}</strong><small>{value}</small></span>
            </div>
          ))}
          <div className="hero-aside-foot"><span /> Curious by nature, careful by design.</div>
        </div>
      </section>

      <section className="intro-strip">
        <div className="page-width intro-strip-inner">
          <p><strong>B.Eng. (Hons)</strong> · Atlantic Technological University</p>
          <p>Current grade <strong>H1:1 · 85.41%</strong></p>
          <p>Placement <span>·</span> Jan–Aug 2027</p>
        </div>
      </section>

      <section className="education-section">
        <div className="page-width education-layout">
          <div className="education-heading">
            <p className="eyebrow">Education / 2024—28</p>
            <h2>Software &amp; Electronics Engineering</h2>
            <p>{site.degree}<br />{site.university} · Year 3</p>
          </div>
          <div className="education-detail">
            <span className="grade-mark">{site.grade}</span>
            <div className="module-row">
              <strong>Year 3</strong>
              <span>Machine learning · Applied Linux · CI/CD · SoC design · Embedded systems · Mathematics</span>
            </div>
            <div className="module-row">
              <strong>Year 2</strong>
              <span>Computer engineering · Internet technologies · Analog devices · OOP · IoT project · EDA</span>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section page-width" id="work">
        <div className="section-heading-row">
          <div><p className="eyebrow">Selected work</p><h2>Useful things,<br className="mobile-break" /> thoughtfully built.</h2></div>
          <Link className="text-link" href="/projects" data-cursor="VIEW ALL">All projects <ArrowRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <SpotlightCard className="project-card" key={project.id}>
              <div className={`project-visual project-visual-${index + 1}`} aria-hidden="true">
                <div className="visual-grid" />
                {index === 0 ? <div className="warehouse-visual"><span /><span /><span /><i /></div> : <div className="service-visual"><span /><span /><span /><i /><i /></div>}
                <span className="visual-caption">{index === 0 ? "CONNECTED SYSTEMS" : "MODULAR SOFTWARE"}</span>
              </div>
              <div className="project-card-body">
                <p className="project-kicker">0{index + 1} / {project.featured ? "FEATURED PROJECT" : "SELECTED PROJECT"}</p>
                <h3>{project.title}</h3>
                <p className="project-description">{project.tagline}</p>
                <ul className="tag-list">{project.techStack.slice(0, 4).map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <Link className="card-arrow" href="/projects" aria-label={`See ${project.title}`} data-cursor="VIEW">
                  <ArrowUpRight size={19} aria-hidden="true" />
                </Link>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </section>

      <section className="experience-section">
        <div className="page-width experience-layout">
          <div className="experience-intro">
            <p className="eyebrow">A little about the path</p>
            <h2>Engineering is<br />better <span>connected.</span></h2>
            <p>My experience spans high-performance image processing, electronics repair, and software community leadership. I like learning a new tool by putting it to work on a real engineering problem.</p>
            <Link className="text-link" href="/contact" data-cursor="CONNECT">More about me <ArrowRight size={15} aria-hidden="true" /></Link>
          </div>
          <ExperienceTimeline />
        </div>
      </section>

      <section className="content-section page-width skills-section">
        <div className="section-heading-row">
          <div><p className="eyebrow">Tools &amp; foundations</p><h2>A broad toolkit.<br />A practical mindset.</h2></div>
          <p className="section-aside-copy">From low-level electronics to systems people use every day.</p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-group" key={group.name}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.name}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
      </section>

      <section className="closing-band">
        <div className="page-width closing-band-inner">
          <div><p className="eyebrow">Have something in mind?</p><h2>Let&apos;s make it<br />work beautifully.</h2></div>
          <MagneticLink className="button-light" href="/contact" data-cursor="CONNECT">Start a conversation <ArrowUpRight size={16} aria-hidden="true" /></MagneticLink>
        </div>
      </section>
    </>
  );
}