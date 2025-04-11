import { maxWidthCode } from '@/app/utils';

const OneColumnSection = ({ children, size = 'normal', bigTop = false, bigBottom = false }) => {
   return (
      <>
         <section
            className={`container mx-auto ${maxWidthCode(size)} ${
               bigBottom ? 'mb-20 md:mb-32' : 'mb-4'
            } ${
               bigTop ? 'mt-20 md:mt-32' : 'mt-4'
            }`}>
            <div className="px-10">{children}</div>
         </section>
      </>
   );
};

export default OneColumnSection;
