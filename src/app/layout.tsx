import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BottomNav from "@/components/layout/BottomNav";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import CartButton from "@/components/cart/CartButton";
import CartDrawer from "@/components/cart/CartDrawer";
import CartToast from "@/components/cart/CartToast";
import WelcomeBanner from "@/components/layout/WelcomeBanner";
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
      alternateName: ["NBH", "Nothing But Healthy Ahmedabad"],
      slogan: "Fresh & Clean Living",
      description:
        "Ahmedabad's first daily fruit subscription service. Chef-cut, farm-fresh seasonal fruit bowls and cold-pressed juices delivered to your door before 9 AM, with zero preservatives.",
      url: SITE_URL,
      telephone: WHATSAPP_DISPLAY,
      email: COMPANY_INFO.email,
      image: `${SITE_URL}/logo.png`,
      logo: `${SITE_URL}/logo.png`,
      // Concrete price band, not an opaque "₹₹". Matches lowest juice (₹79)
      // and the most expensive bowl (₹329) on the live menu.
      priceRange: "₹79–₹329",
      currenciesAccepted: "INR",
      paymentAccepted: "UPI, Cash, Credit Card, Debit Card, Bank Transfer",
      servesCuisine: ["Indian vegetarian", "Sattvic", "Vegan"],
      hasMenu: `${SITE_URL}/menu/`,
      keywords:
        "fruit subscription Ahmedabad, fruit bowl delivery Ahmedabad, cold-pressed juice Ahmedabad, healthy breakfast subscription, daily fruit delivery, vegetarian breakfast Ahmedabad, juice cleanse Ahmedabad",
      knowsAbout: [
        "Daily fruit subscription",
        "Cold-pressed juice",
        "Healthy breakfast",
        "Sattvic vegetarian food",
        "Fruit bowl catering",
        "Bulk corporate breakfast Ahmedabad",
      ],
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
      areaServed: [
        { "@type": "City", name: "Ahmedabad", sameAs: "https://en.wikipedia.org/wiki/Ahmedabad" },
        { "@type": "Place", name: "Bodakdev, Ahmedabad" },
        { "@type": "Place", name: "Vastrapur, Ahmedabad" },
        { "@type": "Place", name: "Satellite, Ahmedabad" },
        { "@type": "Place", name: "SG Highway, Ahmedabad" },
        { "@type": "Place", name: "Prahladnagar, Ahmedabad" },
        { "@type": "Place", name: "Bopal, Ahmedabad" },
        { "@type": "Place", name: "Thaltej, Ahmedabad" },
        { "@type": "Place", name: "Navrangpura, Ahmedabad" },
        { "@type": "Place", name: "CG Road, Ahmedabad" },
        { "@type": "Place", name: "Paldi, Ahmedabad" },
        { "@type": "Place", name: "Maninagar, Ahmedabad" },
        { "@type": "Place", name: "Naranpura, Ahmedabad" },
        { "@type": "Place", name: "Sabarmati, Ahmedabad" },
        { "@type": "Place", name: "Chandkheda, Ahmedabad" },
      ],
      serviceArea: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 23.0225,
          longitude: 72.5714,
        },
        geoRadius: "20000", // 20 km radius around Ahmedabad
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
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#fruit-subscription-service`,
      name: "Daily Fruit Bowl & Cold-Pressed Juice Subscription",
      serviceType: "Daily fruit subscription",
      provider: { "@id": `${SITE_URL}/#business` },
      areaServed: {
        "@type": "City",
        name: "Ahmedabad",
      },
      audience: {
        "@type": "PeopleAudience",
        audienceType: "Working professionals, gym-goers, families and busy parents in Ahmedabad",
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "INR",
        lowPrice: "79",
        highPrice: "329",
        offerCount: "12",
        availability: "https://schema.org/InStock",
      },
      hoursAvailable: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "06:00",
          closes: "09:00",
        },
      ],
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
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <CartProvider>
          <Navbar />
          <main id="main-content" className="pt-24 pb-32 md:pb-0">
            {children}
          </main>
          <Footer />
          <BottomNav />
          <WhatsAppFAB />
          <CartButton />
          <CartDrawer />
          <CartToast />
          <WelcomeBanner />
        </CartProvider>
      </body>
    </html>
  );
}
