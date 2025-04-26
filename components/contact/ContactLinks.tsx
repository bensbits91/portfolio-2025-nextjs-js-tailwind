import Link from 'next/link';
import { CloudinaryImage } from '@/components/image';

// todo: reusable <a/> hoc

const ContactLinks = ({ isNavbar = false }) => {
   return (
      <ul className="flex h-5 gap-4">
         <li>
            <a
               href="https://www.linkedin.com/in/benbrooks/"
               target="_blank"
               title="LinkedIn"
               rel="noreferrer"
               className="inline-block hover-delay hover-brightness hover-scale">
               <CloudinaryImage
                  cloudinaryId="linkedin-white_t7tuve"
                  alt="LinkedIn"
                  width={20}
                  height={20}
               />
            </a>
         </li>
         <li>
            <a
               href="https://github.com/bensbits91"
               target="_blank"
               title="GitHub"
               rel="noreferrer"
               className="inline-block hover-delay hover-brightness hover-scale">
               <CloudinaryImage
                  cloudinaryId="github1_o1ok5i"
                  alt="GitHub"
                  width={20}
                  height={20}
               />
            </a>
         </li>
         <li>
            <a
               href="https://res.cloudinary.com/ddfrx5278/image/upload/v1739151148/Ben_Brooks_Resume_vqqprw.pdf"
               target="_blank"
               title="Download PDF"
               className="inline-block hover-delay hover-brightness hover-scale">
               <CloudinaryImage
                  cloudinaryId="resume_o5rgfa"
                  alt="Resume"
                  width={20}
                  height={20}
               />
            </a>
         </li>
         {isNavbar && (
            <li>
               <Link
                  href="/contact"
                  title="Contact"
                  className="inline-block hover-delay hover-brightness hover-scale">
                  <CloudinaryImage
                     cloudinaryId="mail_snle7z"
                     alt="Envelope"
                     width={20}
                     height={20}
                  />
               </Link>
            </li>
         )}
      </ul>
   );
};

export default ContactLinks;
