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

type ViewType = 'table' | 'grid' | 'growth' | 'stack';

interface SkillsViewToolbarProps {
   handleViewClick: (newView: ViewType) => void;
   selectedView: ViewType;
}

interface ViewItemProps {
   view: ViewType;
}

export default function SkillsViewToolbar({
   handleViewClick,
   selectedView
}: SkillsViewToolbarProps) {
   const ViewItem = ({ view }: ViewItemProps) => {
      const displayName = view.charAt(0).toUpperCase() + view.slice(1);
      const ariaLabel = displayName + ' view';
      const isSelected = selectedView === view;
      return (
         <ToggleItem
            asChild
            value={view}
            role="tab"
            tabIndex={0}
            aria-label={ariaLabel}
            aria-selected={isSelected}>
            <Button
               onClick={() => handleViewClick(view)}
               onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                     e.preventDefault();
                     handleViewClick(view);
                  }
               }}
               title={ariaLabel}
               className={clsx(
                  'flex items-center gap-2 rounded-md',
                  isSelected ? 'link-active' : 'link'
               )}>
               <div className="h-4 w-4">
                  {view === 'grid' && <GridIcon />}
                  {view === 'table' && <TableIcon />}
                  {view === 'growth' && <LineChartIcon />}
                  {view === 'stack' && <RadarChartIcon />}
               </div>
               <div>{displayName}</div>
            </Button>
         </ToggleItem>
      );
   };

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
            <ViewItem view="grid" />
            <ViewItem view="table" />
            <ViewItem view="growth" />
            <ViewItem view="stack" />
         </ToggleGroup>
      </Toolbar>
   );
}
