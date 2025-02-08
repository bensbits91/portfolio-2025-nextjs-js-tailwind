const HeroSection = ({ children, bigBottom = true }) => (
   <section
      className={`container mx-auto max-w-[640px] mt-24 md:mt-32 ${
         bigBottom ? 'mb-20 md:mb-32' : 'mb-4'
      }`}>
      <div className="px-8">{children}</div>
   </section>
);

export default HeroSection;
