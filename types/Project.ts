export interface BaseProject {
   name: string;
   year: string;
   type?: string;
}

export interface ProjectImage {
   name: string;
   caption?: string;
   type?: string;
   hideFromModal?: boolean;
   hideFromGridCard?: boolean;
   frame?: number;
}

export interface GridProject extends BaseProject {
   tech: string[];
   description: string;
   images: ProjectImage[];
   getFeaturedImage: () => {
      name: string;
      frame: string;
      hideFromGridCard?: boolean;
   };
}

export interface ModalProject extends BaseProject {
   description?: string;
   tech?: string[];
   liveLink?: string;
   codeLink?: string;
   moreInfoLink?: string;
   motivation?: string;
   outcome?: string;
   getModalImages?: () => ProjectImage[] | undefined;
}

export interface DefinitionProject extends ModalProject {
   images?: ProjectImage[];
   showInProjectsGallery?: boolean;
   featureOnHome?: boolean;
   getFeaturedImage?: () => ProjectImage | undefined;
}
