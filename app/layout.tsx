import Head from 'next/head';
import { Analytics } from '@vercel/analytics/next';
import { ThemeProvider } from 'next-themes';
import { Roboto, Roboto_Mono } from 'next/font/google';
import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import './globals.css';

const robotoSans = Roboto({
   weight: '400',
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

interface RootLayoutProps {
   children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
   return (
      <html lang="en" suppressHydrationWarning>
         <Head>
            <link
               rel="icon"
               type="image/svg+xml"
               href="/icon.svg"
               sizes="any"
            />
         </Head>
         <body
            className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
               <Nav />
               <main>
                  {children}
                  <Analytics />
               </main>
            </ThemeProvider>
            <Footer />
         </body>
      </html>
   );
}
