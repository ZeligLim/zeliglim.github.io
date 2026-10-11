import type { Metadata } from "next";
import { ArrowUpRight, Github, Globe2 } from "lucide-react";
import { getProjects } from "@/lib/payload";
import { MagneticLink } from "../components/magnetic-link";
import { SpotlightCard } from "../components/spotlight-card";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Projects" };

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="page-width listing-page">
      <div className="page-heading">
        <p className="eyebrow">Projects / Software · Embedded · Hardware</p>
        <h1>Projects with<br /><span>a purpose.</span></h1>
        <p>A selection of software and hardware work shaped around useful outcomes, clear systems, and the details that make them dependable.</p>
      </div>
      <div className="project-list-grid">
        {projects.map((project, index) => (
          <SpotlightCard className="project-list-card" key={project.id}>
            <div className="project-list-top"><span>PROJECT 0{index + 1}</span>{project.featured && <span className="featured-mark">Featured</span>}</div>
            <h2>{project.title}</h2>
            <p className="project-tagline">{project.tagline}</p>
            <p className="project-long-description">{project.description}</p>
            <ul className="tag-list">{project.techStack.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            <div className="project-links">
              {project.githubUrl ? (
                <MagneticLink href={project.githubUrl} target="_blank" rel="noreferrer" className="project-action" data-cursor="CODE">
                  <Github size={16} aria-hidden="true" /> Source <ArrowUpRight size={14} aria-hidden="true" />
                </MagneticLink>
              ) : <span className="project-action-muted">Repository details on request</span>}
              {project.liveUrl && <MagneticLink href={project.liveUrl} target="_blank" rel="noreferrer" className="project-action" data-cursor="OPEN"><Globe2 size={16} aria-hidden="true" /> Live preview <ArrowUpRight size={14} aria-hidden="true" /></MagneticLink>}
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}