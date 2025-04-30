import { Toolbar, Button } from '@radix-ui/react-toolbar';
import { CodeLink, LiveLink } from '@/components/common';
// import clsx from 'clsx';

interface ProjectsModalToolbarProps {
   codeLink?: string;
   liveLink?: string;
}

export default function ProjectsModalToolbar({
   codeLink,
   liveLink
}: ProjectsModalToolbarProps) {
   return (
      <Toolbar
         orientation="horizontal"
         className="flex w-full min-w-max items-center gap-4 rounded-md bg-bb-gray-800 px-2 py-3 shadow-[-1px_4px_8px_0] shadow-black/70 sm:gap-8 sm:px-8">
         {codeLink && (
            <Button asChild title="View code">
               <CodeLink
                  codeLink={{
                     href: codeLink,
                     text: 'Code'
                  }}
               />
            </Button>
         )}
         {liveLink && (
            <Button asChild title="View live application">
               <LiveLink
                  liveLink={{
                     href: liveLink,
                     text: 'Live'
                  }}
               />
            </Button>
         )}
      </Toolbar>
   );
}
