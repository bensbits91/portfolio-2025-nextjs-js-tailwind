import { colorCode } from '@/app/utils';

const P = ({ children, color = 'white', bottom = 'md', size = 'sm' }) => (
   <p
      className={`${(bottom = 'mono' ? 'mb-0' : 'sm' ? 'mb-2' : 'mb-4')} ${
       size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base tracking-wide' : 'text-lg'
        } ${colorCode(color)}`}>
      {children}
   </p>
);

export default P;
