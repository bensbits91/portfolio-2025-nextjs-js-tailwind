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
      return <div className="link h-5 w-5">{/* <MoonIcon /> */}</div>;
   }

   return (
      <button
         onClick={() => {
            setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
            // (document.activeElement as HTMLElement)?.blur(); // Remove focus -- confirm no longer needed
         }}
         aria-label={`Switch to ${resolvedTheme === 'dark' ? 'light' : 'dark'} mode`}
         className="link wcag-focus h-5 w-5">
         {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </button>
   );
}
