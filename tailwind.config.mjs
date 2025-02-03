/** @type {import('tailwindcss').Config} */
export default {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}'
   ],
   theme: {
      extend: {
         colors: {
            background: 'var(--background)',
            foreground: 'var(--foreground)'
         },
         animation: {
            'spin-slow': 'spin 60s linear infinite',
            'fade-in': 'fadeIn 1s ease-out'
         },
         keyframes: {
            fadeIn: {
               '0%': { opacity: '0' },
               '100%': { opacity: '1' }
            }
         }
      }
   },
   plugins: []
};
