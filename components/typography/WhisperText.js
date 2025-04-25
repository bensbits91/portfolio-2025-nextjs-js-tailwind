const WhisperText = ({ children, commentStyle = false }) => {
   return (
      <p className="text-xs text-bb-gray-500">
         {commentStyle ? (
            <>
               &lt;!-- {children}{' '}
               <span className="whitespace-nowrap">--&gt;</span>
            </>
         ) : (
            children
         )}
      </p>
   );
};

export default WhisperText;
