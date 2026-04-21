import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";

export const metadata: Metadata = {
  title: "Nothing But Healthy | Fresh & Clean Living",
  description:
    "Chef-crafted vegetarian meals using farm-fresh ingredients. Delivering fresh, nutritional abundance across Ahmedabad. Subscribe for daily healthy meal plans.",
  keywords: [
    "healthy meals",
    "vegetarian food",
    "meal subscription",
    "Ahmedabad",
    "fresh salads",
    "Nothing But Healthy",
  ],
  openGraph: {
    title: "Nothing But Healthy | Fresh & Clean Living",
    description:
      "Chef-crafted vegetarian meals delivered fresh to your door in Ahmedabad.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface overflow-x-hidden">
        <Navbar />
        <main className="pt-24 pb-32 md:pb-0">{children}</main>
        <Footer />
        <BottomNav />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
