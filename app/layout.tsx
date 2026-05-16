import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suraj Kumar Gupta — Software Engineer & AI Enthusiast",
  description:
    "Portfolio of Suraj Kumar Gupta — MCA student at MNNIT Allahabad, Full Stack Developer, Competitive Programmer, and AI Enthusiast. Building scalable, real-time applications.",
  keywords: [
    "Suraj Kumar Gupta",
    "Software Engineer",
    "Full Stack Developer",
    "React Developer",
    "MNNIT Allahabad",
    "Portfolio",
    "AI Enthusiast",
    "Competitive Programmer",
  ],
  authors: [{ name: "Suraj Kumar Gupta" }],
  creator: "Suraj Kumar Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Suraj Kumar Gupta — Software Engineer",
    description:
      "Full Stack Developer | AI Enthusiast | Competitive Programmer | MNNIT Allahabad",
    siteName: "Suraj Kumar Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Suraj Kumar Gupta — Software Engineer",
    description: "Full Stack Developer | AI Enthusiast | Competitive Programmer",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
