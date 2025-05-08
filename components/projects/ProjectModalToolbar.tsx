import { Toolbar, Button } from '@radix-ui/react-toolbar';
import { StyledLink } from '@/components/common';

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
         className="elevation-2 flex w-full min-w-max items-center gap-4 rounded-md px-6 py-3 shadow-[-1px_4px_8px_0] sm:gap-8 sm:px-8">
         <h2 id="toolbar-title" className="sr-only">
            Project Toolbar
         </h2>
         {codeLink && (
            <Button asChild title="View code">
               <StyledLink
                  href={codeLink}
                  icon="GithubIcon"
                  newTab
                  text="Code"
                  ariaLabel="View this project on GitHub"
               />
            </Button>
         )}
         {liveLink && (
            <Button asChild title="View live">
               <StyledLink
                  href={liveLink}
                  icon="PlayIcon"
                  newTab
                  text="Live"
                  ariaLabel="View this project live"
               />
            </Button>
         )}
      </Toolbar>
   );
}
