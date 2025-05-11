import { experience } from '@/data/experience';
import { projects } from '@/data/projects';
import { getYearsSince } from '@/utils/date';
import { DefinitionSkill } from '@/types/Skill';

export const skills: DefinitionSkill[] = [
   {
      name: 'JavaScript',
      type: 'Language',
      stackArea: 'General',
      stackCategory: 'Language',
      iconName: 'JavaScriptIcon',
      cloudinary: 'js_au9kmj',
      cloudinaryDark: 'javascript-dark-icon_diwklq',
      yearLearned: 2013,
      years: 12,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
   },
   {
      name: 'React.js',
      type: 'Frontend Library',
      stackArea: 'Frontend',
      stackCategory: 'Library',
      iconName: 'ReactIcon',
      cloudinary: 'react_g4rwdx',
      cloudinaryDark: 'react-dark-icon_dibccl',
      yearLearned: 2015,
      years: 9,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
   },
   {
      name: 'Next.js',
      type: 'Frontend Framework',
      stackArea: 'Frontend',
      stackCategory: 'Framework',
      iconName: 'NextJsIcon',
      cloudinary: 'nextjs_jxdbqq',
      cloudinaryDark: 'next-dark-icon_qfvtkk',
      yearLearned: 2019,
      years: 4,
      rating: 9,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
   },
   {
      name: 'Vue.js',
      type: 'Frontend Framework',
      stackArea: 'Frontend',
      stackCategory: 'Framework',
      iconName: 'VueIcon',
      cloudinary: 'vue_thuhnk',
      cloudinaryDark: 'vue-dark-icon_xghpvp',
      yearLearned: 2021,
      years: 3,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
   },
   {
      name: 'Node.js',
      type: 'Backend Development',
      stackArea: 'Backend',
      stackCategory: 'Language',
      iconName: 'NodeIcon',
      cloudinary: 'node_hl58om',
      cloudinaryDark: 'node-dark-icon_kl7oy6',
      yearLearned: 2015,
      years: 9,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
   },
   {
      name: 'TypeScript',
      type: 'Language',
      stackArea: 'General',
      stackCategory: 'Language',
      iconName: 'TypeScriptIcon',
      cloudinary: 'ts1_nbdvxm',
      cloudinaryDark: 'typescript-dark-icon_mj51g8',
      yearLearned: 2015,
      years: 9,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
   },
   {
      name: 'Redux',
      type: 'State Management',
      stackArea: 'Frontend',
      stackCategory: 'Library',
      cloudinary: 'redux_vd28jd',
      yearLearned: 2019,
      years: 8,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      name: 'Zustand',
      type: 'State Management',
      stackArea: 'Frontend',
      stackCategory: 'Library',
      cloudinary: 'zustand_wrx1q3',
      yearLearned: 2024,
      years: 1,
      rating: 8,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      name: 'D3.js',
      type: 'Visualization',
      stackArea: 'Frontend',
      stackCategory: 'Library',
      cloudinary: 'd3js_eakt6f',
      yearLearned: 2013,
      years: 8,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      name: 'React Simple Maps',
      type: 'Visualization',
      stackArea: 'Frontend',
      stackCategory: 'Library',
      cloudinary: 'react-simple-maps_xvvujp',
      yearLearned: 2013,
      years: 8,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'CSS',
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      cloudinary: 'css3_mvgbbf',
      iconName: 'CssIcon',
      yearLearned: 2004,
      years: 12,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'CSS Modules',
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      cloudinary: 'css3_mvgbbf',
      iconName: 'CSSModluesIcon',
      cloudinaryDark: 'css3-dark-icon_xtdb3t',
      yearLearned: 2015,
      years: 8,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
   },
   {
      name: 'Sass/SCSS',
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      iconName: 'SassIcon',
      cloudinary: 'sass_s3kz3x',
      cloudinaryDark: 'sass-dark-icon_h3esvt',
      yearLearned: 2015,
      years: 8,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
   },
   {
      name: 'Tailwind',
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      cloudinary: 'tailwind_k9r34s',
      iconName: 'TailwindIcon',
      cloudinaryDark: 'tailwind-dark-icon_mbvvtr',
      yearLearned: 2019,
      years: 4,
      rating: 9,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
   },
   {
      name: 'JSS',
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      cloudinary: 'jss_zewece',
      yearLearned: 2016,
      years: 8,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: false
   },
   {
      name: 'Styled Components',
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      iconName: 'StyledComponentsIcon',
      cloudinary: 'styled-components_fd8fvo',
      cloudinaryDark: 'styled-components-dark-icon_fs0kmr',
      yearLearned: 2016,
      years: 8,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
   },
   {
      name: 'Panda CSS',
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      cloudinary: 'panda-css_av1hkt',
      yearLearned: 2025,
      years: 1,
      rating: 9,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: false
   },
   {
      name: 'Responsive Design',
      type: 'UI/UX',
      stackArea: 'Frontend',
      stackCategory: 'UI/UX',
      cloudinary: 'rwd_o9z8s0',
      iconName: 'ResponsiveDesignIcon',
      yearLearned: 2007,
      years: 11,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      name: 'A/B Testing',
      type: 'UI/UX',
      stackArea: 'Experimentation & Optiminzation',
      stackCategory: '',
      iconName: 'BeakerIcon',
      cloudinary: 'beaker_vqshpg',
      yearLearned: 2010,
      years: 3,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      name: 'Experimentation',
      type: 'UI/UX',
      stackArea: 'Experimentation & Optiminzation',
      stackCategory: '',
      iconName: 'ExperimentIcon',
      cloudinary: 'beakers_yellow_eehkpx',
      yearLearned: 2022,
      years: 3,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      name: 'LaunchDarkly',
      type: 'UI/UX',
      stackArea: 'Experimentation & Optiminzation',
      stackCategory: '',
      iconName: 'LaunchDarklyIcon',
      cloudinary: 'launchdarkly_kdznir',
      yearLearned: 2022,
      years: 3,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      name: 'Webpack',
      type: 'Build Tools',
      stackArea: 'Build & Testing Tools',
      stackCategory: 'Build Tools',
      cloudinary: 'webpack_ycdnkv',
      yearLearned: 2015,
      years: 7,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'Turbopack',
      type: 'Build Tools',
      stackArea: 'Build & Testing Tools',
      stackCategory: 'Build Tools',
      cloudinary: 'turbopack_gvkvbu',
      yearLearned: 2024,
      years: 1,
      rating: 7,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'Parcel',
      type: 'Build Tools',
      stackArea: 'Build & Testing Tools',
      stackCategory: 'Build Tools',
      cloudinary: 'parcel_ik2cum',
      yearLearned: 2024,
      years: 1,
      rating: 7,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: false
   },
   {
      name: 'Jest',
      type: 'Testing',
      stackArea: 'Build & Testing Tools',
      stackCategory: 'Testing',
      cloudinary: 'jest_djvbcr',
      yearLearned: 2022,
      years: 3,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'Cypress',
      type: 'Testing',
      stackArea: 'Build & Testing Tools',
      stackCategory: 'Testing',
      cloudinary: 'cypress_ihahr3',
      iconName: 'CypressIcon',
      yearLearned: 2021,
      years: 1,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'PHP',
      type: 'Backend Development',
      stackArea: 'Backend',
      stackCategory: 'Language',
      iconName: 'PhpIcon',
      cloudinary: 'php-icon_apfbnf',
      cloudinaryDark: 'php01-dark-icon_fzefry',
      yearLearned: 2013,
      years: 9,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
   },
   {
      name: 'WordPress',
      type: 'Backend Development',
      stackArea: 'General',
      stackCategory: 'Content Management',
      iconName: 'WordpressIcon',
      cloudinary: 'wordpress_xkgfcd',
      cloudinaryDark: 'wordpress-dark-icon_volzbh',
      yearLearned: 2013,
      years: 9,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
   },
   {
      name: 'Python',
      type: 'Backend Development',
      stackArea: 'Backend',
      stackCategory: 'Language',
      iconName: 'PythonIcon',
      cloudinary: 'python_g5utim',
      cloudinaryDark: 'python-dark-icon_ogismc',
      yearLearned: 2021,
      years: 3,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
   },
   {
      name: 'Express',
      type: 'Backend Framework',
      stackArea: 'Backend',
      stackCategory: 'Framework',
      cloudinary: 'express_bqzgin',
      iconName: 'ExpressIcon',
      yearLearned: 2015,
      years: 9,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      name: 'Fastify',
      type: 'Backend Framework',
      stackArea: 'Backend',
      stackCategory: 'Framework',
      cloudinary: 'fastify_zy8jul',
      iconName: 'FastifyIcon',
      yearLearned: 2023,
      years: 2,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      name: 'Django',
      type: 'Backend Framework',
      stackArea: 'Backend',
      stackCategory: 'Framework',
      cloudinary: 'django_yilgyq',
      yearLearned: 2020,
      years: 2,
      rating: 4,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'MongoDB',
      type: 'Database',
      stackArea: 'Data Storage & Databases',
      stackCategory: 'NoSQL',
      cloudinary: 'mongodb_kv7lxz',
      yearLearned: 2020,
      years: 3,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      name: 'PostgreSQL',
      type: 'Database',
      stackArea: 'Data Storage & Databases',
      stackCategory: 'SQL',
      cloudinary: 'postgresql_dx4o4h',
      yearLearned: 2019,
      years: 5,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      name: 'SQL',
      type: 'Database',
      stackArea: 'Data Storage & Databases',
      stackCategory: 'SQL',
      cloudinary: 'sql_dxvo6o',
      yearLearned: 2007,
      years: 10,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'RESTful APIs',
      type: 'APIs',
      stackArea: 'Backend',
      stackCategory: 'API Design & Development',
      cloudinary: 'rest_vt3dwy',
      iconName: 'RestApiIcon',
      yearLearned: 2007,
      years: 12,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      name: 'GraphQL',
      type: 'APIs',
      stackArea: 'Backend',
      stackCategory: 'API Design & Development',
      cloudinary: 'graphql_ztconi',
      yearLearned: 2019,
      years: 5,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      name: 'Microservices',
      type: 'Architecture',
      stackArea: 'Architecture & Patterns',
      stackCategory: '',
      iconName: 'MicroservicesIcon',
      cloudinary: 'microservice_xcczrj',
      yearLearned: 2022,
      years: 2,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'Micro-frontends',
      type: 'Architecture',
      stackArea: 'Architecture & Patterns',
      stackCategory: '',
      iconName: 'MicroFrontendsIcon',
      cloudinary: 'micro-frontend_sx9fbr',
      yearLearned: 2022,
      years: 2,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'GCP',
      type: 'Cloud Platform',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Cloud Platforms',
      cloudinary: 'gcp_h0xhhn',
      yearLearned: 2021,
      years: 3,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'GKE',
      type: 'Cloud Platform',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Cloud Platforms',
      cloudinary: 'gke_dwffq2',
      yearLearned: 2021,
      years: 3,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'AWS',
      type: 'Cloud Platform',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Cloud Platforms',
      cloudinary: 'aws_ntzjf4',
      iconName: 'AwsIcon',
      yearLearned: 2018,
      years: 2,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'Docker',
      type: 'Containerization',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Containerization & Orchestration',
      cloudinary: 'docker_fx1vot',
      yearLearned: 2021,
      years: 4,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'Colima',
      type: 'Containerization',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Containerization & Orchestration',
      cloudinary: 'colima-no-bg_t4awkl',
      yearLearned: 2023,
      years: 2,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: false
   },
   {
      name: 'Kubernetes',
      type: 'Infrastructure Orchestration',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Containerization & Orchestration',
      cloudinary: 'kubernetes_z2x5da',
      yearLearned: 2021,
      years: 3,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'Helm',
      type: 'Infrastructure Orchestration',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Containerization & Orchestration',
      cloudinary: 'helm_nqdtj8',
      yearLearned: 2022,
      years: 3,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      name: 'Terraform',
      type: 'Infrastructure Orchestration',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Infrastructure as Code',
      cloudinary: 'terraform_elhgrr',
      yearLearned: 2022,
      years: 3,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   }
];

