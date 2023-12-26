import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio",
  icons: [
    {
      media: "(prefers-color-scheme: light)",
      url: "/small-logo.svg",
      href: "/small-logo.svg",
    },
    {
      media: "(prefers-color-scheme: dark)",
      url: "/small-logo-dark.svg",
      href: "/small-logo-dark.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="portfolio-theme-2"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
