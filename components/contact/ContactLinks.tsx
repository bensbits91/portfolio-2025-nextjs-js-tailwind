import { StyledLink } from '@/components/common';
import clsx from 'clsx';

interface ContactLinksProps {
   vertical?: boolean;
   showText?: boolean;
}

const ContactLinks = ({ vertical = false }: ContactLinksProps) => {
   return (
      <ul
         className={clsx(
            'flex text-sm',
            vertical ? 'flex-col justify-start gap-2' : 'h-4 gap-4'
         )}>
         <li>
            <StyledLink
               href="https://www.linkedin.com/in/benbrooks"
               icon="LinkedInIcon"
               newTab
               text="LinkedIn"
               showText={vertical}
               ariaLabel="View my LinkedIn profile"
            />
         </li>
         <li>
            <StyledLink
               href="https://github.com/bensbits91"
               icon="GithubIcon"
               newTab
               text="GitHub"
               showText={vertical}
               ariaLabel="View my GitHub profile"
            />
         </li>
         <li>
            <StyledLink
               href="https://res.cloudinary.com/ddfrx5278/image/upload/v1739151148/Ben_Brooks_Resume_vqqprw.pdf"
               icon="ResumeIcon"
               newTab
               text="R&eacute;sum&eacute;"
               showText={vertical}
               ariaLabel="Download my Resume as a PDF"
            />
         </li>
      </ul>
   );
};

export default ContactLinks;
