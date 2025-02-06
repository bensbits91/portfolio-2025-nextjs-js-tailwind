'use client';
import { useState } from 'react';
import Link from 'next/link';
import ContactLinks from '@/app/components/contact/ContactLinks';
import { navLinkDefs } from '@/app/constants';

const MobileNav = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const NavLink = ({ link, text, isFirst }) => (
      <li className="my-2">
         <Link
            href={link}
            onClick={toggleMenu}
            className={`inline-block px-9 pb-6 ${isFirst ? 'pt-6' : ''}`}>
            {text}
         </Link>
      </li>
   );

   // todo: add #A0AFBE to var (or replace with existing var)
   // todo: move svgs to public folder?

   return (
      <nav className="fixed left-0 right-0 top-0 z-40 bg-[--background] p-4 text-[#A0AFBE] lg:hidden">
         <div className="container z-50 mx-auto flex items-center justify-between">
            <div className="text-lg font-bold">
               <ContactLinks isNavbar />
            </div>
            <button onClick={toggleMenu} className="focus:outline-none">
               <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                     strokeLinecap="round"
                     strokeLinejoin="round"
                     strokeWidth="2"
                     d="M4 6h16M4 12h16m-7 6h7"></path>
               </svg>
            </button>
         </div>
         {isOpen && (
            <div
               onClick={toggleMenu}
               className="fixed inset-0 z-40 bg-black bg-opacity-50"
            />
         )}
         <div
            className={`fixed right-0 top-[60px] z-40 h-[500px] w-[300px] bg-[--bb-dark-gray-900] text-2xl ${
               isOpen
                  ? 'translate-x-0'
                  : 'translate-x-[100vh] md:translate-x-[130vh]'
            } transform transition-transform duration-500 ease-in-out`}>
            <div className="flex items-start justify-between p-4">
               <ul>
                  {navLinkDefs.map(({ link, text }, index) => (
                     <NavLink
                        key={index}
                        link={link}
                        text={text}
                        isFirst={index === 0}
                     />
                  ))}
               </ul>
               <button onClick={toggleMenu} className="p-1 focus:outline-none">
                  <svg
                     className="h-6 w-6"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
               </button>
            </div>
         </div>
      </nav>
   );
};

export default MobileNav;
