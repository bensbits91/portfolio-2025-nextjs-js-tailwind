import { colorCode } from '@/app/utils';

const HeadingTwo = ({ children, color = 'green' }) => {
   return <h2 className={`mb-4 text-3xl/9 ${colorCode(color)}`}>{children}</h2>;
};

export default HeadingTwo;
