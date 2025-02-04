import { maxWidthCode } from '@/app/utils';

const OneColumnSection = ({ children, size = 'normal', bigBottom = false }) => {
   return (
      <>
         <section
            className={`container mx-auto ${maxWidthCode(size)} ${bigBottom ? 'mb-32' : 'mb-4'}`}>
            <div className="px-10">{children}</div>
         </section>
      </>
   );
};

export default OneColumnSection;
