import React from 'react';
import * as Icons from './index';

interface IconProps {
   name: string; // Allow any string
   dark?: boolean; // Optional prop to force icon to be dark
}

export default function Icon({ name, dark }: IconProps) {
   const IconComponent = Icons[name as keyof typeof Icons]; // Type assertion to access the Icons object

   if (!IconComponent) {
      console.error(`Icon "${name}" does not exist.`);
      return null; // Return null if the icon name is invalid
   }

   return <IconComponent name={name} dark={dark} />;
}
