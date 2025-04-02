import { colorCode } from '@/app/utils';

const HeadingTwo = ({ children, color = 'jade', noBottom = false }) => {
   return (
      <h2
         className={`${noBottom ? 'mb-0' : 'mb-4'} font-roboto-mono text-2xl/7 md:text-3xl/9 ${colorCode(color)}`}>
         {children}
      </h2>
   );
};

export default HeadingTwo;
