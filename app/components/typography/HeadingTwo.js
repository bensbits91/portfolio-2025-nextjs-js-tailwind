const HeadingTwo = ({ children, color = 'yellow' }) => {
   const colorCode = `--bb-${color}`;
   return <h2 className={`mb-4 text-3xl/9 text-[${colorCode}]`}>{children}</h2>;
};

export default HeadingTwo;
