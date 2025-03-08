const UL = ({ items }) => {
   return (
      <ul className="mb-4 ml-6 list-outside list-disc text-sm">
         {items.map((item, index) => (
            <li key={index} className="mb-1">
               {item}
            </li>
         ))}
      </ul>
   );
};

export default UL;
