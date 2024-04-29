import Navbar from '@/components/Navbar/Navbar';

import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import type { Metadata } from 'next';

import Footer from '@/components/Footer/Footer';
import local from 'next/font/local';
import Script from 'next/script';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Soluno Airdrop',
  description:
    'Don’t miss the opportunity to be part of one of the biggest airdrops in the Solana ecosystem. Join now with 3 easy steps and get free $UNO tokens.',
  openGraph: {
    images: `https://tracksol.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.4774ccb0.png&w=2048&q=75`,
    title: 'Soluno Airdrop - Get free $UNO tokens!!',
    authors: 'telegram - @devuno1',
  },
};

const myFont = local({
  src: [
    {
      path: '../../public/fonts/01_Objectivity-Thin.otf',
      weight: '100',
    },
    {
      path: '../../public/fonts/02_Objectivity-Light.otf',
      weight: '200',
    },
    {
      path: '../../public/fonts/03_Objectivity-Regular.otf',
      weight: '300',
    },
    {
      path: '../../public/fonts/04_Objectivity-Medium.otf',
      weight: '400',
    },
    {
      path: '../../public/fonts/05_Objectivity-Bold.otf',
      weight: '500',
    },
    {
      path: '../../public/fonts/06_Objectivity-ExtraBold.otf',
      weight: '600',
    },
    {
      path: '../../public/fonts/07_Objectivity-Black.otf',
      weight: '700',
    },
    {
      path: '../../public/fonts/08_Objectivity-Super.otf',
      weight: '800',
    },

    {
      path: '../../public/fonts/line-rounded-icon-font.ttf',
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={myFont.className}>
      <head></head>
      <GoogleTagManager gtmId="GTM-W2H722V6" />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-FQDVKXKWVB`}
        strategy="afterInteractive"
      />

      <Script id="google-analytics-script" strategy="afterInteractive">
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FQDVKXKWVB');
        `}
      </Script>
      <GoogleAnalytics gaId="" />
      <body className={myFont.className}>
        <SkeletonTheme baseColor="#19214250" highlightColor="#1e284f50">
          <Navbar />
          {children}
          <Footer />
        </SkeletonTheme>
      </body>
    </html>
  );
}
