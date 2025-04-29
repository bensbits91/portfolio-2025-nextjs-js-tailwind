import { BaseProject as Project } from './Project';
import { BaseJob as Job } from './Job';

export interface BaseSkill {
   type: string;
   name: string;
   cloudinary?: string;
   years?: number;
   rating?: number;
}

export interface ModalSkill extends BaseSkill {
   getProjectsWithSkill?: () => Project[];
   getJobsWithSkill?: () => Job[];
}
