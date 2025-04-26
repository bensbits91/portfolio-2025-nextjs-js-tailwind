import { CloudinaryImage } from '@/components/image';
import { Text } from '@/components/typography';

interface CodeLinkProps {
   codeLink: {
      href: string;
      text?: string;
   };
}

const CodeLink = ({ codeLink }: CodeLinkProps) => {
   return (
      <a
         className="hover-delay hover-brightness inline text-sm text-bb-teal"
         // className="hover-delay hover-brightness block w-52 rounded-sm border-2 border-bb-gray-500 p-4 text-center font-roboto-sans text-sm tracking-wide text-bb-gray"
         href={codeLink.href}
         target="_blank"
         rel="noreferrer">
         <div className="flex items-center gap-2">
            <CloudinaryImage
               cloudinaryId="github1_o1ok5i"
               alt="GitHub"
               width={30}
               height={30}
            />
            {codeLink.text && (
               <Text color="teal">
                  {codeLink.text}
               </Text>
            )}
         </div>
      </a>
   );
};

export default CodeLink;
