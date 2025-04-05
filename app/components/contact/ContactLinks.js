import Link from 'next/link';
import { CloudinaryImage } from '@/app/components/image';

// todo: reusable <a/> hoc

const ContactLinks = ({ isNavbar = false }) => {
   return (
      <ul className="flex h-7 gap-4">
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
                  width={30}
                  height={30}
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
                  width={30}
                  height={30}
               />
            </a>
         </li>
         <li>
            <a
               href="https://res.cloudinary.com/ddfrx5278/image/upload/v1739151148/Ben_Brooks_Resume_z4r3vi.pdf"
               target="_blank"
               title="Download PDF"
               className="inline-block hover-delay hover-brightness hover-scale">
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
                  title="Contact"
                  className="inline-block hover-delay hover-brightness hover-scale">
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
