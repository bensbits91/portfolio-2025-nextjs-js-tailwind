import {
   Toolbar,
   Button,
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

interface SkillsViewToolbarProps {
   handleViewClick: (newView: 'table' | 'grid' | 'growth' | 'stack') => void;
   selectedView: 'table' | 'grid' | 'growth' | 'stack';
}

export default function SkillsViewToolbar({
   handleViewClick,
   selectedView
}: SkillsViewToolbarProps) {
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
                     selectedView === 'grid'
                        ? 'link-active'
                        : 'link'
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
                     selectedView === 'table'
                        ? 'link-active'
                        : 'link'
                  )}
                  title="Table view">
                  <div className="h-4 w-4">
                     <TableIcon />
                  </div>
                  <div>Table</div>
               </Button>
            </ToggleItem>
            <ToggleItem asChild value="growth" aria-label="Growth by year view">
               <Button
                  onClick={() => handleViewClick('growth')}
                  className={clsx(
                     'flex items-center gap-2 rounded-md',
                     selectedView === 'growth'
                        ? 'link-active'
                        : 'link'
                  )}
                  title="Growth by year view">
                  <div className="h-4 w-4">
                     <LineChartIcon />
                  </div>
                  <div>Growth</div>
               </Button>
            </ToggleItem>
            <ToggleItem asChild value="stack" aria-label="Stack coverage view">
               <Button
                  onClick={() => handleViewClick('stack')}
                  className={clsx(
                     'flex items-center gap-2 rounded-md',
                     selectedView === 'stack'
                        ? 'link-active'
                        : 'link'
                  )}
                  title="Stack coverage view">
                  <div className="h-4 w-4">
                     <RadarChartIcon />
                  </div>
                  <div>Stack</div>
               </Button>
            </ToggleItem>
         </ToggleGroup>
      </Toolbar>
   );
}
