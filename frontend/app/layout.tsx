import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/sonner";
import HeaderWrapper from "@/components/shared/HeaderWrapper";
import QueryProvider from "@/components/providers/query-provider";
import CartDrawer from "@/components/ui/cart-drawer";
import Footer4Col from "@/components/mvpblocks/footer-4col";
import PageLoader from "@/components/ui/page-loader";
import SeoSchema from "@/components/seo/SeoSchema";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vmcgroupuae.com"),
  title: {
    default:
      "VMC Group UAE | Food Packaging, Frozen Food & Wholesale Supplier Dubai",
    template: "%s | VMC Group UAE",
  },
  description:
    "VMC General Trading LLC – leading UAE & GCC supplier of food packaging, frozen food distribution, raw food, daily essentials and import/export services since 2008. HACCP & ISO 22000 certified. Trusted by 500+ businesses.",
  applicationName: "VMC Group UAE",
  generator: "Next.js",
  keywords: [
    "food packaging UAE",
    "frozen food distribution UAE",
    "general trading Dubai",
    "food supplier UAE",
    "wholesale food Dubai",
    "cold chain logistics UAE",
    "food trading company Dubai",
    "import export services Dubai",
    "eco-friendly food packaging",
    "HACCP certified food supplier",
    "bulk food supply GCC",
    "disposable packaging wholesale UAE",
    "frozen meat supplier Dubai",
    "raw food wholesale UAE",
    "daily essentials supplier Dubai",
    "private label food UAE",
    "halal food supplier GCC",
    "ISO 22000 food supplier UAE",
    "VMC General Trading UAE",
    "food packaging solutions Dubai",
  ],
  authors: [{ name: "VMC General Trading LLC", url: "https://www.vmcgroupuae.com" }],
  creator: "VMC General Trading LLC",
  publisher: "VMC General Trading LLC",
  category: "Food & Beverage Wholesale",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: "https://www.vmcgroupuae.com",
    siteName: "VMC Group UAE",
    title:
      "VMC Group UAE | Food Packaging, Frozen Food & Wholesale Supplier Dubai",
    description:
      "Leading UAE & GCC food solutions provider since 2008. Food packaging, frozen food distribution, raw food supply, daily essentials and import/export services. HACCP & ISO 22000 certified.",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "VMC Group UAE – Food Packaging & Wholesale Distribution",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VMC Group UAE | Food Packaging & Wholesale Distribution",
    description:
      "Trusted UAE & GCC supplier of food packaging, frozen food, raw food and daily essentials. HACCP & ISO 22000 certified since 2008.",
    images: ["/logo.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo.webp",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <SeoSchema />
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-4S3V3CJCN4"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-4S3V3CJCN4');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <PageLoader />
        <QueryProvider>
          <CartProvider>
            <HeaderWrapper />
            {children}
            <Footer4Col />
            <CartDrawer />
            <Toaster />
          </CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
