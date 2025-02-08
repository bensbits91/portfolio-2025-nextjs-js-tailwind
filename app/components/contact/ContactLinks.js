import Link from 'next/link';
import { CloudinaryImage } from '@/app/components/image';

const ContactLinks = ({ isNavbar = false }) => {
   return (
      <ul className="flex h-7 gap-4">
         <li>
            <a
               href="https://www.linkedin.com/in/benbrooks/"
               target="_blank"
               rel="noreferrer"
               className="inline-block transition-all duration-300 ease-in-out hover:scale-125">
               <CloudinaryImage
                  cloudinaryId="linkedin-white_t7tuve"
                  alt="LinkedIn"
                  width={30}
                  height={30}
               />
            </a>
         </li>
         <li>
            <a
               href="https://github.com/bensbits91"
               target="_blank"
               rel="noreferrer"
               className="inline-block transition-all duration-300 ease-in-out hover:scale-125">
               <CloudinaryImage
                  cloudinaryId="github1_o1ok5i"
                  alt="GitHub"
                  width={30}
                  height={30}
               />
            </a>
         </li>
         <li>
            <a
               href="https://res.cloudinary.com/ddfrx5278/image/upload/v1738795669/Bennett_Brooks_Resume_2025_yxwtpt.pdf"
               target="_blank"
               className="inline-block transition-all duration-300 ease-in-out hover:scale-125">
               <CloudinaryImage
                  cloudinaryId="resume_o5rgfa"
                  alt="Resume"
                  width={30}
                  height={30}
               />
            </a>
         </li>
         {isNavbar && (
            <li>
               <Link
                  href="/contact"
                  className="inline-block transition-all duration-300 ease-in-out hover:scale-125">
                  <CloudinaryImage
                     cloudinaryId="mail_snle7z"
                     alt="Envelope"
                     width={30}
                     height={30}
                  />
               </Link>
            </li>
         )}
      </ul>
   );
};

export default ContactLinks;
