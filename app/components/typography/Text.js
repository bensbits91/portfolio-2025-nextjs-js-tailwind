import { colorCode } from '@/app/utils';

const Text = ({ children, color = 'white', bottom, size = 'sm' }) => (
   <p
      className={`${bottom === 'no' ? 'mb-0' : bottom === 'sm' ? 'mb-2' : 'mb-4'} ${
         size === 'sm'
            ? 'text-sm'
            : size === 'md'
              ? 'text-base tracking-wide'
              : 'text-lg'
      } ${colorCode(color)}`}>
      {children}
   </p>
);

export default Text;
