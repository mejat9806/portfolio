import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TransisitonProvider from "@/components/transisitonProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amer's portfolio",
  description: "Amer Aizat's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <TransisitonProvider>{children}</TransisitonProvider>
      </body>
    </html>
  );
}
