import { colorCode } from '@/app/utils';

const P = ({ children, color='white' }) => <p className={`mb-4 text-sm ${colorCode(color)}`}>{children}</p>;

export default P;
