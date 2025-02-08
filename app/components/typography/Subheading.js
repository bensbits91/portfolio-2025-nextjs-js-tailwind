import { colorCode } from '@/app/utils';

const Subheading = ({ children, left = false, shrink = false, color='jade-800' }) => {
   const alignment = left ? 'text-left' : 'md:text-center';
   const spacing = shrink ? 'text-lg/6' : 'text-lg/8 tracking-wide';
   return (
      <p className={`pb-8 ${alignment} ${spacing} ${colorCode(color)}`}>{children}</p>
   );
};

export default Subheading;
