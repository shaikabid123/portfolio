import type { Metadata } from "next";
import { Fira_Code, Antic } from "next/font/google";
import { site } from "@/lib/site-config";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-fira-code",
  display: "swap",
});

const antic = Antic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-antic",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name.full} — ${site.role}`,
  description: site.tagline,
};

// Applies the saved theme before first paint so the page never flashes.
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "light") document.documentElement.classList.remove("dark");
    else document.documentElement.classList.add("dark");
  } catch (e) {
    document.documentElement.classList.add("dark");
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${firaCode.variable} ${antic.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
