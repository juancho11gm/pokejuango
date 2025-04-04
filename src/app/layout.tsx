import type { Metadata } from "next";
import { Press_Start_2P } from "next/font/google";
import { SoundEffect } from "@/components/SoundEffect/SoundEffect";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import BackgroundLoaded from "@/components/BackgroundLoaded/BackgroundLoaded";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pressStart2P.className}>
        <BackgroundLoaded>
          <header>
            <SoundEffect />
          </header>
          {children}
          <Footer />
        </BackgroundLoaded>
      </body>
    </html>
  );
}
