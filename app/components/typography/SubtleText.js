const SubtleText = ({ children, textCenter = false }) => (
   <p className={`text-[--bb-dark-gray-300] text-sm ${
      textCenter ? 'text-center' : ''
   }`}>{children}</p>
);

export default SubtleText;
