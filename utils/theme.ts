// todo: replace with tailwindcss theme extend
export const colorCode = (color: string) => {
   switch (color) {
      case 'white':
         return 'text-foreground';
      case 'gray':
         return 'text-bb-gray';
      case 'blue':
         return 'text-bb-blue';
      case 'jade':
         return 'text-bb-jade';
      case 'jade-800':
         return 'text-bb-jade-800';
      case 'jade-700':
         return 'text-bb-jade-700';
      case 'jade-600':
         return 'text-bb-jade-600';
      case 'red':
         return 'text-bb-red';
      case 'teal':
         return 'text-bb-teal';
      case 'yellow':
         return 'text-bb-yellow';
      default:
         return 'text-bb-jade';
   }
};

export const maxWidthCode = (size: string) => {
   switch (size) {
      case 'wide':
         return 'max-w-[1200px]';
      case 'normal':
         return 'max-w-[800px]';
      case 'narrow':
         return 'max-w-[640px]';
      default:
         return 'max-w-[800px]';
   }
};
