export const makeKey = ({ str }: { str: string }) =>
   str.replace(/ /g, '-').toLowerCase();

export const truncateString = (str: string, num: number) => {
   if (str?.length <= num) {
      return { newString: str, wasTruncated: false };
   }
   return { newString: str.slice(0, num) + '...', wasTruncated: true };
};
