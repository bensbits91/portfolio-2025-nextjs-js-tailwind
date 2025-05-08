interface LoadingProps {
   size?: number; // Size of the spinner
   color?: string; // Color of the spinner
   message?: string; // Optional loading message for screen readers
   showMessage?: boolean; // Whether to show the loading message visually with the spinner
}

function Loading({
   size = 24,
   color = 'currentColor',
   message = 'Loading...',
   showMessage = true
}: LoadingProps) {
   return (
      <div
         role="status"
         aria-live="polite"
         aria-busy="true"
         className="flex flex-col gap-4 items-center justify-center">
         <svg
            className="animate-spin"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <circle
               cx="12"
               cy="12"
               r="10"
               stroke={color}
               strokeWidth="4"
               strokeDasharray="31.4"
               strokeDashoffset="0"
               className="opacity-25"
            />
            <path
               d="M12 2a10 10 0 0110 10h-4a6 6 0 00-6-6V2z"
               fill={color}
               className="opacity-75"
            />
         </svg>
         {showMessage ? (
            <p>{message}</p>
         ) : (
            <span className="sr-only">{message}</span>
         )}
      </div>
   );
}

export default Loading;
