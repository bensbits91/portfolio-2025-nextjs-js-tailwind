import { Roboto, Roboto_Mono } from 'next/font/google';
import { Nav } from './components/navbar';
import { Footer } from './components/footer';
import './globals.css';
import Head from 'next/head';

const robotoSans = Roboto({
   weight: '700',
   variable: '--font-roboto-sans',
   subsets: ['latin'],
   display: 'swap'
});

const robotoMono = Roboto_Mono({
   weight: '400',
   variable: '--font-roboto-mono',
   subsets: ['latin'],
   display: 'swap'
});

export const metadata = {
   title: 'Bennett Brooks',
   description: "Ben's personal website"
};

export default async function RootLayout({ children }) {
   return (
      <html lang="en">
         <Head>
            <link
               rel="icon"
               type="image/svg+xml"
               href="/icon.svg"
               sizes="any"
            />
         </Head>
         <body
            className={`${robotoMono.variable} ${robotoSans.variable} antialiased`}>
            <Nav />
            <main>{children}</main>
            <Footer />
         </body>
      </html>
   );
}
