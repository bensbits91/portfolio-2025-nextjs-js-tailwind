export const makeKey = ({ str }: { str: string }) =>
   str.replace(/ /g, '-').toLowerCase();

export const truncateString = (str: string, num: number) => {
   if (str?.length <= num) {
      return { newString: str, wasTruncated: false };
   }
   return { newString: str.slice(0, num) + '...', wasTruncated: true };
};

export const replaceNonAphanumeric = (
   str: string,
   replacementChar: string = '-'
) =>
   str
      .replace(/[^a-zA-Z0-9-]/g, replacementChar) // Replace non-alphanumeric characters with the replacement character
      .replace(new RegExp(`${replacementChar}+`, 'g'), replacementChar) // Replace multiple replacement characters with a single one
      .replace(new RegExp(`^${replacementChar}|${replacementChar}$`, 'g'), '') // Remove leading and trailing replacement characters
      .toLowerCase();
