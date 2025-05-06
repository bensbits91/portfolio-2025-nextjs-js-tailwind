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
      <nav className="light:border-b-gray-300 bg-bg fixed left-0 right-0 top-0 z-40 border-b-2 border-b-gray-800 p-4 lg:hidden">
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
               <button onClick={toggleMenu} className="focus:outline-none">
                  <div className="link h-6 w-6">
                     {isOpen ? <CloseIcon /> : <HamburgerIcon />}
                  </div>
               </button>
            </div>
         </div>
         <Dialog open={isOpen}>
            <Overlay onClick={() => toggleMenu()} className="fixed inset-0" />
            <Content className="bg-gradient-teal shadow-lg fixed left-2 right-2 rounded-lg top-12 text-bb-gray z-20 p-2">
               <Title className="hidden">Mobile Navigation Menu</Title>
               <Description className="hidden">
                  Mobile Navigation Menu
               </Description>
               <NavigationMenu aria-label="Main navigation">
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
      </nav>
   );
};

export default MobileNav;
