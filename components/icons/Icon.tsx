import React from 'react';
import * as Icons from './index';

interface IconProps {
   name: string; // Allow any string
}

const Icon: React.FC<IconProps> = ({ name }) => {
   const IconComponent = Icons[name as keyof typeof Icons]; // Type assertion to access the Icons object

   if (!IconComponent) {
      console.error(`Icon "${name}" does not exist.`);
      return null; // Return null if the icon name is invalid
   }

   return <IconComponent name={name} />;
};

export default Icon;
