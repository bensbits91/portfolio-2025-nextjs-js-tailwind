import { Toolbar, Button } from '@radix-ui/react-toolbar';
import { StyledLink } from '@/components/common';
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
         className="flex w-full min-w-max items-center gap-4 rounded-md bg-elevation-3 px-6 py-3 shadow-[-1px_4px_8px_0] sm:gap-8 sm:px-8">
         {codeLink && (
            <Button asChild title="View code">
               <StyledLink href={codeLink} icon="GitHub" newTab text="Code" />
            </Button>
         )}
         {liveLink && (
            <Button asChild title="View live application">
               <StyledLink href={liveLink} icon="Play" newTab text="Live" />
            </Button>
         )}
      </Toolbar>
   );
}
