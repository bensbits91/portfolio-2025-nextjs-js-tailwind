const Section = ({
   children,
   width = 'md',
   top = 'md',
   bottom = 'md',
   bg = 'transparent',
   fullheight = false
}) => {
   return (
      <section
         className={`px-0 md:px-5 ${
            bg === 'transparent' ? 'bg-transparent' : `bg-gradient-${bg}`
         } ${
            fullheight
               ? 'pt-0'
               : top === 'sm'
                 ? 'pt-1'
                 : top === 'lg'
                   ? 'pt-20 md:pt-32'
                   : 'pt-4'
         } ${
            fullheight
               ? 'pb-0'
               : bottom === 'sm'
                 ? 'pb-1'
                 : bottom === 'lg'
                   ? 'pb-20 md:pb-32'
                   : 'pb-4'
         } ${fullheight ? 'min-h-screen flex-col content-center' : 'h-auto'}`}>
         <div
            className={`container mx-auto ${
               width === 'sm'
                  ? 'max-w-[640px]'
                  : width === 'lg'
                    ? 'max-w-[1280px]'
                    : 'max-w-[960px]'
            }`}>
            {children}
         </div>
      </section>
   );
};

export default Section;
