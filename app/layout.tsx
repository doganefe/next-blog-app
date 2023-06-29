"use client";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { isDarkMode } from "./utils";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (isDarkMode()) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <html lang="en">
      <body className="m-auto max-w-[1440px] bg-white dark:bg-black text-black dark:text-white transition-all">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
