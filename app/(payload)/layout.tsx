import { handleServerFunctions, RootLayout } from "@payloadcms/next/layouts";
import config from "@payload-config";
import "@payloadcms/next/css";
import { importMap } from "./admin/importMap";

export default function PayloadLayout({ children }: { children: React.ReactNode }) {
  return RootLayout({
    children,
    config,
    importMap,
    serverFunction: async (args) => {
      "use server";
      return handleServerFunctions({ ...args, config, importMap });
    },
  });
}