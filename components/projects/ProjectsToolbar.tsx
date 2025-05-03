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
         className="bg-elevation-2 flex w-full min-w-max items-center gap-4 rounded-md px-2 py-3 shadow-[-1px_4px_8px_0] sm:gap-8 sm:px-8">
         <div className="hidden sm:block">View</div>
         <ToggleGroup
            type="single"
            defaultValue={'table'}
            className="flex items-center gap-4 mx-2 md:gap-8">
            <ToggleItem asChild value="grid" aria-label="Grid view">
               <Button
                  onClick={() => handleViewClick('grid')}
                  className={clsx(
                     'flex items-center gap-2 rounded-md',
                     selectedView === 'grid' ? 'link-active' : 'link'
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
                     'flex items-center gap-2 rounded-md',
                     selectedView === 'table' ? 'link-active' : 'link'
                  )}
                  title="Table view">
                  <div className="h-4 w-4">
                     <TableIcon />
                  </div>
                  <div>Table</div>
               </Button>
            </ToggleItem>
         </ToggleGroup>
      </Toolbar>
   );
}
