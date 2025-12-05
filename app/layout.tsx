import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/components/providers/session-provider';

export const metadata: Metadata = {
  title: 'AI Marketing Platform - แพลตฟอร์มการตลาดด้วย AI สำหรับธุรกิจไทย',
  description:
    'สร้างภาพโฆษณา วิดีโอ TikTok รายงานวิเคราะห์ และสไลด์นำเสนอด้วย AI ครบจบในที่เดียว สำหรับธุรกิจไทย',
  keywords: [
    'AI marketing',
    'การตลาดด้วย AI',
    'สร้างภาพโฆษณา',
    'สร้างวิดีโอ TikTok',
    'Nano Banana Pro',
    'Veo 3.1',
    'AI ที่ปรึกษาการตลาด',
    'ธุรกิจไทย',
  ],
  authors: [{ name: 'AI Marketing Platform' }],
  openGraph: {
    title: 'AI Marketing Platform',
    description: 'แพลตฟอร์มการตลาดด้วย AI สำหรับธุรกิจไทย',
    type: 'website',
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-prompt antialiased bg-black text-white min-h-screen">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
