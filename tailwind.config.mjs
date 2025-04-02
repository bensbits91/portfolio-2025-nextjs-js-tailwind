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
            foreground: 'var(--foreground)',
            'bb-blue': 'var(--bb-blue)',
            'bb-gray': 'var(--bb-gray)',
            'bb-gray-900': 'var(--bb-gray-900)',
            'bb-gray-800': 'var(--bb-gray-800)',
            'bb-gray-500': 'var(--bb-gray-500)',
            'bb-gray-300': 'var(--bb-gray-300)',
            'bb-gray-200': 'var(--bb-gray-200)',
            'bb-jade': 'var(--bb-jade)',
            'bb-jade-800': 'var(--bb-jade-800)',
            'bb-jade-700': 'var(--bb-jade-700)',
            'bb-jade-600': 'var(--bb-jade-600)',
            'bb-red': 'var(--bb-red)',
            'bb-teal': 'var(--bb-teal)',
            'bb-yellow': 'var(--bb-yellow)',
         },
         fontFamily: {
            'roboto-sans': ['var(--font-roboto-sans)', 'sans-serif'],
            'roboto-mono': ['var(--font-roboto-mono)', 'monospace']
         },
         animation: {
            'spin-slow': 'spin 120s linear infinite'
         } /* ,
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
