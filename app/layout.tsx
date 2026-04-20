import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "ScriptForge AI — Viral short-form video scripts",
  description:
    "Generate viral TikTok, Reels, and Shorts video scripts in seconds with AI-powered prompts and optimization.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
