"use client";

import { SessionProvider } from "next-auth/react";

import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <html lang="en">
        <body
          className={`${inter.className} min-h-screen flex flex-col`}>
          <Navbar/>
          <main className="flex-1">
            {children}
          </main>
          <Footer/>
        </body>
      </html>
    </SessionProvider>
  );
}
