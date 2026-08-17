import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SANDEEP ENTERPRISES | Fabrication & Erection",
  description:
    "SANDEEP ENTERPRISES provides fabrication, structural steel and erection services in Sanaswadi, Pune, with 25+ years of experience.",
  keywords: [
    "Sandeep Enterprises",
    "fabrication work Pune",
    "steel fabrication Pune",
    "erection work Pune",
    "structural steel Pune",
    "industrial shed fabrication",
    "Sanaswadi fabrication",
    "Shirur fabrication",
  ],
  authors: [
    {
      name: "SANDEEP ENTERPRISES",
    },
  ],
  openGraph: {
    title: "SANDEEP ENTERPRISES | Fabrication & Erection",
    description:
      "Fabrication and erection services with 25+ years of experience in Sanaswadi, Pune.",
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
      <body>{children}</body>
    </html>
  );
}