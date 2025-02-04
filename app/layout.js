import {
   Roboto,
   Roboto_Mono
} from 'next/font/google';
import Navbar from './components/Navbar';
import './globals.css';

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
         <body className={`${robotoMono.variable} ${robotoSans.variable} antialiased`}>
            <Navbar />
            <main>{children}</main>
         </body>
      </html>
   );
}
