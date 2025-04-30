import dayjs from 'dayjs';

export const getYearsAndMonths = ({
   start,
   end
}: {
   start: string | Date;
   end: string | Date;
}) => {
   const startDate = dayjs(start);
   const endDate = end ? dayjs(end) : dayjs();
   const years = endDate.diff(startDate, 'year');
   const months = endDate.diff(startDate, 'month') % 12;
   return { years, months };
};
export const getPrettyDate = (date: string | Date) =>
   dayjs(date).format('MMM YYYY');

export const duration = (
   start: string | Date,
   end: string | Date,
   style?: string
) => {
   const { years, months } = getYearsAndMonths({ start, end });
   const prettyStart = getPrettyDate(start);
   const prettyEnd = end ? getPrettyDate(end) : 'Present';
   const prettyDate = `${prettyStart} to ${prettyEnd}`;
   const yoMo = `${years ? `${years} years ` : ''}${months} months`;
   const approxYears = `~ ${Math.round(years + months / 12)} years`;

   switch (style) {
      case 'pretty':
         return prettyDate;
      case 'yoMo':
         return yoMo;
      case 'approxYears':
         return approxYears;
      default:
         return `${prettyDate} (${yoMo})`;
   }
};

export const getYearsSince = (date: string | Date) => {
   const now = dayjs();
   const then = dayjs(date);
   const years = now.diff(then, 'year');
   // const months = now.diff(then, 'month') % 12;
   return years;
};
