import Footer from "@/components/Footer";
import GTMPageTracker from "@/components/GTMPageTracker";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import ToastProvider from "@/components/ToastProvider";
import { Inter, JetBrains_Mono } from "next/font/google";

import Topbar from "@/components/Topbar";
import { GoogleTagManager } from "@next/third-parties/google";
import "swiper/css";
import "./globals.css";
const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  variant: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  variant: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "NYC-SERVICES",
  description: "Commercial cleaning services in NYC",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en">
      <head>
      </head>
      {GTM_ID && <GoogleTagManager gtmId={GTM_ID} />}
      <body
        className={`${jetBrainsMono.variable} ${inter.variable} antialiased`}
      >
        <ToastProvider>
          <GTMPageTracker />
          <Topbar/>
          <Header />
          {children}
          <ScrollToTopButton />
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}
