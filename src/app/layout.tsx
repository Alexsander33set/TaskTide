"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "@/utils/types";

import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const interSans = Inter({
  subsets: ["latin"],
});




export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: React.ReactNode;
  session: Session;
}>) {
  return (
    // <SessionProvider>
      <html lang="en">
        <body
          className={`${interSans} min-h-screen flex flex-col`}
        >
          <SessionProvider session={session}>
          <Navbar/>
          <main className="flex-1">
            {children}
          </main>
          <Footer/>
          </SessionProvider>
        </body>
      </html>
    // </SessionProvider>
  );
}
