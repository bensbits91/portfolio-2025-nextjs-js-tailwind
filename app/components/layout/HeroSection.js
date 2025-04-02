import { maxWidthCode } from '@/app/utils';

const HeroSection = ({ children, size, bigBottom = true }) => (
   <section
      className={`container mx-auto mt-24 md:mt-32 ${maxWidthCode(size)} ${
         bigBottom ? 'mb-20 md:mb-32' : 'mb-4'
      }`}>
      <div className="px-8">{children}</div>
   </section>
);

export default HeroSection;
