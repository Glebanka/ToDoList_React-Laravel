import type { Metadata } from "next";
import type { Viewport } from 'next';
import "./globals.css";
import Header from './header';
import Script from "next/script";

 

export const metadata: Metadata = {
  title: "takesometasks — главная",
  description: "takesometasks лучший сайт в вашей жизни"
};
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0
}
export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>

  
) {
  return (
    <html lang="en">
      {/* <Script src="/js/slider.js" strategy="beforeInteractive" />
      <Script src="/js/theme.js" strategy="beforeInteractive" /> */}
      {/* <Head>
    </Head> */}
      {/* <head> */}
        {/* <link rel="icon" sizes="32x32" type="image/svg+xml" href="images/logo.svg"> */}
        {/* <link rel="stylesheet" href="css/commonStylesV1.2.css"> */}
        {/* <link rel="stylesheet" href="css/indexStylesV1.1.css"> */}
      {/* </head> */}
      <body>
        <Header />
        {children}
        </body>
    </html>
  );
}
