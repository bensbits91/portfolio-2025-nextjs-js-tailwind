const WhisperText = ({ children, commentStyle = false }) => (
   <p className="text-xs text-[--bb-dark-gray-500]">
      {commentStyle ? `<!-- ${children} -->` : children}
   </p>
);

export default WhisperText;
