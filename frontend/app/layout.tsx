import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Toaster } from "@/components/ui/sonner";
import HeaderWrapper from "@/components/shared/HeaderWrapper";
import QueryProvider from "@/components/providers/query-provider";
import CartDrawer from "@/components/ui/cart-drawer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VMC Group UAE",
  description: "VMC Group UAE - Your Trusted Partner in Food Service Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <CartProvider>
            <HeaderWrapper />
            {children}
            <CartDrawer />
            <Toaster />
          </CartProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
