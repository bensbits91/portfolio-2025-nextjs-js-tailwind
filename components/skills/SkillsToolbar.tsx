import { useInView } from 'react-intersection-observer';
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
import { mainNavHeight } from '@/constants/layout';
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
   const { ref, inView } = useInView({
      threshold: 0,
      rootMargin: `-${mainNavHeight} 0px 0px 0px`, // adjust for main nav bar height
      initialInView: true
   });

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
                  'wcag-focus flex items-center gap-2 rounded-md',
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
      <>
         {/* Invisible placeholders that retain natural position and height for reliable observation */}
         <div ref={ref} />
         <div className={inView ? 'h-0' : 'h-12'} />
         <Toolbar
            orientation="horizontal"
            className={clsx(
               inView
                  ? 'w-full'
                  : `fixed left-3 right-3 top-[${mainNavHeight}] lg:left-8 lg:right-8`,
               'elevation-1 flex min-w-max items-center gap-4 rounded-md px-2 py-3 shadow-[-1px_4px_8px_0] sm:gap-8 sm:px-8'
            )}>
            <div className="hidden sm:block">View</div>
            <ToggleGroup
               type="single"
               defaultValue={'grid'}
               role="tablist"
               className="mx-2 flex items-center gap-4 md:gap-8">
               <ViewItem view="grid" />
               <ViewItem view="table" />
               <ViewItem view="growth" />
               <ViewItem view="stack" />
            </ToggleGroup>
         </Toolbar>
      </>
   );
}
