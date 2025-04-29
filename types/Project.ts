export interface BaseProject {
   name: string;
   year: string;
   type?: string;
}

export interface ModalProject extends BaseProject {
    description?: string;
    tech?: string[];
    liveLink?: string;
    codeLink?: string;
    moreInfoLink?: string;
    motivation?: string;
    outcome?: string;
    getModalImages?: () => Array<{
       name: string;
       caption: string;
       type: 'image' | 'video';
    }>;
 }