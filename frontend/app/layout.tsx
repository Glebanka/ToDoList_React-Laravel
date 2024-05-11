import type { Metadata } from "next";
import type { Viewport } from 'next';
import "./globals.css";
import Header from './Header/header';
import Script from "next/script";

 
export const metadata: Metadata = {
  title: "makesometasks — главная",
  description: "takesometasks лучший сайт в вашей жизни",
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0
}
export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>

  
) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        </body>
    </html>
  );
}
