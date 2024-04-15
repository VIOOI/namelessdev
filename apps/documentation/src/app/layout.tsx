import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  menu,
}: {
  children: React.ReactNode;
  menu: React.ReactNode;
}) {
  return (
    <html lang="en" data-lt-installed>
      <body className={inter.className}>
        {menu}
        {children}
      </body>
    </html>
  );
}