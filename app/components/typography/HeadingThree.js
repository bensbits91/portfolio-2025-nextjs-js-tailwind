import { colorCode } from '@/app/utils';

const HeadingThree = ({ children, color = 'jade-700' }) => {
   return <h3 className={`mb-4 text-2xl ${colorCode(color)}`}>{children}</h3>;
};

export default HeadingThree;
