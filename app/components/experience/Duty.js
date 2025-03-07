import Link from 'next/link';

const Duty = ({ duty }) => {
   const { name, description, moreInfoLink } = duty;
   return (
      <li className="mb-4">
         <div className="font-bold">{name && `${name}`}</div>
         <div className="text-xs">{description}</div>
         {moreInfoLink && (
            <Link className='text-sm text-bb-teal inline' href={moreInfoLink.href}>
               {moreInfoLink.text}
            </Link>
         )}
      </li>
   );
};

export default Duty;
