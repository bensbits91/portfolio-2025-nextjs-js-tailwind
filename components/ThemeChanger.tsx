'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@/components/icons';

export default function ThemeChanger() {
   const [mounted, setMounted] = useState(false);
   const { theme, setTheme } = useTheme();

   useEffect(() => {
      setMounted(true);
   }, []);

   if (!mounted) {
      return null;
   }

   return (
      <>
         {theme === 'dark' ? (
            <button onClick={() => setTheme('light')}>
               <div className="link h-6 w-6">
                  <SunIcon />
               </div>
            </button>
         ) : (
            <button onClick={() => setTheme('dark')}>
               <div className="link h-6 w-6">
                  <MoonIcon />
               </div>
            </button>
         )}
      </>
   );
}
