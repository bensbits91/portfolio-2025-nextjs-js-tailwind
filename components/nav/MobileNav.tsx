'use client';
import { useState } from 'react';
import {
   Dialog,
   Overlay,
   Content,
   Title,
   Description
} from '@radix-ui/react-dialog';
import {
   NavigationMenu,
   List,
   Item,
   Link
} from '@radix-ui/react-navigation-menu';
import ThemeChanger from '@/components/ThemeChanger';
import { HamburgerIcon, CloseIcon, EnvelopeIcon } from '@/components/icons';
import { ContactPopper, ContactLinks } from '@/components/contact';
import { navLinkDefs } from '@/data/nav';

const MobileNav = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <NavigationMenu
         arial-label="Mobile navigation menu"
         className="light:border-b-gray-300 bg-bg fixed left-0 right-0 top-0 z-40 border-b-2 border-b-gray-800 p-4 lg:hidden">
         <div className="container z-50 mx-auto flex items-center justify-between">
            <div className="text-lg font-bold">
               <ContactLinks />
            </div>
            <div className="flex h-6 items-center gap-4">
               <ThemeChanger />
               <ContactPopper>
                  <div className="link h-6 w-6">
                     <EnvelopeIcon />
                  </div>
               </ContactPopper>
               <button
                  onClick={toggleMenu}
                  aria-label={isOpen ? 'Close menu' : 'Open menu'}
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bb-teal focus-visible:ring-offset-2 focus-visible:ring-offset-bb-gray">
                  <div className="link h-6 w-6">
                     {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  </div>
               </button>
            </div>
         </div>
         <Dialog open={isOpen}>
            <Overlay onClick={() => toggleMenu()} className="fixed inset-0" />
            <Content className="fixed left-2 right-2 top-12 z-20 rounded-lg bg-gradient-teal p-2 text-bb-gray shadow-lg">
               <Title className="sr-only">Mobile Navigation Menu</Title>
               <Description className="hidden">
                  Mobile Navigation Menu
               </Description>
               <NavigationMenu aria-label="Main site navigation links">
                  <List className="flex flex-col gap-2 text-2xl">
                     {navLinkDefs.map(({ link, text }, index) => (
                        <Item key={index}>
                           <Link
                              href={link}
                              className={`mb-6 inline-block px-9 ${index === 0 ? 'mt-6' : ''}`}>
                              {text}
                           </Link>
                        </Item>
                     ))}
                  </List>
               </NavigationMenu>
            </Content>
         </Dialog>
      </NavigationMenu>
   );
};

export default MobileNav;
