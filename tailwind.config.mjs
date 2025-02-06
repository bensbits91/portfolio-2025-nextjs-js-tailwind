/** @type {import('tailwindcss').Config} */
export default {
   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}'
   ],
   theme: {
      extend: {
         boxShadow: {
            'dark-card':
               '0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12)'
         },
         colors: {
            background: 'var(--background)',
            foreground: 'var(--foreground)'
         },
         fontFamily: {
            'roboto-sans': ['Roboto', 'sans-serif'],
            'roboto-mono': ['RobotoRoboto_Mono', 'serif']
         },
         animation: {
            'spin-slow': 'spin 120s linear infinite'
         }/* ,
         keyframes: {
            fadeIn: {
               '0%': { opacity: '0' },
               '100%': { opacity: '1' }
            },
            fadeOut: {
               '0%': { opacity: '1' },
               '100%': { opacity: '0' }
            },
            slideUp: {
               '0%': { transform: 'translateY(0)' },
               '100%': { transform: 'translateY(-120%)' }
            },
            slideDown: {
               '0%': { transform: 'translateY(-120%)' },
               '100%': { transform: 'translateY(0)' }
            }
         } */
      }
   },
   plugins: []
};
