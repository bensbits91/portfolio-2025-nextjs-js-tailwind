export default function VueIcon({ dark = false }) {
   const bottomFillColor = dark
      ? 'color-mix(in oklab, currentColor 50%, var(--bb-teal)'
      : '#41B883';
   const topFillColor = dark ? 'currentColor' : '#35495E';
   return (
      <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path fill={topFillColor} d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z" />
         <path
            fill={bottomFillColor}
            d="M7.5 4L16 18.5L24.5 4H19.5L16.0653 10.0126L12.5 4H7.5Z"
         />
      </svg>
   );
}
