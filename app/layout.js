import { Geist, Geist_Mono } from 'next/font/google';
import Navbar from './components/Navbar';
import './globals.css';

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin']
});

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin']
});

export const metadata = {
   title: 'Bennett Brooks',
   description: "Ben's personal website"
};

export default async function RootLayout({ children }) {
   return (
      <html lang='en'>
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <Navbar />
            <div className='container mx-auto px-4 pt-12'>
               <main>{children}</main>
            </div>
         </body>
      </html>
   );
}
