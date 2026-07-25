import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import ClientLayout from "./components/ClientLayout";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.careplusraipur.com"),
  title: {
    default: "Care Plus Healthcentre | Premium Orthopedic & Pathology Care in Raipur",
    template: "%s | Care Plus Healthcentre",
  },
  description: "Advanced Care. Modern Medicine. Raipur's leading healthcentre for Orthopedic excellence and high-precision pathology diagnostics. Book your appointment today.",
  keywords: ["Orthopedic", "Pathology", "Healthcare", "Raipur", "Care Plus Healthcentre", "Clinic", "Hospital", "Dr. Varun", "Pathologist in Raipur", "Orthopedic Doctor in Raipur"],
  authors: [{ name: "Care Plus Healthcentre" }],
  creator: "Care Plus Healthcentre",
  publisher: "Care Plus Healthcentre",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.careplusraipur.com/",
    title: "Care Plus Healthcentre | Premium Orthopedic & Pathology Care in Raipur",
    description: "Advanced Care. Modern Medicine. Raipur's leading healthcentre for Orthopedic excellence and high-precision pathology diagnostics.",
    siteName: "Care Plus Healthcentre",
  },
  twitter: {
    card: "summary_large_image",
    title: "Care Plus Healthcentre | Premium Orthopedic & Pathology Care in Raipur",
    description: "Advanced Care. Modern Medicine. Raipur's leading healthcentre for Orthopedic excellence and high-precision pathology diagnostics.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
