import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const balkind = localFont({
  src: "../assets/fonts/Balkind-Demo.ttf",
  variable: "--font-balkind",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Grand Nancy Hotel",
  description: "Luxury Hotel in the heart of Nancy, France. Experience elegance and comfort with our exceptional service and amenities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${balkind.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
