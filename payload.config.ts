import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";

const categories = [
  "AI & Developer Tools",
  "Open Source",
  "Performance Engineering",
  "Hardware & Design",
];

const payloadSecret = process.env.PAYLOAD_SECRET ||
  (process.env.NODE_ENV === "production" && process.env.NEXT_PHASE !== "phase-production-build"
    ? undefined
    : "local-development-secret-change-me");

if (!payloadSecret) {
  throw new Error("Set PAYLOAD_SECRET before starting Payload in production.");
}

export default buildConfig({
  admin: {
    user: "users",
    importMap: { baseDir: process.cwd() },
  },
  collections: [
    {
      slug: "users",
      auth: true,
      admin: { useAsTitle: "email" },
      fields: [],
    },
    {
      slug: "posts",
      admin: { useAsTitle: "title", defaultColumns: ["title", "category", "publishedAt"] },
      access: {
        read: ({ req }) => req.user ? true : { _status: { equals: "published" } },
      },
      versions: { drafts: true },
      fields: [
        { name: "title", type: "text", required: true },
        { name: "slug", type: "text", required: true, unique: true, index: true },
        { name: "category", type: "select", required: true, options: categories },
        { name: "excerpt", type: "textarea", required: true },
        { name: "content", type: "richText", required: true, editor: lexicalEditor() },
        { name: "publishedAt", type: "date", required: true, defaultValue: () => new Date() },
      ],
    },
    {
      slug: "projects",
      admin: { useAsTitle: "title", defaultColumns: ["title", "featured", "updatedAt"] },
      fields: [
        { name: "title", type: "text", required: true },
        { name: "slug", type: "text", required: true, unique: true, index: true },
        { name: "tagline", type: "text", required: true },
        { name: "description", type: "textarea", required: true },
        { name: "techStack", type: "text", hasMany: true, required: true },
        { name: "githubUrl", type: "text" },
        { name: "liveUrl", type: "text" },
        { name: "featured", type: "checkbox", defaultValue: false },
      ],
    },
  ],
  editor: lexicalEditor(),
  secret: payloadSecret,
  typescript: { outputFile: `${process.cwd()}/payload-types.ts` },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "postgres://localhost:5432/payload",
    },
  }),
});