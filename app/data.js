import { getYearsSince } from './utils';

export const about = {
   firstName: 'Bennett',
   lastName: 'Brooks',
   preferredName: 'Ben',
   title: 'Software Engineer',
   otherTitles: ['Web Developer', 'Full-Stack Developer', 'Frontend Developer'],
   location: 'Portland, Oregon',
   summary:
      'Experienced and versatile software engineer with a front-end leaning, full-stack background.',
   overview:
      'Experienced and versatile software engineer with a front-end leaning, full-stack background and a passion for continuous improvement. Known for clear communication, empathy, and a big-picture mindset, I thrive as a dedicated team player and contributor. With leadership experience and a love for mentoring, I bring a growth-oriented approach to any engineering role, always eager to learn, support others, and deliver impactful solutions.'
};
export const expertise = [
   'Front-End + Full-Stack',
   'Responsive Design',
   'Scalable & Accessible UI',
   'Pixel-Perfect Implementation',
   'SEO & Performance Optimization',
   'Microservices & APIs',
   'A/B Testing & Experimentation',
   'Monitoring & Observability',
   'Process Improvement & Technical Leadership',
   'Mentoring & Team Development',
   'Cloud Infrastructure & CI/CD'
];
export const skills = [
   {
      type: 'Language',
      stackArea: 'General',
      stackCategory: 'Language',
      name: 'JavaScript',
      icon: '/js.svg',
      cloudinary: 'js_au9kmj',
      yearLearned: 2013,
      years: 12,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'Language',
      stackArea: 'General',
      stackCategory: 'Language',
      name: 'TypeScript',
      icon: '/ts1.svg',
      cloudinary: 'ts1_nbdvxm',
      yearLearned: 2015,
      years: 8,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'Frontend Library',
      stackArea: 'Frontend',
      stackCategory: 'Library',
      name: 'React.js',
      icon: '/react.svg',
      cloudinary: 'react_g4rwdx',
      yearLearned: 2015,
      years: 9,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'Frontend Framework',
      stackArea: 'Frontend',
      stackCategory: 'Framework',
      name: 'Vue.js',
      icon: '/vue.svg',
      cloudinary: 'vue_thuhnk',
      yearLearned: 2021,
      years: 3,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'Frontend Framework',
      stackArea: 'Frontend',
      stackCategory: 'Framework',
      name: 'Next.js',
      icon: '/next.svg',
      cloudinary: 'nextjs_jxdbqq',
      yearLearned: 2020,
      years: 2,
      rating: 9,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'State Management',
      stackArea: 'Frontend',
      stackCategory: 'Library',
      name: 'Redux',
      icon: '/redux.svg',
      cloudinary: 'redux_vd28jd',
      yearLearned: 2019,
      years: 8,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Visualization',
      stackArea: 'Frontend',
      stackCategory: 'Library',
      name: 'D3.js',
      cloudinary: 'd3js_eakt6f',
      yearLearned: 2013,
      years: 8,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Visualization',
      stackArea: 'Frontend',
      stackCategory: 'Library',
      name: 'React Simple Maps',
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
      type: 'State Management',
      stackArea: 'Frontend',
      stackCategory: 'Library',
      name: 'Zustand',
      icon: '/react.svg',
      cloudinary: 'zustand_wrx1q3',
      yearLearned: 2024,
      years: 1,
      rating: 8,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      name: 'CSS',
      icon: '/css3.svg',
      cloudinary: 'css3_mvgbbf',
      yearLearned: 2004,
      years: 12,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      name: 'CSS Modules',
      icon: '/sass.svg',
      cloudinary: 'css3_mvgbbf',
      yearLearned: 2015,
      years: 8,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      name: 'Sass/SCSS',
      icon: '/sass.svg',
      cloudinary: 'sass_s3kz3x',
      yearLearned: 2015,
      years: 8,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      name: 'Tailwind',
      icon: '/tailwind.svg',
      cloudinary: 'tailwind_k9r34s',
      yearLearned: 2020,
      years: 2,
      rating: 9,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      name: 'JSS',
      icon: '/jss.svg',
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
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      name: 'Styled Components',
      icon: '/styled-components.svg',
      cloudinary: 'styled-components_fd8fvo',
      yearLearned: 2016,
      years: 8,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      name: 'Panda CSS',
      icon: '/react.svg',
      cloudinary: 'panda-css_av1hkt',
      yearLearned: 2025,
      years: 1,
      rating: 9,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'UI/UX',
      stackArea: 'Frontend',
      stackCategory: 'UI/UX',
      name: 'Responsive Design',
      icon: '/rwd.svg',
      cloudinary: 'rwd_o9z8s0',
      yearLearned: 2007,
      years: 11,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'UI/UX',
      stackArea: 'Experimentation & Optiminzation',
      stackCategory: '',
      name: 'A/B Testing',
      icon: '/beaker.svg',
      cloudinary: 'beaker_vqshpg',
      yearLearned: 2010,
      years: 3,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'UI/UX',
      stackArea: 'Experimentation & Optiminzation',
      stackCategory: '',
      name: 'Multivariate Experimentation',
      icon: '/beaker1.svg',
      cloudinary: 'beakers_yellow_eehkpx',
      yearLearned: 2022,
      years: 3,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'UI/UX',
      stackArea: 'Experimentation & Optiminzation',
      stackCategory: '',
      name: 'LaunchDarkly',
      icon: '/launchdarkly.svg',
      cloudinary: 'launchdarkly_kdznir',
      yearLearned: 2022,
      years: 3,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Build Tools',
      stackArea: 'Build & Testing Tools',
      stackCategory: 'Build Tools',
      name: 'Webpack',
      icon: '/webpack.svg',
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
      type: 'Build Tools',
      stackArea: 'Build & Testing Tools',
      stackCategory: 'Build Tools',
      name: 'Turbopack',
      icon: '/turbopack.svg',
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
      type: 'Build Tools',
      stackArea: 'Build & Testing Tools',
      stackCategory: 'Build Tools',
      name: 'Parcel',
      icon: '/parcel.svg',
      cloudinary: 'parcel_ik2cum',
      yearLearned: 2024,
      years: 1,
      rating: 7,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Testing',
      stackArea: 'Build & Testing Tools',
      stackCategory: 'Testing',
      name: 'Jest',
      icon: '/jest.svg',
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
      type: 'Testing',
      stackArea: 'Build & Testing Tools',
      stackCategory: 'Testing',
      name: 'Cypress',
      icon: '/cypress.svg',
      cloudinary: 'cypress_ihahr3',
      yearLearned: 2021,
      years: 1,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Backend Development',
      stackArea: 'Backend',
      stackCategory: 'Language',
      name: 'NodeJS',
      icon: '/node.svg',
      cloudinary: 'node_hl58om',
      yearLearned: 2015,
      years: 9,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'Backend Development',
      stackArea: 'Backend',
      stackCategory: 'Language',
      name: 'PHP',
      icon: '/php.svg',
      cloudinary: 'php_hylcjn',
      yearLearned: 2013,
      years: 9,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Backend Development',
      stackArea: 'General',
      stackCategory: 'Content Management',
      name: 'WordPress',
      icon: '/wordpress.svg',
      cloudinary: 'wordpress_xkgfcd',
      yearLearned: 2013,
      years: 9,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Backend Development',
      stackArea: 'Backend',
      stackCategory: 'Language',
      name: 'Python',
      icon: '/python.svg',
      cloudinary: 'python_g5utim',
      yearLearned: 2021,
      years: 3,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Backend Framework',
      stackArea: 'Backend',
      stackCategory: 'Framework',
      name: 'Express',
      icon: '/express.svg',
      cloudinary: 'express_bqzgin',
      yearLearned: 2015,
      years: 9,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Backend Framework',
      stackArea: 'Backend',
      stackCategory: 'Framework',
      name: 'Fastify',
      icon: '/fastify.svg',
      cloudinary: 'fastify_zy8jul',
      yearLearned: 2023,
      years: 2,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Backend Framework',
      stackArea: 'Backend',
      stackCategory: 'Framework',
      name: 'Django',
      icon: '/django.svg',
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
      type: 'Database',
      stackArea: 'Data Storage & Databases',
      stackCategory: 'NoSQL',
      name: 'MongoDB',
      icon: '/mongodb.svg',
      cloudinary: 'mongodb_kv7lxz',
      yearLearned: 2020,
      years: 3,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Database',
      stackArea: 'Data Storage & Databases',
      stackCategory: 'SQL',
      name: 'PostgreSQL',
      icon: '/postgresql.svg',
      cloudinary: 'postgresql_dx4o4h',
      yearLearned: 2020,
      years: 5,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Database',
      stackArea: 'Data Storage & Databases',
      stackCategory: 'SQL',
      name: 'SQL',
      icon: '/sql.svg',
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
      type: 'APIs',
      stackArea: 'Backend',
      stackCategory: 'API Design & Development',
      name: 'RESTful APIs',
      icon: '/rest.svg',
      cloudinary: 'rest_vt3dwy',
      yearLearned: 2007,
      years: 12,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'APIs',
      stackArea: 'Backend',
      stackCategory: 'API Design & Development',
      name: 'GraphQL',
      icon: '/graphql.svg',
      cloudinary: 'graphql_ztconi',
      yearLearned: 2020,
      years: 4,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Architecture',
      stackArea: 'Architecture & Patterns',
      stackCategory: '',
      name: 'Microservices',
      icon: '/microservice.svg',
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
      type: 'Architecture',
      stackArea: 'Architecture & Patterns',
      stackCategory: '',
      name: 'Micro-frontends',
      icon: '/micro-frontend.svg',
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
      type: 'Cloud Platform',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Cloud Platforms',
      name: 'GCP',
      icon: '/gcp.svg',
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
      type: 'Cloud Platform',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Cloud Platforms',
      name: 'GKE',
      icon: '/gke.svg',
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
      type: 'Cloud Platform',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Cloud Platforms',
      name: 'AWS',
      icon: '/aws.svg',
      cloudinary: 'aws_ntzjf4',
      yearLearned: 2018,
      years: 2,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Containerization',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Containerization & Orchestration',
      name: 'Docker',
      icon: '/docker.svg',
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
      type: 'Containerization',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Containerization & Orchestration',
      name: 'Colima',
      icon: '/colima-no-bg.png',
      cloudinary: 'colima-no-bg_t4awkl',
      yearLearned: 2023,
      years: 2,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Infrastructure Orchestration',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Containerization & Orchestration',
      name: 'Kubernetes',
      icon: '/kubernetes.svg',
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
      type: 'Infrastructure Orchestration',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Containerization & Orchestration',
      name: 'Helm',
      icon: '/helm.svg',
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
      type: 'Infrastructure Orchestration',
      stackArea: 'DevOps & Cloud Infrastructure',
      stackCategory: 'Infrastructure as Code',
      name: 'Terraform',
      icon: '/terraform.svg',
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
export const experience = [
   {
      role: 'Staff Full-Stack Engineer',
      company: 'ZenBusiness',
      location: 'Austin, TX (Remote)',
      start: '2021-02',
      end: '2024-12',
      duties: [
         {
            name: 'UI Development & Integration',
            description:
               'Built and maintained UI features across various repositories, including React/Redux/Styled Components and Vue.js/Vuex/CSS Modules. Developed interactive components to facilitate seamless user data collection and request submission to backend services.',
            skillNames: [
               'JavaScript',
               'NodeJS',
               'React.js',
               'Vue.js',
               'CSS',
               'Styled Components',
               'Jest',
               'Cypress',
               'A/B Testing',
               'Multivariate Experimentation',
               'LaunchDarkly'
            ]
         },
         {
            name: 'Public Website',
            description:
               "Enhanced the company's public website using WordPress, PHP, CSS/SASS, and JavaScript. Supported the shift to a page-speed-based SEO strategy, collaborating with the SEO Team to meet performance targets (e.g. TTFB, LCP, CLS). Vastly improved page speed. Optimized code organization and performance. Planned, implemented, documented and supported an atomic component structure, facilitating quick and consistent development.",
            moreInfoLink: {
               href: '/experience/zb-seo',
               text: 'Read more about optimizing the website...'
            },
            skillNames: [
               'WordPress',
               'PHP',
               'CSS',
               'Sass/SCSS',
               'JavaScript',
               'Responsive Design',
               'SEO',
               'Performance Optimization',
               'A/B Testing',
               'Multivariate Experimentation',
               'LaunchDarkly'
            ]
         },
         {
            name: 'Microservices & APIs',
            description:
               'Built and maintained scalable microservices to enhance functionality and replace monolithic components. Leveraged technologies like Node.js, Fastify, JavaScript, JSON, XML, and Jest for development and testing. Integrated logging and monitoring in GCP to ensure system reliability. Led the development of a critical microservice that automated data submissions to a federal API. Developed robust solutions for data validation, format conversion (JSON to XML), and secure handling of Personally Identifiable Information (PII) using a proxy to process sensitive data.',
            skillNames: [
               'JavaScript',
               'NodeJS',
               'Fastify',
               'Python',
               'Jest',
               'Microservices',
               'GCP',
               'Docker',
               'Colima',
               'Kubernetes',
               'Terraform'
            ]
         },
         {
            name: 'Experimentation',
            description:
               'Led planning, building, tracking, and reporting on A/B and multivariate tests. Collaborated with Design and Product teams to develop hypotheses, define metrics, and design variants. Built variants. Worked with Data teams to analyze and present results. Partnered with stakeholders to confirm winners, implement solutions, and plan follow-up tests. Mentored senior engineers on testing and coding practices. Facilitated the transition to LaunchDarkly as our needs became too complex for Google Optimize. Trained other teams and presented to stakeholders regarding experimentation and LaunchDarkly. Acquired LaunchDarkly Gold Certification and provided ongoing support.',
            skillNames: [
               'A/B Testing',
               'Multivariate Experimentation',
               'LaunchDarkly',
               'JavaScript',
               'React.js',
               'Vue.js',
               'PHP',
               'CSS',
               'Sass/SCSS',
               'Styled Components',
               'Responsive Design'
            ]
         },
         {
            name: 'Mentoring & Leadership',
            description:
               'Defined technical requirements, collaborated with Product and Design teams, and led story mapping sessions. Provided technical guidance throughout the development lifecycle and represented the team in cross-functional meetings. Mentored junior and senior engineers, fostering a culture of growth and learning. Improved coding and logging standards, ensuring clean, maintainable code across projects. Managed projects from technical scoping to deployment and user support, ensuring delivery of high-quality features aligned with business goals.'
         },
         {
            name: 'Developer Support',
            description:
               'Supported developers. Administered developer tools, such as Auth0, Twilio, and Mailchimp. Contributed to API abstractions and CI/CD tools. Helped build a centralized event distributor using Pub/Sub.'
         }
      ],
      skills: [
         'JavaScript',
         'TypeScript',
         'React.js',
         'Vue.js',
         'Next.js',
         'Redux',
         'Thunk',
         'CSS',
         'SCSS',
         'Sass',
         'Tailwind',
         'JSS',
         'Styled Components',
         'Responsive Design',
         'A/B and multivariate testing',
         'LaunchDarkly',
         'Google Optimize',
         'Webpack',
         'Turbopack',
         'Parcel',
         'Jest',
         'Cypress',
         'NodeJS',
         'PHP',
         'WordPress',
         'Python',
         'Express',
         'Fastify',
         'Django',
         'MongoDB',
         'PostgreSQL',
         'SQL',
         'RESTful APIs',
         'GraphQL',
         'Microservices',
         'micro-frontends',
         'GCP',
         'GKE',
         'AWS',
         'Docker',
         'Colima',
         'Kubernetes',
         'Helm',
         'Terraform'
      ]
   },
   {
      role: 'Owner & Lead Engineer',
      company: 'NuTandem',
      location: 'Portland, OR',
      start: '2013-05',
      end: '2021-12',
      duties: [
         {
            name: 'App Development',
            description:
               'Built and oversaw business operations and projects. Developed hundreds of custom SPAs using Node, React, JavaScript and CSS. Built a library of reusable components to speed delivery of custom applications.',
            skillNames: [
               'JavaScript',
               'NodeJS',
               'React.js',
               'D3.js',
               'CSS Modules',
               'Styled Components',
               'Responsive Design'
            ]
         },
         {
            name: 'Web Development, SEO & Optimization',
            description:
               'Designed and built our company website with WordPress, PHP, JavaScript including custom templates, menus, and widgets, to facilitate frequent updates. Led SEO, marketing and sales efforts.',
            skillNames: [
               'WordPress',
               'PHP',
               'JavaScript',
               'SEO',
               'Performance Optimization'
            ]
         },
         {
            name: 'Everything Else',
            description:
               'Established and maintained relationships with over 50 organizations including state and federal agencies, restaurants like Sizzler and Outback, universities, and large corporations like Unilever.'
         }
      ]
   },
   {
      role: 'Systems Manager & Vice President',
      company: 'GL Solutions',
      location: 'Bend, OR',
      start: '2006-07',
      end: '2013-05',
      duties: [
         {
            name: 'Systems Manager',
            description:
               'Re-engineered processes and tools across the organization. Improved efficiency, accuracy, customer satisfaction and employee engagement, and usability and adoption for internal software tools. Defined SCAS, KPIs, and team metrics. Implemented a continuous improvement initiative, empowering employees to actively participate in evolving the organization. Provided custom software, documentation, training, and support.'
         },
         {
            name: 'Vice President of Business Solutions',
            description:
               'Integrated customer service, sales, and marketing teams into a cohesive Business Solutions Department. Re-engineered processes and tools to better utilize talent and experience. Worked directly with customers to increase engagement. Facilitated idea sharing and built a customer community. Conducted stakeholder and SME interviews, documented requirements, and produced software specifications. Authored and maintained technical content, and improved documentation standards.'
         }
      ]
   },
   {
      role: 'Technical Documentation Specialist',
      company: 'I/O Software',
      location: 'Riverside, CA',
      start: '2002-03',
      end: '2006-07',
      duties: [
         {
            name: '',
            description:
               'Produced technical documentation for end users and internal users, including user guides, in-app help systems, and hundreds of technical articles. Interviewed developers and other stakeholders. Contributed to cryptographic patent applications with research, mathematical consultation, and diagrams.'
         }
      ]
   }
];
export const projects = [
   {
      name: 'My Contracting Website',
      year: '2025',
      tech: [
         'Next.js',
         'React.js',
         'JavaScript',
         'CSS Modules',
         'NodeJS',
         'nodemailer',
         'Turbopack',
         'Vercel',
         'Cloudinary',
         'Mongoose',
         'MongoDB'
      ],
      liveLink: 'https://www.benbdev.com',
      codeLink: 'https://github.com/bensbits91/contracts-website',
      description: 'My website that helps find and manage my clients.',
      motivation:
         'To help my clients understand tech, plan projects and ask questions. To help me manage my clients and projects. To practice some skills.',
      outcome:
         'A clean, responsive, and accessible website that meets my needs and is easy to update and maintain. Hosted on Vercel with a custom domain benbdev.com. Static content stored as markdown (.md) files, rendered in server components using react-markdown and in client components using markdown-to-jsx. Dynamic content stored as JSON.',
      images: [
         { name: 'contracts-quote_nfli3y' },
         { name: 'contracts-faq_mya3pz' },
         { name: 'contracts-home_mpofmm' }
      ],
      showInProjectsGallery: true,
      featureOnHome: true
   },
   {
      name: 'This Website',
      year: '2025',
      tech: [
         'Next.js',
         'React.js',
         'JavaScript',
         'D3.js',
         'Tailwind',
         'NodeJS',
         'nodemailer',
         'dayjs',
         'Turbopack',
         'Vercel',
         'Cloudinary'
      ],
      codeLink:
         'https://github.com/bensbits91/portfolio-2025-nextjs-js-tailwind',
      description:
         "My personal website, built in about a week... custom components and theme... atomic component structure, including custom typography and layout... minimal dependencies... content stored as JSON inside the project... a few li'l custom animations and transitions... images stored in cloudinary and optimized using next/image... videos stored using Vercel Blob storage... contact form sends email using nodemailer... api routes for contact form and image/video storage... Turbopack for faster page loads... dayjs for date formatting... Tailwind CSS for styling... Next.js for SSR and SSG... Vercel for auto-deployment from GitHub...",
      motivation:
         'To showcase my skills and experience. To brush the rust off some of my front-end skills.',
      outcome:
         'A clean, responsive, and accessible website that showcases my skills and experience. Fun excerise.',
      images: [{ name: 'this-site_pyfjwv' }],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Things App v1.0',
      year: '2025',
      tech: [
         'React.js',
         'JavaScript',
         'Redux',
         'Styled Components',
         'Prime React',
         'NodeJS',
         'Fastify',
         'Mongoose',
         'MongoDB'
      ],
      codeLink: 'https://github.com/bensbits91/primereact-test-01',
      description:
         "Add, rate and track anything... Integrates with multiple third-party APIs to find and display information about supported types (currently books, TV shows, movies and video games)... I'll be adding more types soon... Ability to export your Things to CSV. Built entirely using free tech so far (third-party APIs, Mongo Atlas...)... Built in about two weeks so far. Still kinda ugly :/",
      motivation:
         "To practices some skills. To build something that I can use (an idea I've had for awhile). Hope to make an app available to others someday. Users will be able to log in (probably using auth0, including support for social auth), manage a profile and share their interests with others. Get recommendations on things you might like. Eventually find people with similar interests.",
      outcome: 'WIP, super fun so far',
      images: [
         {
            name: 'things-app-search-save-3a4zDc6ssBNHkL9x1Q1Ee0MBBnIzHM.mp4',
            type: 'video'
         },
         {
            name: 'things-sort-export-trimmed-p3sKqPpzhmwOd18Nj7nizb6YfVBvTh.mp4',
            type: 'video'
         },
         { name: 'things_w7q8lq', hideFromModal: true },
         { name: 'things-detail_mqkcqy' }
      ],
      showInProjectsGallery: true,
      featureOnHome: true
   },
   {
      name: 'Dashboard Widgets',
      year: '2021',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'React Simple Maps',
         'Recharts',
         'D3.js',
         'Fabric UI',
         'Sass/SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/goal-tracker',
      description:
         'Reusable animated widgets for building dynamic pages and dashboards. Minimal style so they can be easily customized.',
      motivation: 'Provide reusable widgets to clients.',
      outcome: 'Very popular among clients. Easy to customize and use.',
      images: [
         {
            name: 'sharepoint-assessment-checklist-listview-still_50_eyxmcn',
            hideFromModal: true
         },
         {
            name: 'dashboard-widgets-f8sx586nmqQSXKynsHJSn53TWch3sC.mp4',
            type: 'video'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: true
   },
   {
      name: 'Radial Progress Bar',
      year: '2020',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Recharts',
         'D3.js',
         'Sass/SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: '',
      description:
         'Reusable animated radial charts to enhance pages and dashboards. Minimal style so they can be easily customized.',
      motivation: 'Provide a visually-appealing reusable widget to clients.',
      outcome: 'Very popular among clients. Easy to customize and use.',
      images: [
         {
            name: 'sharepoint-goal-tracker-multiple-dark_dblqv0',
            hideFromModal: true
         },
         {
            name: 'goal-tracker-dark-FF6p2xvEaXGrp7vOy5c3YHzmGflN4u.mp4',
            type: 'video'
         },
         {
            name: 'goal-tracker-light-HW77LDzOLYRWS1SIX589eb8B5WVbms.mp4',
            type: 'video'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: true
   },
   {
      name: 'Geodata',
      year: '2020',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'React Simple Maps',
         'Recharts',
         'D3.js',
         'Sass/SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/map-demo',
      description:
         'Ability to display geodata on a map. Customizable display of data points and regions. Clickable data points to present more informaiton.',
      motivation:
         'Provide geodata visualization for clients... plug into existing apps. Pracitce handling geodata and visualization.',
      outcome: 'Purchased by a few clients. Easy to customize and use.',
      images: [
         { name: 'sharepoint-franchise-map_crr8ou', hideFromModal: true },
         {
            name: 'map-based-data-KFOSSvaGa1LwHYTcgO8lHm5DukE33l.mp4',
            type: 'video'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Weather Widget',
      year: '2020',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'moment.js',
         'Sass/SCSS',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/weather-widget',
      description:
         'Classy animated weaher widget. Easy to customize and use. Can auto-detect location or be set manually.',
      motivation:
         'Provide weather data in a visually-appealing way to enhance pages and dashboards.',
      outcome: 'Moderately popular among clients. Easy to customize and use.',
      images: [
         {
            name: 'sharepoint-weather-widget-onecard-dark-orange_vzn4uf',
            hideFromModal: true
         },
         {
            name: 'weather-widget-dark-orange-5w6Os9Ev2FI5ran2QB1UHEQPRf6ucR.mp4',
            type: 'video'
         },
         {
            name: 'weather-widget-light-black-13mowkkWY1N3q22bMe1ksNRZ2CzFps.mp4',
            type: 'video'
         },
         {
            name: 'weather-widget-dark-blue-tTdDa07yqLCJuyFohA1e6Sh5HyH3vg.mp4',
            type: 'video'
         },
         {
            name: 'weather-widget-light-red-tBoTEFmWXQVAncd0A46lG1BPwXFYrT.mp4',
            type: 'video'
         },
         {
            name: 'weather-widget-light-vertical-Ez8UYrqwWQQlRKBaDIeIwxLVQfPpjS.mp4',
            type: 'video'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: true
   },
   {
      name: 'Org Chart',
      year: '2021',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'React Org Chart',
         'React Treebeard',
         'Sass/SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/org-chart-2021',
      description:
         "Present your organization's heirarchy and contact information in a visually-appealing way. Automatically pulls data from an existing directory. Easy to customize and use.",
      motivation:
         "Provide clients with a visually-appealing way to display their organization's heirarchy and contact information.",
      outcome: 'Moderalty popular among clients. Easy to customize and use.',
      images: [
         { name: 'sharepoint-org-chart_full_ibyyjd', hideFromModal: true },
         {
            name: 'org-chart-expand-T2laSJesfK7meF6ltsM3L32nE71CpA.mp4',
            type: 'video'
         },
         {
            name: 'org-chart-pan-zoom-3Itkoe7jZQ8VvLuiOsVIhsJ2iOb4rw.mp4',
            type: 'video'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Org Directory',
      year: '2021',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'React Treebeard',
         'Sass/SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/org-tree',
      description:
         "Present your organization's heirarchy and contact information in a visually-appealing way. Automatically pulls data from an existing directory. Easy to customize and use.",
      motivation:
         "Provide clients with a visually-appealing way to display their organization's heirarchy and contact information.",
      outcome: 'Moderalty popular among clients. Easy to customize and use.',
      images: [
         { name: 'sharepoint-org-tree_focus_bdqjup', hideFromModal: true },
         {
            name: 'org-tree-expand-mUBZq1hSrbbQkoN8wuccNHU9liZHyI.mp4',
            type: 'video'
         },
         {
            name: 'org-tree-details-lKwZyG0zF3BiK8hBRHLFmpr33Qxzzd.mp4',
            type: 'video'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Form Builder',
      year: '2021',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/vertical-growing-form',
      description:
         'Enables form admins to build different journeys for different types requests. Using intuitive tools, admins can add, remove, and rearrange steps, fields, sections and pages. Admins can also control branching and conditional logic, as well as choosing from different display styles.',
      motivation:
         'Provide clients an easy way to build and manage custom forms. Provide different presentation methods to help make filling out forms less mundane',
      outcome: 'Popular among clients. Easy to customize and use.',
      images: [
         {
            name: 'growing-form_mxndcb',
            hideFromModal: true
         },
         {
            name: 'form-builder-A8W3CLnzDdvZH4fZ3Yod5M9uCM9p1Y.mp4',
            type: 'video'
         },
         {
            name: 'form-builder-slider-8pfobRaCW9Y6q6LlAgAFnbm0Md9dIM.mp4',
            type: 'video'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Team Site Directory',
      year: '2021',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'React Treebeard',
         'Fabric UI',
         'Sass/SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/site-directory',
      description:
         'Automatically detects sites and subsites in a site collection. Displays them in a visually-appealing way. Easy to customize and use.',
      motivation:
         'Provide clients with a no-config, visually-appealing way to display their site collections.',
      outcome: 'Popular among clients. Easy to customize and use.',
      images: [
         { name: 'spfxSiteExplorer_focus_bhu8j7', hideFromModal: true },
         {
            name: 'team-site-directory-Ssm349O61xFKDLLO28OH7jrWsKpbGN.mp4',
            type: 'video'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Stock Widget',
      year: '2020',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Recharts',
         'Fabric UI',
         'moment.js',
         'Sass/SCSS',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/stock-widget',
      description:
         'Simple, animated stock widget. Composable to incorporate multiple stocks.',
      motivation:
         'Provide clients with a visually-appealing way to display stock data.',
      outcome: 'Moderately popular among clients. Easy to customize and use.',
      images: [
         { name: 'sharepoint-stocks-widget-dark_b7lzrd', hideFromModal: true },
         {
            name: 'stock-widget-dark-TUvdH7GMsjVsPPjrrQT4k28WiTe4xZ.mp4',
            type: 'video'
         },
         {
            name: 'stock-widget-light-3q8RXMVCRRzg1886FwttcpB7g2cu5g.mp4',
            type: 'video'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Agenda Builder',
      year: '2021',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'React Beautiful DnD',
         'React Treebeard',
         'Fabric UI',
         'moment.js',
         'Sass/SCSS',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/agenda-builder',
      description:
         'Drag and drop to change the order of items... Editable agenda item details... This demo has minimal styling to facilitate customer-specific branding and easy integration into other projects.',
      motivation:
         'To provide to multiple customers. To gain experience with drag and drop.',
      outcome: 'Used by multiple customers. Easy to customize and use.',
      images: [
         {
            name: 'sharepoint-agenda-builder-dnd_vn1e8a',
            hideFromModal: true,
            frame: 1 // note to self: added this flag because I only had an animated gif for this project, adds cloudinary flag pg_1
         },
         {
            name: 'draggable-agenda-builder-wxSKOMTiDt63TP4oLG8yuQD852DuvP.mp4',
            type: 'video'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Assessment Checklist',
      year: '2021',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'moment.js',
         'Sass/SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/project-assessment-tool',
      description:
         'Powerful tool for tracking and assessing project progress. Colors change as progress is made. Permitted users can sign approval.',
      motivation:
         'Provide clients with an engaging and powerful tool for tracking and assessing project progress.',
      outcome: 'Popular among clients. Easy to customize and use.',
      images: [
         { name: 'assessment-checklist_joi1zh', hideFromModal: true },
         {
            name: 'assessment-checklist-EW7BTvTA37P1Tgv3K1qyB9jOgOgKQ6.mp4',
            type: 'video'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: true
   },
   {
      name: 'Classifieds & Events',
      year: '2021',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'dayjs',
         'Sass/SCSS',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/classifieds-2021',
      description:
         'Provide a social aspect for employees. Post, find and communicate about items and services. Announce and track events. Moderators can approve posts or request changes.',
      motivation:
         'Inject some fun into the workplace. Provide a way for employees to connect and share.',
      outcome: 'Very popular. Easy to customize and use.',
      images: [
         { name: 'spfxClassifieds_focus_ab3e7m', hideFromModal: true },
         {
            name: 'classifieds-events-PVIWwq4wEE0X3bubcTOYtmM2bYlXaz.mp4',
            type: 'video'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Contact Directory',
      year: '2021',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/spfxContactSearch',
      description:
         'Fast and easy to use. Search by name, department, location, etc. Click to call, email, or chat. View org chart. Automatically syncs with existing data.',
      motivation:
         'Provide a more engaging way to access contact information. Provide a way to easily find and connect with coworkers.',
      outcome: 'Popular among clients. Easy to customize and use.',
      images: [
         { name: 'spfxContactSearch_focus_z4jkqy', hideFromModal: true },
         {
            name: 'contact-directory-T3AOPpE5uSIQzP68mpaSKyBpllBvA7.mp4',
            type: 'video'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   }
];
export const education = [
   {
      degree: 'Bachelor of Science',
      major: 'Mathematics',
      institution: 'University of Redlands',
      location: 'Redlands, CA',
      startYear: 1996,
      endYear: 2001,
      awards: [
         'Endowed Alumni Scholarship',
         'Presidential Scholarship',
         'Scholar-Athlete'
      ]
   },
   {
      degree: 'Master-Level Coursework',
      major: 'Applied Mathematics',
      institution: 'Claremont Graduate University',
      location: 'Claremont, CA',
      startYear: 2001,
      endYear: 2001,
      awards: [
         'Fully Paid PhD Fellowship',
         'Exceled, tutored peers, led study groups',
         'Focused on fluid dynamics and differential equations',
         'Participated in sponsored workshops to optimize semiconductor performance',
         'Helped distinguished professors emeritus produce the second edition of their popular textbook on differential equations. Devised complex mathematical problems and authored solutions. Edited and proofread the text. Used LaTeX to typeset the book. Trained other students in LaTeX. Developed a love of tech. Also enhanced my life-long love of mentoring and teaching.',
         "Wasn't planning on grad school but couldn't pass up the fully-paid PhD fellowship. Although I enjoyed the work, I realized that I didn't want to be a mathematician. I followed my new-found love of software to a career in tech."
      ]
   }
];
export const certifications = [
   {
      name: 'LaunchDarkly Gold Certification',
      date: '2024'
   },
   {
      name: 'Software Security Training',
      date: '2021-2024'
   },
   {
      name: 'Information Security Awareness (AgLearn)',
      date: '2020'
   },
   {
      name: 'Nielsen Norman Group User Experience training',
      date: '2012'
   }
];

// todo: attach as methods/properties to each data object

export const homeSkills = skills
   .filter(skill => skill.featureOnHome === true)
   .sort((a, b) => b.rating - a.rating);

export const skillsForTable = skills.filter(
   skill => skill.showInSkillsTable === true
);

export const homeProjects = projects.filter(
   project => project.featureOnHome === true
);

export const projectsForGallery = projects.filter(
   project => project.showInProjectsGallery === true
);

const filterAndInverse = (array, callback) => {
   const filtered = array.filter(callback);
   const inverseFiltered = array.filter(item => !callback(item));
   return [filtered, inverseFiltered];
};
export const [recentProjects, olderProjects] = filterAndInverse(
   projectsForGallery,
   project => getYearsSince(project.year) < 2
);

const getFeaturedImage = function () {
   // con't be arrow function because it needs to be able to access 'this'
   return this.images.find(image => image.type !== 'video');
};

const getMadalImages = function () {
   return this.images.filter(image => !image.hideFromModal);
};

projects.forEach(project => {
   project.getFeaturedImage = getFeaturedImage;
   project.getMadalImages = getMadalImages;
});

const yearsSinceLearned = function () {
   const yearWithMonth = `${this.yearLearned}-01`;
   return getYearsSince(yearWithMonth);
};

skills.forEach(skill => {
   skill.yearsSinceLearned = yearsSinceLearned;
});

export const skillIcon = skills.map(skill => skill.cloudinary);
export const skillIcons = (skillNames = []) => {
   return skills
      .filter(skill => skillNames.includes(skill.name))
      .map(skill => ({
         src: skill.cloudinary,
         altText: skill.name
      }));
};
