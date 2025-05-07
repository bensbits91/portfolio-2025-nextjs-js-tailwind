'use client';
import { usePathname } from 'next/navigation';
import {
   NavigationMenu,
   List,
   Item,
   Link
} from '@radix-ui/react-navigation-menu';
import { ContactPopper } from '@/components/contact';
import ThemeChanger from '@/components/ThemeChanger';
import { navLinkDefs } from '@/data/nav';
import clsx from 'clsx';

interface NavLinksProps {
   vertical?: boolean;
}

const NavLinks = ({ vertical = false }: NavLinksProps) => {
   const pathname = usePathname();
   return (
      <NavigationMenu aria-label="Main site navigation links">
         <List
            className={clsx(
               'flex text-sm',
               vertical ? 'flex-col justify-start gap-2' : 'h-5 gap-4'
            )}>
            {navLinkDefs.map(def => {
               const { text, link } = def;
               const isCurrent = pathname === link;
               return (
                  <Item key={text}>
                     <Link
                        href={link}
                        aria-current={isCurrent ? 'page' : undefined}
                        className={clsx(
                           'hover-delay wcag-focus',
                           isCurrent ? 'link-active' : 'link'
                        )}>
                        {text}
                     </Link>
                  </Item>
               );
            })}
            <Item>
               <ContactPopper align="start" alignOffset={-300} sideOffset={15}>
                  <button className="link wcag-focus">
                     Contact
                  </button>
               </ContactPopper>
            </Item>
            {!vertical && (
               <Item>
                  <ThemeChanger />
               </Item>
            )}
         </List>
      </NavigationMenu>
   );
};

export default NavLinks;
