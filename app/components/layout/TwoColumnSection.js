const TwoColumnSection = ({ columns }) => {
   return (
      <>
         <section className="container mx-auto max-w-[1200px] pb-32">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
               {columns.map((column, index) => {
                  const { content, handleClick } = column;
                  const isOdd = index % 2 === 0;
                  return handleClick ? (
                     <div
                        key={index}
                        className={`px-10 pb-10 ${
                           isOdd ? 'md:pl-20' : 'md:pr-20'
                        }${
                           handleClick
                              ? `${' '}cursor-pointer transition-colors duration-1000 hover:bg-red-400` // todo: yuck - maybe just add a button?
                              : ''
                        }`}
                        onClick={handleClick || undefined}>
                        {content}
                     </div>
                  ) : (
                     <div
                        key={index}
                        className={`px-10 pb-10 ${isOdd ? 'md:pl-20' : 'md:pr-20'}`}>
                        {content}
                     </div>
                  );
               })}
            </div>
         </section>
      </>
   );
};

export default TwoColumnSection;
