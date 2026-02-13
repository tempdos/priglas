import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const timesNewRomanOS = localFont({
  src: "../../public/fonts/times.ttf",
  variable: "--font-times",
  display: "swap",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Ыҥырыы сурук — Приглашение на юбилей",
  description: "Приглашение на юбилей. 01.03.2026",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sah">
      <body className={`${timesNewRomanOS.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
