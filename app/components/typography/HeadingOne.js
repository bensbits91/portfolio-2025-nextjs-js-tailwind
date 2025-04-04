const HeadingOne = ({ children, textCenter = false }) => (
   <h1
      className={`mb-8 font-roboto-mono ${
         textCenter ? 'md:text-center' : ''
      } text-5xl/[50px] md:text-6xl/[50px] tracking-tight`}>
      {children}
   </h1>
);

export default HeadingOne;
