const HeroSection = ({ children, bigBottom = true }) => (
   <section
      className={`container mx-auto max-w-[640px] pt-24 md:pt-32 ${
         bigBottom ? 'pb-32' : 'pb-4'
      }`}>
      <div className="px-8">{children}</div>
   </section>
);

export default HeroSection;
