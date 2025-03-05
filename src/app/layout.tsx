import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TaskTide",
  description: "Manage your tasks efficiently with TaskTide",
  openGraph: {
    title: "TaskTide",
    description: "Manage your tasks efficiently with TaskTide",
  },
};

import "@/styles/globals.css";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <SessionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
