import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import CartButton from "@/components/cart/CartButton";
import CartDrawer from "@/components/cart/CartDrawer";
import { CartProvider } from "@/contexts/CartContext";
import { SITE_URL, COMPANY_INFO, WHATSAPP_DISPLAY, INSTAGRAM_URL } from "@/utils/constants";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nothing But Healthy | Daily Fruit Subscription in Ahmedabad",
    template: "%s | Nothing But Healthy Ahmedabad",
  },
  description:
    "Ahmedabad's first daily fruit subscription. Chef-cut, farm-fresh seasonal fruit bowls delivered to your door before 9 AM. Beat breakfast skipping, hit your daily fruit goal. Plans from ₹125/day.",
  keywords: [
    "daily fruit subscription Ahmedabad",
    "fruit box delivery Ahmedabad",
    "fresh fruit bowl Ahmedabad",
    "breakfast fruit delivery Ahmedabad",
    "morning fruit delivery Ahmedabad",
    "cut fruit delivery Ahmedabad",
    "healthy breakfast Ahmedabad",
    "seasonal fruit delivery Ahmedabad",
    "fruit subscription Gujarat",
    "healthy meal delivery Ahmedabad",
    "vegetarian tiffin Ahmedabad",
    "meal subscription Ahmedabad",
    "corporate tiffin Ahmedabad",
    "Nothing But Healthy",
  ],
  authors: [{ name: COMPANY_INFO.name, url: SITE_URL }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  openGraph: {
    title: "Nothing But Healthy | Daily Fruit Subscription in Ahmedabad",
    description:
      "Chef-cut seasonal fruit bowls delivered to your Ahmedabad door before 9 AM. No washing, no chopping. Plans from ₹125/day.",
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: COMPANY_INFO.name,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Nothing But Healthy – Daily Fruit Subscription in Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nothing But Healthy | Daily Fruit Subscription in Ahmedabad",
    description:
      "Chef-cut seasonal fruit bowls delivered to your Ahmedabad door before 9 AM. Plans from ₹125/day.",
    images: ["/og-image.png"],
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
  alternates: {
    canonical: SITE_URL,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["FoodEstablishment", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: COMPANY_INFO.name,
      description:
        "Ahmedabad's first daily fruit subscription service. Chef-cut, farm-fresh seasonal fruit bowls delivered to your door before 9 AM, with zero preservatives.",
      url: SITE_URL,
      telephone: WHATSAPP_DISPLAY,
      email: COMPANY_INFO.email,
      image: `${SITE_URL}/logo.png`,
      logo: `${SITE_URL}/logo.png`,
      priceRange: "₹₹",
      servesCuisine: ["Indian vegetarian", "Sattvic", "Vegan"],
      hasMenu: `${SITE_URL}/menu/`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        postalCode: "380001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 23.0225,
        longitude: 72.5714,
      },
      areaServed: {
        "@type": "City",
        name: "Ahmedabad",
        sameAs: "https://en.wikipedia.org/wiki/Ahmedabad",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "06:00",
          closes: "21:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday"],
          opens: "06:00",
          closes: "14:00",
        },
      ],
      sameAs: [INSTAGRAM_URL],
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY_INFO.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
      sameAs: [INSTAGRAM_URL],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: WHATSAPP_DISPLAY,
        contactType: "customer service",
        availableLanguage: ["English", "Hindi", "Gujarati"],
        areaServed: "IN",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${manrope.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- Material Symbols variable icon font is not yet supported by next/font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-surface overflow-x-hidden">
        <CartProvider>
          <Navbar />
          <main className="pt-24 pb-32 md:pb-0">{children}</main>
          <Footer />
          <BottomNav />
          <WhatsAppFAB />
          <CartButton />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
