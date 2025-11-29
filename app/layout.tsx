import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/FloatingChatButton"; // Added import

export const metadata: Metadata = {
  title: "Longtrade Academy - Premium Trading Indicators & Bots",
  description: "อินดิเคเตอร์และระบบช่วยเทรดระดับมืออาชีพ รองรับ MT4/MT5 และ TradingView | Premium trading indicators and automated trading bots for professional traders",
  keywords: [
    "trading indicators",
    "forex indicators",
    "MT4 indicators",
    "MT5 indicators",
    "TradingView indicators",
    "trading bots",
    "automated trading",
    "อินดิเคเตอร์เทรด",
    "ระบบเทรด",
    "bot เทรด",
  ],
  authors: [{ name: "Longtrade Academy" }],
  openGraph: {
    title: "Longtrade Academy - Premium Trading Indicators & Bots",
    description: "อินดิเคเตอร์และระบบช่วยเทรดระดับมืออาชีพ รองรับ MT4/MT5 และ TradingView",
    url: "https://longtrade.academy",
    siteName: "Longtrade Academy",
    images: [
      {
        url: "/og-longtrade.svg",
        width: 1200,
        height: 630,
        alt: "Longtrade Academy - Premium Trading Indicators",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Longtrade Academy - Premium Trading Indicators & Bots",
    description: "อินดิเคเตอร์และระบบช่วยเทรดระดับมืออาชีพ",
    images: ["/og-longtrade.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-prompt antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingChatButton /> {/* Added component */}
      </body>
    </html>
  );
}
