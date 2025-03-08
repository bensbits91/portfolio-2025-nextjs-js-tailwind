import { colorCode } from '@/app/utils';

const HeadingTwo = ({ children, color = 'jade' }) => {
   return <h2 className={`mb-4 text-2xl/9 md:text-3xl/9 ${colorCode(color)}`}>{children}</h2>;
};

export default HeadingTwo;
