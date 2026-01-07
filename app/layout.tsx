import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./style.css";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

const cairo = Cairo({
  weight: ["400", "700"],
  variable: "--font-geist-sans",
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  title: "عقارك في تركيا",
  description: "بوابتك العقارية الشاملة للبحث عن العقارات في تركيا",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
