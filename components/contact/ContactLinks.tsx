import Link from 'next/link';
import { GithubIcon, LinkedInIcon, ResumeIcon } from '@/components/icons';
import clsx from 'clsx';

interface ContactLinksProps {
   vertical?: boolean;
   showText?: boolean;
}

const ContactLinks = ({
   vertical = false,
   showText = false
}: ContactLinksProps) => {
   return (
      <ul
         className={clsx(
            'flex text-sm',
            vertical ? 'flex-col justify-start gap-2' : 'h-5 gap-4'
         )}>
         <li>
            <Link
               href="https://www.linkedin.com/in/benbrooks/"
               target="_blank"
               title="LinkedIn"
               rel="noreferrer"
               className={clsx(
                  'hover-delay text-bb-teal lg:hover:text-bb-yellow',
                  vertical && 'flex items-center gap-2'
               )}>
               <div className="h-5 w-5">
                  <LinkedInIcon />
               </div>
               {showText && <span>LinkedIn</span>}
            </Link>
         </li>
         <li>
            <Link
               href="https://github.com/bensbits91"
               target="_blank"
               title="GitHub"
               rel="noreferrer"
               className={clsx(
                  'hover-delay text-bb-teal lg:hover:text-bb-yellow',
                  vertical && 'flex items-center gap-2'
               )}>
               <div className="h-5 w-5">
                  <GithubIcon />
               </div>
               {showText && <span>GitHub</span>}
            </Link>
         </li>
         <li>
            <Link
               href="https://res.cloudinary.com/ddfrx5278/image/upload/v1739151148/Ben_Brooks_Resume_vqqprw.pdf"
               target="_blank"
               title="Download Resume"
               className={clsx(
                  'hover-delay text-bb-teal lg:hover:text-bb-yellow',
                  vertical && 'flex items-center gap-2'
               )}>
               <div className="h-5 w-5">
                  <ResumeIcon />
               </div>

               {showText && <span>Resume</span>}
            </Link>
         </li>
      </ul>
   );
};

export default ContactLinks;
