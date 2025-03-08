const HeadingOne = ({ children, textCenter = true }) => (
   <h1
      className={`mb-8 ${
         textCenter ? 'md:text-center' : ''
      } text-4xl/[50px] md:text-5xl/[50px] tracking-tight`}>
      {children}
   </h1>
);

export default HeadingOne;
