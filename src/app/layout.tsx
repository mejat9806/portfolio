import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import TransisitonProvider from "@/components/transisitonProvider";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

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
