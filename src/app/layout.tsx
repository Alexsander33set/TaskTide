// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const interSans = Inter({
  subsets: ["latin"],
});


export const metadata = {
  title: 'TaskTide',
  description: 'Manage your tasks efficiently with TaskTide',
  image: '/logo.webp',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans} min-h-screen flex flex-col`}
      >
        <Navbar/>
        <main className="flex-1">
          {children}
          </main>
        <Footer/>
      </body>
    </html>
  );
}
