import { getPayload } from "payload";
import config from "@payload-config";

export type Project = {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export type Post = {
  id: string;
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content?: unknown;
  publishedAt: string;
};

const fallbackProjects: Project[] = [
  {
    id: "smart-warehouse",
    title: "Smart Warehouse Inventory System",
    slug: "smart-warehouse-inventory",
    tagline: "Affordable automation for small and medium-sized warehouses.",
    description:
      "An inventory platform bringing together NFC stock tracking, a camera-guided robot cart, and a live operations dashboard.",
    techStack: ["ESP32", "C", "OpenCV", "ArUco", "WebSocket", "NFC"],
    featured: true,
  },
  {
    id: "job-board",
    title: "Job Board",
    slug: "job-board",
    tagline: "A modular job-seeking platform built as a five-service system.",
    description:
      "A full-stack team project using focused Spring Boot services and a React interface to make the job-seeking workflow easier to navigate.",
    techStack: ["Spring Boot", "React", "Microservices", "Jira", "Agile"],
    featured: true,
  },
  {
    id: "ai-hawker-ordering",
    title: "AI Hawker Ordering System",
    slug: "ai-hawker-ordering-system",
    tagline: "A SaaS MVP built from idea to deployment in 15 hours.",
    description:
      "An AI-assisted build sprint using coding agents in VS Code and Antigravity, with infrastructure provisioned across Supabase, Google Cloud, and Vercel CLI.",
    techStack: ["SaaS", "Supabase", "Google Cloud", "Vercel", "AI-assisted development"],
    featured: true,
  },
  {
    id: "atmega328",
    title: "ATmega328 Microchip Programming",
    slug: "atmega328-microchip-programming",
    tagline: "Small firmware projects built around predictable hardware behavior.",
    description:
      "A series of microcontroller exercises covering GPIO, pin interrupts, timers, and UART configuration, with applications structured around state machines.",
    techStack: ["C", "ATmega328", "GPIO", "Interrupts", "Timers", "UART"],
    featured: false,
  },
  {
    id: "weather-station-shield",
    title: "Weather Station Shield",
    slug: "weather-station-shield",
    tagline: "An electronics design project from circuit schematic to PCB layout.",
    description:
      "Designed the circuit schematics and board layout in Altium Designer, carrying the work through the end-to-end electronics design process.",
    techStack: ["Altium Designer", "Circuit design", "PCB layout", "Electronics"],
    featured: false,
  },
];

const fallbackPosts: Post[] = [];

let payloadPromise: ReturnType<typeof getPayload> | undefined;

function getLocalPayload() {
  payloadPromise ??= getPayload({ config });
  return payloadPromise;
}

export async function getProjects() {
  if (!process.env.DATABASE_URL) return fallbackProjects;

  try {
    const payload = await getLocalPayload();
    const result = await payload.find({ collection: "projects", limit: 100, sort: "-updatedAt" });
    return result.docs.length ? result.docs as unknown as Project[] : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}

export async function getPosts() {
  if (!process.env.DATABASE_URL) return fallbackPosts;

  try {
    const payload = await getLocalPayload();
    const result = await payload.find({
      collection: "posts",
      where: { _status: { equals: "published" } },
      limit: 100,
      sort: "-publishedAt",
    });
    return result.docs as unknown as Post[];
  } catch {
    return fallbackPosts;
  }
}

export async function getPost(slug: string) {
  if (!process.env.DATABASE_URL) return fallbackPosts.find((post) => post.slug === slug);

  try {
    const payload = await getLocalPayload();
    const result = await payload.find({
      collection: "posts",
      where: { and: [{ slug: { equals: slug } }, { _status: { equals: "published" } }] },
      limit: 1,
    });
    return (result.docs[0] as unknown as Post | undefined) ?? fallbackPosts.find((post) => post.slug === slug);
  } catch {
    return fallbackPosts.find((post) => post.slug === slug);
  }
}