import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar , Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cars",
  description: "Car hub Generated by SD Loua from Js mastery youtube channel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar/>
            {children}
        <Footer/>
      </body>
    </html>
  );
}
