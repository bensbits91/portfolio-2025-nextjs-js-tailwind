const Duty = ({ duty }) => {
   const { name, description } = duty;
   return (
      <li className="mb-4">
         <div className="font-bold">{name && `${name}`}</div>
         <div className="text-xs">{description}</div>
      </li>
   );
};

export default Duty;
