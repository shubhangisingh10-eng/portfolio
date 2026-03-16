import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubhangi Singh — Product Designer",
  description:
    "Product designer with 5+ years of experience, currently at BCG X. Specializing in AI products, enterprise UX, and inclusive design.",
  openGraph: {
    title: "Shubhangi Singh — Product Designer",
    description: "Product designer at BCG X. Based in NYC.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
