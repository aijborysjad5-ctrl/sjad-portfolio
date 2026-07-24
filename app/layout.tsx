import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SJAD Studio | Creative Design & Digital Solutions",
  description:
    "Modern branding, web design and digital experiences by SJAD Studio.",
  keywords: [
    "SJAD Studio",
    "Branding",
    "Web Design",
    "Creative Studio",
    "Digital Solutions",
  ],
  authors: [{ name: "SJAD Studio" }],

  openGraph: {
    title: "SJAD Studio | Creative Design & Digital Solutions",
    description:
      "Modern branding, web design and digital experiences by SJAD Studio.",
    url: "https://sjad-portfolio.vercel.app",
    siteName: "SJAD Studio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SJAD Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
