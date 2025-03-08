import { CloudinaryImage } from '@/app/components/image';
import { SubtleText } from '@/app/components/typography';

const CodeLink = ({ codeLink }) => {
   return (
      <a
         href={codeLink.href}
         target="_blank"
         rel="noreferrer"
         className="hover-delay hover-brightness block w-52 rounded-sm border-2 border-bb-gray-500 p-4 text-center font-roboto-sans text-sm tracking-wide text-bb-gray">
         <div className="flex items-center gap-2">
            <CloudinaryImage
               cloudinaryId="github1_o1ok5i"
               alt="GitHub"
               width={30}
               height={30}
            />
            {codeLink.text && <SubtleText>{codeLink.text}</SubtleText>}
         </div>
      </a>
   );
};

export default CodeLink;