export const homeSkills = skills
   .filter(skill => skill.featureOnHome === true)
   .map(skill => skill.name);

export const ctaSkills = skills
   .filter(skill => skill.featureInCTAs === true)
   .map(skill => skill.name);

export const skillsForTable = skills
   .filter(skill => skill.showInSkillsTable === true)
   .sort((a, b) => {
      if (a.rating && b.rating && b.rating !== a.rating) {
         return b.rating - a.rating; // Sort by rating first
      }
      if (a.years && b.years && b.years !== a.years) {
         return b.years - a.years; // If ratings are equal, sort by years
      }
      return 1;
   });

const yearsSinceLearned = function (yearLearned: number) {
   const yearWithMonth = `${yearLearned}-01`;
   return getYearsSince(yearWithMonth);
};

function getJobsWithSkill(skillName: string) {
   return experience.filter(job =>
      job.duties.some(duty => 'skillNames' in duty && duty.skillNames?.includes(skillName))
   );
}

function getProjectsWithSkill(skillName: string) {
   return projects.filter(project => project.tech?.includes(skillName));
}

skills.forEach(skill => {
   skill.yearsSinceLearned = skill.yearLearned
      ? yearsSinceLearned(skill.yearLearned)
      : undefined;
   skill.getJobsWithSkill = () => getJobsWithSkill(skill.name); // Use as a shared function
   skill.getProjectsWithSkill = () => getProjectsWithSkill(skill.name);
});

export const skillIcon = skills.map(skill => skill.cloudinary);
export const skillIcons = (skillNames: string[] = [], dark = false) => {
   return skills
      .filter(skill => skillNames.includes(skill.name))
      .map(skill => ({
         src: dark
            ? skill.cloudinaryDark || skill.cloudinary
            : skill.cloudinary,
         iconName: skill.iconName || undefined,
         altText: skill.name
      }));
};
