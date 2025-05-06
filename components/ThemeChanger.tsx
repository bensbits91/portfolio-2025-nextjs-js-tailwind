'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@/components/icons';

export default function ThemeChanger() {
   const { resolvedTheme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
      // Ensure the component is only rendered after the client has mounted
      setMounted(true);
   }, []);

   if (!mounted) {
      // Fallback to avoid rendering mismatched HTML during SSR
      return (
         <div className="link h-6 w-6">
            {/* <MoonIcon /> */}
         </div>
      );
   }

   return (
      <button
         onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            (document.activeElement as HTMLElement)?.blur(); // Remove focus
         }}
         aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
         className="link h-6 w-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-bb-teal">
         {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
   );
}
