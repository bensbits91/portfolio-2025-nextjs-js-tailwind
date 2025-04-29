import {
   Toolbar,
   Button,
   //    Separator,
   ToggleGroup,
   ToggleItem
} from '@radix-ui/react-toolbar';
import { TableIcon, GridIcon } from '@/components/icons';
import clsx from 'clsx';

interface ProjectsViewToolbarProps {
   handleViewClick: (newView: 'table' | 'grid') => void;
   selectedView: 'table' | 'grid';
}

export default function ProjectsViewToolbar({
   handleViewClick,
   selectedView
}: ProjectsViewToolbarProps) {
   return (
      <Toolbar
         orientation="horizontal"
         className="flex w-full min-w-max items-center gap-4 rounded-md bg-bb-gray-800 px-2 py-3 shadow-[-1px_4px_8px_0] shadow-black/70 sm:gap-8 sm:px-8">
         <div className="hidden sm:block">View</div>
         <ToggleGroup
            type="single"
            defaultValue={'table'}
            className="mx-auto flex items-center gap-4 sm:mx-0 md:gap-8">
            <ToggleItem asChild value="grid" aria-label="Grid view">
               <Button
                  onClick={() => handleViewClick('grid')}
                  className={clsx(
                     'flex cursor-pointer items-center gap-2 rounded-md hover:text-bb-yellow',
                     selectedView === 'grid' ? 'text-bb-yellow' : 'text-bb-teal'
                  )}
                  title="Grid view">
                  <div className="h-4 w-4">
                     <GridIcon />
                  </div>
                  <div>Grid</div>
               </Button>
            </ToggleItem>
            <ToggleItem asChild value="table" aria-label="Table view">
               <Button
                  onClick={() => handleViewClick('table')}
                  className={clsx(
                     'flex cursor-pointer items-center gap-2 rounded-md hover:text-bb-yellow',
                     selectedView === 'table'
                        ? 'text-bb-yellow'
                        : 'text-bb-teal'
                  )}
                  title="Table view">
                  <div className="h-4 w-4">
                     <TableIcon />
                  </div>
                  <div>Table</div>
               </Button>
            </ToggleItem>
         </ToggleGroup>
         {/* <Separator className="mx-8 h-6 w-px bg-bb-gray-200" /> */}
      </Toolbar>
   );
}
