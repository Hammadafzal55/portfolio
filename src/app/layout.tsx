import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Hammad Afzal | Next.js Developer Portfolio",
  description:
    "Production-grade portfolio for Hammad Afzal, a Next.js, React, TypeScript, Tailwind CSS, Sanity, Clerk, and Stripe developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}
        <Footer />
      </body>
    </html>
  );
}
