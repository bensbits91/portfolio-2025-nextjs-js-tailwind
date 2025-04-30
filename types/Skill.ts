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

export interface DefinitionSkill extends BaseSkill {
   stackArea?: string;
   stackCategory?: string;
   icon?: string;
   cloudinaryDark?: string;
   yearLearned?: number;
   haveUsedProfessionally: boolean;
   haveUsedForFun: boolean;
   featureOnHome: boolean;
   showInSkillsTable: boolean;
   featureInCTAs?: boolean;
   yearsSinceLearned?: number;
   getProjectsWithSkill?: () => Project[];
   getJobsWithSkill?: () => Job[];
}
