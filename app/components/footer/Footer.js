import { CloudinaryImage } from '@/app/components/image';
import { NavLink } from '@/app/components/navbar';
import { navLinkDefs } from '@/app/constants';

const miscLinkDefs = [
   {
      link: 'https://www.linkedin.com/in/benbrooks/',
      text: 'LinkedIn',
      cloudinaryId: 'linkedin-white_t7tuve'
   },
   {
      link: 'https://github.com/bensbits91',
      text: 'GitHub',
      cloudinaryId: 'github1_o1ok5i'
   },
   {
      link: 'https://res.cloudinary.com/ddfrx5278/image/upload/v1739151148/Ben_Brooks_Resume_vqqprw.pdf',
      text: 'Résumé',
      cloudinaryId: 'resume_o5rgfa'
   }
];

const ContactLinks = () => (
   <ul className="order-3 md:order-1">
      {miscLinkDefs.map(({ link, text, cloudinaryId }, index) => (
         <li key={index}>
            <a
               className="hover-delay hover-brightness inline-block border-b-2 border-b-transparent p-2 lg:hover:border-b-bb-teal lg:hover:text-bb-teal"
               href={link}
               target="_blank"
               rel="noreferrer">
               <div className="flex items-center gap-2">
                  <CloudinaryImage
                     cloudinaryId={cloudinaryId}
                     alt={text}
                     width={15}
                     height={15}
                  />
                  <span>{text}</span>
               </div>
            </a>
         </li>
      ))}
   </ul>
);

const NavLinksOne = () => (
   <ul className="order-1 md:order-2">
      {navLinkDefs.map((def, index) => {
         if (index > 2) return;
         const { text, link } = def;
         return <NavLink key={text} text={text} link={link} pad />;
      })}
   </ul>
);

const NavLinksTwo = () => (
   <ul className="order-2 md:order-3">
      {navLinkDefs.map((def, index) => {
         if (index < 3) return;
         const { text, link } = def;
         return <NavLink key={text} text={text} link={link} pad />;
      })}
   </ul>
);

const FooterLinks = () => (
   <div className="mx-auto w-full max-w-[640px] p-4 md:flex md:max-w-[768px] md:justify-between lg:max-w-[1024px] xl:max-w-[1280px]">
      <NavLinksOne />
      <NavLinksTwo />
      <ContactLinks />
   </div>
);

const Footer = () => {
   return (
      <footer>
         <div className="border-t-2 border-t-gray-800">
            <div className="my-12 flex justify-around">
               <FooterLinks />
            </div>
         </div>
      </footer>
   );
};

export default Footer;
