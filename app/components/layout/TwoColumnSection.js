import { HeadingTwo } from '@/app/components/typography';

const TwoColumnSection = ({ heading = '', columns }) => {
   return (
      <>
         <section className="container mx-auto max-w-[1200px] mb-20 md:mb-32">
            {heading && (
               <div className="pl-10 md:pl-20">
                  <HeadingTwo>{heading}</HeadingTwo>
               </div>
            )}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
               {columns.map((column, index) => (
                  <div
                     key={index}
                     className={`px-10 mb-10 ${index % 2 === 0 ? 'md:pl-20' : 'md:pr-20'}`}>
                     {column.content}
                  </div>
               ))}
            </div>
         </section>
      </>
   );
};

export default TwoColumnSection;
