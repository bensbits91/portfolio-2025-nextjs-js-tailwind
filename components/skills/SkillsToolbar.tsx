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
   const isGridView = selectedView === 'grid';
   const isTableView = selectedView === 'table';
   const isGrowthView = selectedView === 'growth';
   const isStackView = selectedView === 'stack';

   return (
      <Toolbar
         orientation="horizontal"
         className="elevation-1 flex w-full min-w-max items-center gap-4 rounded-md px-2 py-3 shadow-[-1px_4px_8px_0] sm:gap-8 sm:px-8">
         <div className="hidden sm:block">View</div>
         <ToggleGroup
            type="single"
            defaultValue={'table'}
            role="tablist"
            className="mx-2 flex items-center gap-4 md:gap-8">
            <ToggleItem
               asChild
               value="grid"
               role="tab"
               tabIndex={0}
               aria-label="Grid view"
               aria-selected={isGridView}>
               <Button
                  onClick={() => handleViewClick('grid')}
                  onKeyDown={e => {
                     if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleViewClick('grid');
                     }
                  }}
                  title="Grid view"
                  className={clsx(
                     'flex items-center gap-2 rounded-md',
                     isGridView ? 'link-active' : 'link'
                  )}>
                  <div className="h-4 w-4">
                     <GridIcon />
                  </div>
                  <div>Grid</div>
               </Button>
            </ToggleItem>
            <ToggleItem
               asChild
               value="table"
               role="tab"
               tabIndex={0}
               aria-label="Table view"
               aria-selected={isTableView}>
               <Button
                  onClick={() => handleViewClick('table')}
                  onKeyDown={e => {
                     if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleViewClick('table');
                     }
                  }}
                  title="Table view"
                  className={clsx(
                     'flex items-center gap-2 rounded-md',
                     isTableView ? 'link-active' : 'link'
                  )}>
                  <div className="h-4 w-4">
                     <TableIcon />
                  </div>
                  <div>Table</div>
               </Button>
            </ToggleItem>
            <ToggleItem
               asChild
               value="growth"
               role="tab"
               tabIndex={0}
               aria-label="Growth by year view"
               aria-selected={isGrowthView}>
               <Button
                  onClick={() => handleViewClick('growth')}
                  onKeyDown={e => {
                     if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleViewClick('growth');
                     }
                  }}
                  title="Growth by year view"
                  className={clsx(
                     'flex items-center gap-2 rounded-md',
                     isGrowthView ? 'link-active' : 'link'
                  )}>
                  <div className="h-4 w-4">
                     <LineChartIcon />
                  </div>
                  <div>Growth</div>
               </Button>
            </ToggleItem>
            <ToggleItem
               asChild
               value="stack"
               role="tab"
               tabIndex={0}
               aria-label="Stack coverage view"
               aria-selected={isStackView}>
               <Button
                  onClick={() => handleViewClick('stack')}
                  onKeyDown={e => {
                     if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleViewClick('stack');
                     }
                  }}
                  title="Stack coverage view"
                  className={clsx(
                     'flex items-center gap-2 rounded-md',
                     isStackView ? 'link-active' : 'link'
                  )}>
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
