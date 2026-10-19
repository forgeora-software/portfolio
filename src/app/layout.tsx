import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { USER_INFO } from "@/constants/information";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#121620",
};

export const metadata: Metadata = {
  title: `${USER_INFO.name} | Senior ${USER_INFO.role} Portfolio`,
  description: `${USER_INFO.name} is a passionate ${USER_INFO.role} specializing in elegant, high-impact digital experiences, design systems, and responsive web apps.`,
  keywords: [
    USER_INFO.role,
    "Product Designer",
    "Portfolio",
    "Web Design",
    USER_INFO.name,
    "Next.js Portfolio",
  ],
  authors: [{ name: USER_INFO.name }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
