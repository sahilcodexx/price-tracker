import type { Metadata } from "next";
import { Inter, Charm } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/common/header";
import Footer from "@/components/layout/footer";
import LenisProvider from "@/components/providers/lenis-provider";

const inter = Inter({ subsets: ["latin"] });
const charm = Charm({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-charm",
});

export const metadata: Metadata = {
  title: "Trackhatke | Smart Price Tracker",
  description: "Trackhatke monitors product prices across e-commerce websites and sends instant alerts when prices drop. Save money by buying at the right time.",
  openGraph: {
    title: "Trackhatke | Smart Price Tracker",
    description: "Track product prices across e-commerce websites and get notified when prices drop.",
    images: ["/banner.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${charm.variable} antialiased`}>
        <LenisProvider>
          <Header />
          {children}
          <Footer />
          <Toaster richColors />
        </LenisProvider>
      </body>
    </html>
  );
}
