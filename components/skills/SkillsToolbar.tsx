import {
   Toolbar,
   Button,
   Separator,
   ToggleGroup,
   ToggleItem
} from '@radix-ui/react-toolbar';
import {
   TableIcon,
   GridIcon,
   LineChartIcon,
   RadarChartIcon
} from '@/components/icons';
import clsx from 'clsx';

interface ThingsViewToolbarProps {
   handleViewClick: (newView: 'table' | 'grid' | 'growth' | 'stack') => void;
   selectedView: 'table' | 'grid' | 'growth' | 'stack';
}

export default function ThingsViewToolbar({
   handleViewClick,
   selectedView
}: ThingsViewToolbarProps) {
   return (
      <Toolbar
         orientation="horizontal"
         className="flex w-full min-w-max items-center gap-4 rounded-md bg-bb-gray-800 p-2.5 shadow-[-1px_4px_8px_0] shadow-black/70">
         View
         <ToggleGroup
            type="single"
            defaultValue={'table'}
            className="flex gap-2">
            <ToggleItem asChild value="table" aria-label="Table view">
               <Button
                  onClick={() => handleViewClick('table')}
                  className={clsx(
                     'h-4 w-4 cursor-pointer rounded-md hover:text-bb-yellow',
                     selectedView === 'table'
                        ? 'text-bb-yellow'
                        : 'text-bb-teal'
                  )}
                  title="Table view">
                  <TableIcon />
               </Button>
            </ToggleItem>
            <ToggleItem asChild value="grid" aria-label="Grid view">
               <Button
                  onClick={() => handleViewClick('grid')}
                  className={clsx(
                     'h-4 w-4 cursor-pointer rounded-md hover:text-bb-yellow',
                     selectedView === 'grid' ? 'text-bb-yellow' : 'text-bb-teal'
                  )}
                  title="Grid view">
                  <GridIcon />
               </Button>
            </ToggleItem>
            <ToggleItem asChild value="growth" aria-label="Growth by year view">
               <Button
                  onClick={() => handleViewClick('growth')}
                  className={clsx(
                     'h-4 w-4 cursor-pointer rounded-md hover:text-bb-yellow',
                     selectedView === 'growth'
                        ? 'text-bb-yellow'
                        : 'text-bb-teal'
                  )}
                  title="Growth by year view">
                  <LineChartIcon />
               </Button>
            </ToggleItem>
            <ToggleItem asChild value="stack" aria-label="Stack coverage view">
               <Button
                  onClick={() => handleViewClick('stack')}
                  className={clsx(
                     'h-4 w-4 cursor-pointer rounded-md hover:text-bb-yellow',
                     selectedView === 'stack'
                        ? 'text-bb-yellow'
                        : 'text-bb-teal'
                  )}
                  title="Stack coverage view">
                  <RadarChartIcon />
               </Button>
            </ToggleItem>
         </ToggleGroup>
         <Separator className="mx-8 h-6 w-px bg-bb-gray-200" />
      </Toolbar>
   );
}
