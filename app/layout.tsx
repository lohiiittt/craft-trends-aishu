import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Craft Trends by Aishu - Handcrafted Rajasthani Bangles",
  description:
    "Exquisite handcrafted Rajasthani bangles made with love and tradition. Unique designs by skilled artisans from Rajasthan. Shop authentic Indian jewelry online.",
  keywords: [
    "handcrafted bangles",
    "rajasthani bangles",
    "indian jewelry",
    "traditional bangles",
    "handmade jewelry",
    "craft trends",
    "aishu",
    "ethnic bangles",
    "kundan bangles",
    "meenakari bangles",
    "handmade bangles",
    "artisan bangles",
    "unique bangles",
    "indian handicrafts",
    "jewelry online",
    "bangles collection",
    "rajasthani jewelry",
  ],
  authors: [{ name: "Craft Trends by Aishu" }],
  creator: "Craft Trends by Aishu",
  publisher: "Craft Trends by Aishu",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://craft-trends-aishu.netlify.app",
    siteName: "Craft Trends by Aishu",
    title: "Craft Trends by Aishu - Handcrafted Rajasthani Bangles",
    description:
      "Exquisite handcrafted Rajasthani bangles made with love and tradition. Unique designs by skilled artisans from Rajasthan.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Craft Trends by Aishu - Handcrafted Bangles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Craft Trends by Aishu - Handcrafted Rajasthani Bangles",
    description:
      "Exquisite handcrafted Rajasthani bangles made with love and tradition. Unique designs by skilled artisans from Rajasthan.",
    images: ["/images/logo.png"],
    creator: "@crafttrendby_aishu",
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual Google verification code
  },
  alternates: {
    canonical: "https://craft-trends-aishu.netlify.app",
  },
  category: "jewelry",
  classification: "Business",
  other: {
    "contact:email": "aishuscraft@gmail.com",
    "contact:phone_number": "+91 63783 35633",
    "contact:country_name": "India",
    "contact:region": "Rajasthan",
    "contact:postal_code": "312202",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color */}
        <meta name="theme-color" content="#be123c" />
        <meta name="msapplication-TileColor" content="#be123c" />

        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Craft Trends by Aishu" />

        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Craft Trends by Aishu",
              description: "Handcrafted Rajasthani bangles made with love and tradition",
              url: "https://craft-trends-aishu.netlify.app",
              telephone: "+91 63783 35633",
              email: "aishuscraft@gmail.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Kapasan",
                addressLocality: "Chittorgarh",
                addressRegion: "Rajasthan",
                postalCode: "312202",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "24.8887",
                longitude: "74.6269",
              },
              openingHours: "Mo-Su 09:00-18:00",
              priceRange: "₹899-₹3999",
              image: "https://craft-trends-aishu.netlify.app/images/logo.png",
              sameAs: ["https://www.instagram.com/crafttrendby_aishu"],
            }),
          }}
        />

        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Handcrafted Rajasthani Bangles",
              description: "Exquisite handcrafted bangles from Rajasthan made by skilled artisans",
              brand: {
                "@type": "Brand",
                name: "Craft Trends by Aishu",
              },
              category: "Jewelry",
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "INR",
                lowPrice: "899",
                highPrice: "3999",
                availability: "https://schema.org/InStock",
              },
              image: "https://craft-trends-aishu.netlify.app/images/logo.png",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
