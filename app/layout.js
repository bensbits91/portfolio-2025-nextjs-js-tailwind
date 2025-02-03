import {
   /* Geist, Geist_Mono,  */ Roboto,
   Roboto_Mono
} from 'next/font/google';
import Navbar from './components/Navbar';
import './globals.css';
// import 'next/font/google/target.css';

// const geistSans = Geist({
//    variable: '--font-geist-sans',
//    subsets: ['latin']
// });

// const geistMono = Geist_Mono({
//    variable: '--font-geist-mono',
//    subsets: ['latin']
// });

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
         <body
            className={`${robotoMono.variable} ${robotoSans.variable} antialiased animate-fade-in`}
         >
            <Navbar />
            <main>{children}</main>
         </body>
      </html>
   );
}
