export interface BaseJob {
   role: string;
   company: string;
   start: string;
   end: string;
}

export interface BaseDuty {
   name: string;
   skillNames?: string[];
   description: string;
   moreInfo?: (string | string[])[];
   moreInfoLink?: {
      text: string;
      href: string;
   };
}

export interface HeaderJob extends BaseJob {
   location: string;
}

export interface DetailsJob extends BaseJob {
   location: string;
   duties: BaseDuty[];
}
