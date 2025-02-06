const Subheading = ({ children, left = false, shrink = false }) => {
   const alignment = left ? 'text-left' : 'md:text-center';
   const spacing = shrink ? 'text-lg/6' : 'text-lg/8 tracking-wide';
   return (
      <p className={`pb-8 ${alignment} ${spacing}`}>{children}</p>
   );
};

export default Subheading;
