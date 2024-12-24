import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import GoogleAnalytics from '@/components/GoogleAnalytics';

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Yogesh Vijayan - Developer Portfolio",
  description:
    "Explore the portfolio of Yogesh Vijayan, a software engineer showcasing his projects and expertise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={jetbrainsMono.variable}>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        <PageTransition>
          <Header />
          {children}
          <Footer />
        </PageTransition>
      </body>
    </html>
  );
}
