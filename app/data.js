import { getYearsSince } from './utils';

export const about = {
   firstName: 'Bennett',
   lastName: 'Brooks',
   preferredName: 'Ben',
   title: 'Software Engineer',
   otherTitles: ['Web Developer', 'Full-Stack Developer', 'Frontend Developer'],
   location: 'Portland, Oregon',
   summary: 'Experienced software engineer',
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
      type: 'Frontend Library',
      stackArea: 'Frontend',
      stackCategory: 'Library',
      name: 'React.js',
      icon: '/react.svg',
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
      type: 'Frontend Framework',
      stackArea: 'Frontend',
      stackCategory: 'Framework',
      name: 'Next.js',
      icon: '/next.svg',
      cloudinary: 'nextjs_jxdbqq',
      cloudinaryDark: 'next-dark-icon_qfvtkk',
      yearLearned: 2020,
      years: 4,
      rating: 9,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
   },
   {
      type: 'Frontend Framework',
      stackArea: 'Frontend',
      stackCategory: 'Framework',
      name: 'Vue.js',
      icon: '/vue.svg',
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
      type: 'Backend Development',
      stackArea: 'Backend',
      stackCategory: 'Language',
      name: 'NodeJS',
      icon: '/node.svg',
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
      type: 'Language',
      stackArea: 'General',
      stackCategory: 'Language',
      name: 'TypeScript',
      icon: '/ts1.svg',
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
      featureOnHome: true,
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
      featureOnHome: true,
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
      featureOnHome: true,
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
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      name: 'Sass/SCSS',
      icon: '/sass.svg',
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
      type: 'Styling',
      stackArea: 'Frontend',
      stackCategory: 'Styling',
      name: 'Tailwind',
      icon: '/tailwind.svg',
      cloudinary: 'tailwind_k9r34s',
      cloudinaryDark: 'tailwind-dark-icon_mbvvtr',
      yearLearned: 2020,
      years: 4,
      rating: 9,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true,
      featureInCTAs: true
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
      featureOnHome: true,
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
      featureOnHome: true,
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
      featureOnHome: true,
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
      featureOnHome: true,
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
      name: 'PHP',
      icon: '/php.svg',
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
      type: 'Backend Development',
      stackArea: 'General',
      stackCategory: 'Content Management',
      name: 'WordPress',
      icon: '/wordpress.svg',
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
      type: 'Backend Development',
      stackArea: 'Backend',
      stackCategory: 'Language',
      name: 'Python',
      icon: '/python.svg',
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
      featureOnHome: true,
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
      featureOnHome: true,
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
      featureOnHome: true,
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
      featureOnHome: true,
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
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
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
      years: 5,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
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
      featureOnHome: true,
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
      role: 'Contract Web Developer',
      company: 'Self-Employed',
      location: 'Portland, OR',
      start: '2024-12',
      end: '',
      duties: [
         {
            name: '',
            description:
               'Building fast, beautiful websites and apps using JavaScript, React, Next.js, Vercel, MongoDB, Node, CSS Modules, and Tailwind CSS. Focused on clean architecture, maintainable code, performance, usability, and accessibility.',
            skillNames: [
               'JavaScript',
               'NodeJS',
               'React.js',
               'Next.js',
               'Vercel',
               'CSS Modules',
               'Tailwind',
               'Fastify',
               'MongoDB'
            ]
         }
      ]
   },
   {
      role: 'Staff Full-Stack Software Engineer',
      company: 'ZenBusiness',
      location: 'Austin, TX (Remote)',
      start: '2021-02',
      end: '2024-12',
      duties: [
         {
            name: 'UI/UX Development & Integration',
            description:
               'Built business-critical apps, components, libraries, and design systems using JavaScript, React, Redux, Vue.js, Vuex, CSS Modules, and Styled Components.',
            moreInfo: [
               [
                  'Built real-time, interactive applications with complex state management.',
                  'Developed and maintained apps, components, libraries, and design systems, enhancing user experience (UX), developer experience (DX), and performance.',
                  'Implemented responsive design and accessibility best practices.',
                  'Contributed to the development of customer-facing applications, including onboarding flows, shopping/cards, dashboards, post-purchase/upsells and more.',
                  'Contributed to the development of internal tools and applications.',
                  'Improved and maintained the company’s marketing website using PHP, WordPress, JavaScript, CSS, Fastly, Cypress, and SEO, significantly improving core web vitals and coding standards.',
                  'Led key improvements to performance, accessibility, and usability.',
                  'Led efforts to improve performance and coding practices for multiple React-based repos.',
                  'Developed and maintained a design system for consistent UI across products.',
                  'Collaborated with design teams to implement engaging, pixel-perfect designs.',
                  'Collaborated with product engineers, UI/UX designers and other cross-functional stakeholders.',
                  'Developed atomic component libraries for consistent and efficient development.',
                  'Integrated UI with APIs and data sources.',
                  'Mentored junior and senior engineers and provided technical guidance.',
                  'Defined technical requirements, collaborated with Product and Design teams, and led story mapping sessions.',
                  'Improved coding and logging standards, ensuring clean, maintainable code across projects.'
               ]
            ],
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
            name: 'Web Development & Optimization',
            description:
               "Enhanced the company's public website using WordPress, PHP, SCSS/SASS, and JavaScript. Improved core web vitals and coding standards. Built a component library to increase efficiency and consistency.",
            moreInfo: [
               [
                  'Developed, implemented and documented a component library for consistent UI across the site.',
                  'Supported the shift to a page-speed-based SEO strategy, collaborating with the SEO Team to meet performance targets (e.g. TTFB, LCP, CLS).',
                  'Vastly improved core web vitals and coding standards by making systematic optimization and recording performance metrics.',
                  'Provided documentation, training and support related to maintaining performance and coding best practices.',
                  'Planned, implemented, documented and supported an atomic component structure, facilitating quick and consistent development.',
                  'Mentored junior and senior engineers and provided technical guidance.',
                  'Built automated tests using Cypress.'
               ]
            ],
            // moreInfoLink: {
            //    href: '/experience/zb-seo',
            //    text: 'Read more about optimizing the website...'
            // },
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
               'Built and maintained scalable microservices to enhance functionality and replace monolithic APIs. Used Node.js, Fastify, JavaScript, GCP, Kubernetes, and Docker to develop microservices and APIs.',
            moreInfo: [
               [
                  'Built and maintained scalable microservices to improve developer experience.',
                  'Leveraged technologies like Node.js, Fastify, JavaScript, GCP...',
                  'Supported the decommissioning of a monolithic API.',
                  'Contributed to the development of Node.js/Fastify microservices.',
                  'Developed robust solutions for validating JSON and XML data, and automatically converting between data formats.',
                  'Led the development of a critical microservice to automate the gathering, storage, preparation, validation and submission of data for a federal API, boosting efficiency and revenue.',
                  'Defined requirements, collaborated with stakeholders, led story mapping and development. ',
                  'Integrated logging and monitoring in GCP to ensure system reliability.',
                  'Helped improve team coding and logging standards.',
                  'Built unit tests using Jest.',
                  'Provided technical support across codebases.',
                  'Mentored senior and junior engineers.',
                  'Implemented secure storage and processing of Personally Identifiable Information (PII) using a proxy to handle sensitive data.',
                  'Provided technical guidance throughout the development lifecycle and represented the team in cross-functional meetings.',
                  'Managed projects from technical scoping to deployment and user support, ensuring delivery of high-quality features aligned with business goals.'
               ]
            ],
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
               'Led a team dedicated to experimentation and optimization, focusing on A/B testing and multivariate experimentation. Helped build a culture of experimentation to speed iterative improvements and increase revenue.',
            moreInfo: [
               [
                  'Led planning, building, tracking, and reporting on A/B and multivariate tests.',
                  'Collaborated with Design and Product teams to develop hypotheses, define metrics, and design variants.',
                  'Built variants.',
                  'Worked with Data teams to analyze and present results.',
                  'Partnered with stakeholders to confirm winners, implement solutions, and plan follow-up tests.',
                  'Mentored senior engineers on testing and coding practices.',
                  'Facilitated the transition to LaunchDarkly as our needs became too complex for Google Optimize.',
                  'Trained other teams and presented to stakeholders regarding experimentation and LaunchDarkly.',
                  'Helped build a culture of experimentation to speed iterative improvements and increase revenue.',
                  'Acquired LaunchDarkly Gold Certification and provided ongoing support.'
               ]
            ],
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
            name: 'Developer Support & DevOps',
            description:
               "Focused on supporting developers and improving developer experience, gained basic DevOps knowledge and experience. While my passions lie closer to the frontend, it's extremely valuable to understand the backend and DevOps.",
            moreInfo: [
               [
                  'Provided technical support and guidance to developers.',
                  'Administered and documented developer tools.',
                  'Contributed to API abstractions.',
                  'Contributed to release workflows and CI/CD.',
                  'Contributed to a centralized event distributor using Pub/Sub.'
               ]
            ],
            skillNames: [
               'ArgoCD',
               'GCP',
               'Kubernetes',
               'Pub/Sub',
               'Auth0',
               'Twilio',
               'Mailchimp',
               'JavaScript',
               'NodeJS',
               'Docker',
               'Colima',
               'Helm',
               'Terraform'
            ]
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
               'Developed hundreds of custom apps and websites using JavaScript, React, Node, d3.js, CSS Modules, Styled Components, and Tailwind CSS',
            moreInfo: [
               [
                  'Built a library of reusable, stylable, composable components to speed delivery and facililtate consistent usability, accessability and performance.',
                  'Oversaw operations. Owned projects from requirements to delivery.'
               ]
            ],
            skillNames: [
               'JavaScript',
               'NodeJS',
               'React.js',
               'D3.js',
               'CSS Modules',
               'Styled Components',
               'Tailwind',
               'Responsive Design'
            ]
         },
         {
            name: 'Web Development, SEO & Optimization',
            description:
               'Built our company website with WordPress, PHP, JavaScript, and CSS. Optimized SEO and performance.',
            moreInfo: [
               [
                  'Designed and built our company website with WordPress, PHP, JavaScript, and CSS, including custom templates, menus, and widgets, to facilitate frequent updates.',
                  'Led SEO, marketing and sales efforts.',
                  'Managed the company’s online presence and digital marketing strategy.',
                  'Implemented SEO best practices to improve search engine rankings and drive organic traffic.'
               ]
            ],
            skillNames: [
               'WordPress',
               'PHP',
               'JavaScript',
               'CSS Modules',
               'SEO',
               'Performance Optimization',
               'Responsive Design'
            ]
         },
         {
            name: 'Everything Else',
            description:
               'Established and maintained relationships with over 50 organizations including state and federal agencies, restaurants like Sizzler and Outback, universities, and large corporations like Unilever.',
            moreInfo: [
               [
                  'Managed all aspects of the business, including relationships, marketing, and customer support.',
                  'Maintained solid relationships with large corporations (like Massage Envy, Sizzler Restaurants, Outback Steakhouse, and Unilever), government agencies (such as the USDA Forest Service and multiple state agencies), universities (including University of Montana, Central Oregon Community College, and Carroll University) and a variety of other customers.',
                  'Provided training and support to clients.',
                  'Owned projects from discovery to delivery.',
                  'Conducted usability studies and worked with clients to understand their unique needs.'
               ]
            ]
         }
      ]
   },
   {
      role: 'Contract Web Developer',
      company: 'USDA Forest Service',
      location: 'Albuquerque, NM (Remote)',
      start: '2013-06',
      end: '2020-12',
      duties: [
         {
            name: 'Web Development & Performance Optimization',
            description:
               'Managed web projects and improved system performance using JavaScript, CSS, PHP and SQLite.',
            moreInfo: [
               [
                  'Developed and maintained a custom web application for the USDA Forest Service.',
                  'Juggled a steady stream of web projects for internal websites and the public website at www.fs.usda.gov',
                  'Built web apps with JavaScript, CSS, PHP, and SQLite.',
                  'Reduced reliance on jQuery by implementing pure JavaScript components.',
                  'Built templates to enable self-serve website creation for non-technical users.',
                  'Used Git and GitHub to share, review, and manage code. Participated in code reviews and incremental refactoring.',
                  'Helped demonstrate app enhancements and performance improvements to leadership.',
                  "Lead a project to build a Content Review Tool to support the agency's cumbersome efforts to review and improve hundreds of thousands of pages in their  public website."
               ]
            ],
            skillNames: [
               'JavaScript',
               'NodeJS',
               'PHP',
               'SQLite',
               'D3.js',
               'CSS',
               'CSS3',
               'Responsive Design',
               'Performance Optimization'
            ]
         },
         {
            name: 'Web Accessibility & Training Expert',
            description:
               'Trained colleagues, conducted code reviews, and managed web projects. Built web apps using JavaScript, CSS, PHP and SQLite.',
            moreInfo: [
               [
                  'Trained with a senior web accessbility expert (WCAG).',
                  'Improved web accessibility for Forest Service websites and templates.',
                  'Designed and delivered WCAG training.',
                  'Provided training related to self-serve website creation.',
                  'Provided ongoing technical support.'
               ]
            ],
            skillNames: ['Accessibilty (WCAG)']
         }
      ]
   },
   {
      role: 'Systems Manager & Process Engineer',
      company: 'GL Solutions',
      location: 'Bend, OR',
      start: '2006-07',
      end: '2013-05',
      duties: [
         {
            name: 'Systems Manager & Process Engineer',
            description:
               'Re-engineered processes and tools across the organization. Improved efficiency, accuracy, customer satisfaction and employee engagement, and usability and adoption for internal software tools. Defined SCAS, KPIs, and team metrics. Implemented a continuous improvement initiative, empowering employees to actively participate in evolving the organization. Provided custom software, documentation, training, and support.',
            moreInfo: [
               [
                  'Re-engineered processes and tools across the organization.',
                  'Improved efficiency, accuracy, customer satisfaction and employee engagement.',
                  'Defined SCAS, KPIs, and team metrics.',
                  'Implemented a continuous improvement initiative, empowering employees to actively participate in evolving the organization.',
                  'Provided custom software, documentation, training, and support.',
                  'Integrated customer service, sales, and marketing teams into a cohesive Business Solutions Department.',
                  'Re-engineered processes and tools to better utilize talent and experience.',
                  'Worked directly with customers to increase engagement.',
                  'Facilitated idea sharing and built a customer community.',
                  'Conducted stakeholder and SME interviews, documented requirements, and produced software specifications.',
                  'Authored and maintained technical content, and improved documentation standards.',
                  'Wrote detailed responses to government RFPs, RFQs and RFIs. Maintained an in-depth library of content for use in formal responses. Responded to questions and provided support to sales to close deals and transition new customers.',
                  'Conducted stakeholder and SME interviews, documented requirements, and produced software specifications. Authored and maintained technical content, and improved documentation standards.'
               ]
            ]
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
               'Produced technical documentation for end users and internal users, including user guides, in-app help systems, and hundreds of technical articles. Interviewed developers and other stakeholders. Contributed to cryptographic patent applications with research, mathematical consultation, and diagrams.',
            moreInfo: [
               [
                  'Produced user guides, in-app help systems, and technical articles related to software integrations with biometric security devices (e.g. fingerprint, retina, iris, voice, face, and keystroke).',
                  'Interviewed developers and other stakeholders.',
                  'Contributed to cryptographic patent applications related to security algorithms and biometric data mappings, including research, mathematical consultation and diagrams.'
               ]
            ]
         }
      ]
   }
];
export const projects = [
   {
      name: 'Things App v2.0',
      year: '2025',
      tech: [
         'Next.js',
         'React.js',
         'JavaScript',
         'CSS Modules',
         'Responsive Design',
         'NodeJS',
         'Turbopack',
         'Vercel',
         'Mongoose',
         'MongoDB'
      ],
      codeLink: 'https://github.com/bensbits91/things-client',
      moreInfoLink: '/work/things',
      description:
         'The Things app is a personal tracker and rating system for all the things you do, watch, read, play, listen to, and so on.',
      motivation:
         "To practices some skills. To build something that I can use (an idea I've had for awhile). Hope to make an app available to others someday. Users will be able to log in (probably using auth0, including support for social auth), manage a profile and share their interests with others. Get recommendations on things you might like. Eventually find people with similar interests.",
      outcome: 'Work in progress. Super fun so far!',
      images: [
         { name: 'things-wall_inauvg', caption: 'Image wall' },
         { name: 'things-table_u14bsa', caption: 'Table with sorting' },
         { name: 'things-list_rxpe8h', caption: 'List view' },
         { name: 'things-grid_gwhwlk', caption: 'Grid with cards' },
         { name: 'things-modal_sxlojd', caption: 'Modal with details' }
      ],
      showInProjectsGallery: true,
      featureOnHome: true
   },
   {
      name: 'Journey Builder',
      year: '2025',
      tech: [
         'Next.js',
         'React.js',
         'JavaScript',
         'CSS Modules',
         'Responsive Design',
         'NodeJS',
         'nodemailer',
         'Turbopack',
         'Vercel',
         'Cloudinary',
         'Mongoose',
         'MongoDB'
      ],
      liveLink: 'https://www.benbdev.com/quote',
      codeLink: 'https://github.com/bensbits91/contracts-website',
      description:
         'Customizable "journey builder" for creating and managing journeys. Used to walk a user through a set of steps to gather information. Define steps and choices using simple JSON. Decide what happens after each step/choice to create a choose-your-own-adventure style story. I use this app to walk my clients through the steps needed for me to provide a quote for a project. Includes optional help for each step and each choice, which can be hidden or shown by the user, which also provides an opporunity to educate users. Steps can either include choices or forms. Responsive design ensures it looks good and works well on any device.',
      images: [
         {
            name: 'contracts-quote_nfli3y',
            caption: 'Project quote calculator'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: true
   },
   {
      name: 'Accordion FAQ',
      year: '2025',
      tech: [
         'Next.js',
         'React.js',
         'JavaScript',
         'CSS Modules',
         'Responsive Design',
         'NodeJS',
         'nodemailer',
         'Turbopack',
         'Vercel',
         'Cloudinary',
         'Mongoose',
         'MongoDB'
      ],
      liveLink: 'https://www.benbdev.com/faq',
      codeLink: 'https://github.com/bensbits91/contracts-website',
      description:
         'A customizable accordion app. Define headings and content (e.g. questions and answers) using simple JSON. Toggle to show/hide all items. Search for items. Users can also use a built-in form to submit/request new items. I use this accordion app to build an FAQ on my contracting website to help my clients understand tech, plan projects and ask questions. Responsive design ensures it looks good and works well on any device.',
      images: [
         {
            name: 'contracts-faq_mya3pz',
            caption: 'FAQ accordion with form for asking new questions'
         }
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
         'Responsive Design',
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
      images: [{ name: 'this-site_cpaazg' }],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Contracting Website',
      year: '2025',
      tech: [
         'Next.js',
         'React.js',
         'JavaScript',
         'CSS Modules',
         'Responsive Design',
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
      description: 'My website that helps find, educate and manage my clients.',
      motivation:
         'To help my clients understand tech, plan projects and ask questions. To help me manage my clients and projects. To practice some skills.',
      outcome:
         'A clean, responsive, and accessible website that meets my needs and is easy to update and maintain. Hosted on Vercel with a custom domain benbdev.com. Static content stored as markdown (.md) files, rendered in server components using react-markdown and in client components using markdown-to-jsx. Dynamic content stored as JSON.',
      images: [{ name: 'contracts-home_mpofmm', caption: 'Home page' }],
      showInProjectsGallery: true,
      featureOnHome: true
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
         'Responsive Design',
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
      outcome: "Working prototype that I've been using to populate my Things.",
      images: [
         { name: 'things-detail_mqkcqy', caption: 'Modal with details' },
         {
            name: 'things-app-search-save-3a4zDc6ssBNHkL9x1Q1Ee0MBBnIzHM.mp4',
            type: 'video',
            caption: 'Searching and saving'
         },
         {
            name: 'things-sort-export-trimmed-p3sKqPpzhmwOd18Nj7nizb6YfVBvTh.mp4',
            type: 'video',
            caption: 'Sorting and exporting'
         }
         // { name: 'things_w7q8lq', hideFromModal: true },
      ],
      showInProjectsGallery: true,
      featureOnHome: true
   },
   {
      name: 'Central Oregon Community College',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'Website for admin, faculty and students to share information. Integrated social media feeds, CMS, document storage and management, calendars and more. Includes templates to enable authorized admins to create new sites. In addition to development, I provided consultation, requirements gathering, technical documentation, training, and ongoing support. I nurtured a solid relationship with this client, which lasted for more than 8 years.',
      motivation:
         'Provide an engaging platform for sharing information, filling out forms, and connecting with others.',
      outcome:
         'Well-received. High traffic, increased engagement and improved organization. Easy to customize and use.',
      images: [
         { name: 'coccHome_mpge7z', caption: 'Home page' },
         { name: 'cocc-4-devices_o6vrnk', caption: 'Responsive web design' }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Sizzler Restaurants',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'Internal website for owners, managers and employees to share information and make requests.Integrated social media feeds, CMS, document storage and management, calendars and more. Includes templates to enable authorized admins to create new sites.  In addition to development, I provided consultation, requirements gathering, technical documentation, training, and ongoing support. I had a great relationship with this client, which lasted for more than 7 years.',
      // motivation: 'Content in the works...',
      // outcome: 'Content in the works...',
      images: [
         {
            name: 'sizzler-home-gray_hdczb8',
            caption: 'Corporate home page with news and top-level links'
         },
         {
            name: 'sizzler-4-devices-1676_i1gcuf',
            caption: 'Responsive web design'
         },
         {
            name: 'sizzlerHome_iovkjp',
            caption: 'Directory of departments and teams'
         },
         // { name: 'sizzlerExtranet_zlhpnh', caption: 'Team new page' },
         { name: 'sizzlerMktg_jsfupy', caption: 'Team news page' },
         { name: 'sizzlerNewsFormAni_lscbdk', caption: 'New announcement form' }
         // { name: 'sizzler-home-tablet_mg2u5c' }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Massage Envy',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'An intranet template for franchises and corporate departments to share information and make requests. Used to build franchise and team sites that combined shared information with custom content. Integrated social media feeds, CMS, document storage and management, calendars and more. In addition to development, I provided consultation, requirements gathering, technical documentation, training, and ongoing support.',
      // motivation: 'Content in the works...',
      // outcome: 'Content in the works...',
      images: [
         {
            name: 'massage-envy-4-devices_yhmqdl',
            caption: 'Responsive web design'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Reddaway & YRC Freight',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'A large internal website for sharing knowledge, organizing deparments and teams, and making requests. Integrated social media feeds, CMS, document storage and management, calendars and more. Includes templates to enable authorized admins to create new sites. In addition to development, I provided consultation, requirements gathering, technical documentation, training, and ongoing support. I had a great relationship with this client, which lasted for more than 3 years.',
      // motivation: 'Content in the works...',
      // outcome: 'Content in the works...',
      images: [
         {
            name: 'reddawayWiki_e8pkgf',
            caption:
               'Extensive wiki with roles for administering, authoring and viewing content.'
         },
         {
            name: 'reddawayHome_xl7tmz',
            caption: 'Directory of departments and teams, with aggregated info.'
         },
         {
            name: 'reddawayIT_y495jq',
            caption:
               'Home page for a team or department, with easy-to-use apps.'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'USDA Forest Service',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'Multiple websites, both internal and external. Integrated social media feeds, CMS, document storage and management, calendars and more. Includes templates to enable authorized admins to create new sites. In addition to development, I provided consultation, requirements gathering, technical documentation, training, and ongoing support. I nurtured a solid relationship with this client, which lasted for more than 8 years.',
      // motivation: 'Content in the works...',
      // outcome: 'Content in the works...',
      images: [{ name: 'fsConnectBlur_rylwel' }],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Oregon Dept. of Land Conservation & Development',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'Fast, secure, flexible intranets for a state agency. Integrated CMS, document storage and management, calendars and more. Includes templates to enable authorized admins to create new sites. In addition to development, I provided consultation, requirements gathering, technical documentation, training, and ongoing support. I nurtured a solid relationship with this client, which lasted for more than 3 years.',
      // motivation: 'Content in the works...',
      // outcome: 'Content in the works...',
      images: [{ name: 'ordlcdMtgDash_vpjod8' }],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'McLean & Sterling',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'Website for a financial services company. Integrated social media feeds, CMS, document storage and management, calendars and more. Includes templates to enable authorized admins to create new sites. In addition to development, I provided consultation, requirements gathering, technical documentation, training, and ongoing support. I had a great relationship with this client, which lasted for more than 2 years.',
      // motivation: 'Content in the works...',
      // outcome: 'Content in the works...',
      images: [
         {
            name: 'mclean-sterling-desktop_ty3mpq',
            caption:
               'Customizable home page with intuitve apps for content management.'
         },
         {
            name: 'mclean-sterling-4-devices_ndwlvj',
            caption: 'Responsive web design'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Peak Health Services',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'Custom, fast, secure websites for sharing information and making requests. Integrated social media feeds, CMS, document storage and management, calendars and more. Includes templates to enable authorized admins to create new sites. In addition to development, I provided consultation, requirements gathering, technical documentation, training, and ongoing support. I had a great relationship with this client, which lasted for more than 5 years.',
      // motivation: 'Content in the works...',
      // outcome: 'Content in the works...',
      images: [
         { name: 'peak-health-home_tivqng', caption: 'Home page' },
         { name: 'peak-health-education_p8xs9u', caption: 'Education site' },
         {
            name: 'peak-health-sales_teiy8b',
            caption: 'Department site template'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Peak Provider Services',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'Custom, fast, secure websites for sharing information and making requests. Integrated social media feeds, CMS, document storage and management, calendars and more. Includes templates to enable authorized admins to create new sites. In addition to development, I provided consultation, requirements gathering, technical documentation, training, and ongoing support. I had a great relationship with this client, which lasted for more than 5 years.',
      // motivation: 'Content in the works...',
      // outcome: 'Content in the works...',
      images: [
         {
            name: 'peakras-welcome-desktop-wide-3_wbsxu4',
            caption: 'Home page'
         },
         {
            name: 'peakpayer-4-devices-lg_tjpgob',
            caption: 'Responsive web design'
         },
         { name: 'peakras-depts_gekez2', caption: 'Site templates' }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'PROLIM PLM Solutions',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'Custom, fast, secure websites for sharing information and making requests. Integrated social media feeds, CMS, document storage and management, calendars and more. Includes templates to enable authorized admins to create new sites. In addition to development, I provided consultation, requirements gathering, technical documentation, training, and ongoing support. I had a great relationship with this client, which lasted for more than 4 years.',
      // motivation: 'Content in the works...',
      // outcome: 'Content in the works...',
      images: [
         { name: 'prolim-home-desktop_a0lbtv', caption: 'Home page' },
         {
            name: 'prolim-4-devices-lg_lzi7fk',
            caption: 'Responsive web design'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Tastea',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'Custom, fast, secure websites for sharing information and making requests. Integrated social media feeds, CMS, document storage and management, calendars and more. Includes templates to enable authorized admins to create new sites. In addition to development, I provided consultation, requirements gathering, technical documentation, training, and ongoing support. I had a great relationship with this client.',
      // motivation: 'Content in the works...',
      // outcome: 'Content in the works...',
      images: [
         { name: 'Tastea-desktop_yizqy4', caption: 'Home page' },
         {
            name: 'tastea-4-devices-lg_qtrski',
            caption: 'Responsive web design'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'University of Montana Foundation',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'Custom, fast, secure websites for sharing information and making requests. Integrated social media feeds, CMS, document storage and management, calendars and more. Includes templates to enable authorized admins to create new sites. In addition to development, I provided consultation, requirements gathering, technical documentation, training, and ongoing support. I had a great relationship with this client.',
      // motivation: 'Content in the works...',
      // outcome: 'Content in the works...',
      images: [
         { name: 'umf-desktop_nenuai', caption: 'Home page' },
         { name: 'umf-4-devices-lg_i4xzav', caption: 'Responsive web design' }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Carroll University',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'Custom forms and data management to enable faculty and admins to manage course information, which is accessible by students and staff.',
      // motivation:
      //    'To enable faculty and admin to manage course information, which is accessible by students and staff.',
      // outcome: 'Content in the works...',
      images: [
         {
            name: 'carrolluNewCourseFormCrop_emwkps',
            caption: 'Course addition form'
         }
         // { name: 'carrolluNewCourseForm_d7nncr', caption: '' }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   // {
   //    name: 'Richdale Apartments',
   //    year: '2021',
   //    type: 'client',
   //    tech: [
   //       'NodeJS',
   //       'React.js',
   //       'JavaScript',
   //       'TypeScript',
   //       'Fabric UI',
   //       'Sass/SCSS',
   //       'Responsive Design',
   //       'Microsoft Graph',
   //       'Gulp',
   //       'Webpack'
   //    ],
   //    description: 'Content in the works...',
   //    motivation: 'Content in the works...',
   //    outcome: 'Content in the works...',
   //    images: [
   //       { name: 'richdaleSiteHome_ujkekf' },
   //       { name: 'richdaleTabsAni_tjtvbb' },
   //       { name: 'richdaleTabsAni_tjtvbb' },
   //    ],
   //    showInProjectsGallery: true,
   //    featureOnHome: false
   // },
   {
      name: 'Prarie Naturals',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'Custom, fast, secure websites for sharing information. Integrated social media feeds, CMS, document storage and management, calendars and more. Includes templates to enable authorized admins to create new sites. In addition to development, I provided consultation, requirements gathering, technical documentation, training, and ongoing support. I had a great relationship with this client.',
      // motivation: 'Content in the works...',
      // outcome: 'Content in the works...',
      images: [
         {
            name: 'prairenaturals-4-devices-lg_fqodko',
            caption: 'Responsive web design'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'EDG Partners',
      year: '2021',
      type: 'client',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      description:
         'Custom, fast, secure website for team planning, communication and collaboration. Integrated social media feeds, CMS, document storage and management, calendars and more. Includes templates to enable authorized admins to create new sites. In addition to development, I provided consultation, requirements gathering, technical documentation, training, and ongoing support. I had a great relationship with this client.',
      // motivation:
      //    'Provide an engaging platform for sharing information, filling out forms, storing documents with version history, and connecting with others.',
      // outcome:
      //    'Well-received. improved communication and organization. Easy to customize and use.',
      images: [
         { name: 'edg-4-devices_bxzzyu', caption: 'Responsive web design' }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Classifieds & Events',
      year: '2019',
      type: 'app',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'dayjs',
         'Sass/SCSS',
         'Responsive Design',
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
         { name: 'classifieds_qwcjne', caption: 'Classifieds app' },
         { name: 'classifiedsStyles_lmugkq', caption: 'Highly customizable' },
         { name: 'classifiedsMore_cqbgxb', caption: 'More details' },
         { name: 'classifiedsAggr_t8rcto', caption: 'Aggregated view' },
         { name: 'spfxClassifieds_focus_ab3e7m', hideFromModal: true },
         {
            name: 'classifieds-events-PVIWwq4wEE0X3bubcTOYtmM2bYlXaz.mp4',
            type: 'video',
            caption: 'Searching categories and posts'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Dashboard Widgets',
      year: '2018',
      type: 'app',
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
         'Responsive Design',
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
      year: '2018',
      type: 'app',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Recharts',
         'D3.js',
         'Sass/SCSS',
         'Responsive Design',
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
      year: '2018',
      type: 'app',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'React Simple Maps',
         'Recharts',
         'D3.js',
         'Sass/SCSS',
         'Responsive Design',
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
      year: '2018',
      type: 'app',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'moment.js',
         'Sass/SCSS',
         'Responsive Design',
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
      year: '2018',
      type: 'app',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'React Org Chart',
         'React Treebeard',
         'Sass/SCSS',
         'Responsive Design',
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
            type: 'video',
            caption: 'Expand and collapse'
         },
         {
            name: 'org-chart-pan-zoom-3Itkoe7jZQ8VvLuiOsVIhsJ2iOb4rw.mp4',
            type: 'video',
            caption: 'Pan and zoom'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Org Directory',
      year: '2018',
      type: 'app',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'React Treebeard',
         'Sass/SCSS',
         'Responsive Design',
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
            type: 'video',
            caption: 'Expand and collapse'
         },
         {
            name: 'org-tree-details-lKwZyG0zF3BiK8hBRHLFmpr33Qxzzd.mp4',
            type: 'video',
            caption: 'View details'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Form Builder',
      year: '2018',
      type: 'app',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
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
            type: 'video',
            caption: 'Vertically expanding form'
         },
         {
            name: 'form-builder-slider-8pfobRaCW9Y6q6LlAgAFnbm0Md9dIM.mp4',
            type: 'video',
            caption: 'Rotating cubes'
         }
      ],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Team Site Directory',
      year: '2018',
      type: 'app',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'React Treebeard',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
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
      year: '2018',
      type: 'app',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Recharts',
         'Fabric UI',
         'moment.js',
         'Sass/SCSS',
         'Responsive Design',
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
      year: '2018',
      type: 'app',
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
         'Responsive Design',
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
      year: '2018',
      type: 'app',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'moment.js',
         'Sass/SCSS',
         'Responsive Design',
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
      name: 'Contact Directory',
      year: '2018',
      type: 'app',
      tech: [
         'NodeJS',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'Responsive Design',
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
         'Excelled, tutored peers, led study groups',
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
   .map(skill => skill.name);

export const ctaSkills = skills
   .filter(skill => skill.featureInCTAs === true)
   .map(skill => skill.name);
// .sort((a, b) => b.rating - a.rating);

export const skillsForTable = skills
   .filter(skill => skill.showInSkillsTable === true)
   .sort((a, b) => {
      if (b.rating !== a.rating) {
         return b.rating - a.rating; // Sort by rating first
      }
      return b.years - a.years; // If ratings are equal, sort by years
   });

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
export const skillIcons = (skillNames = [], dark = false) => {
   return skills
      .filter(skill => skillNames.includes(skill.name))
      .map(skill => ({
         src: dark
            ? skill.cloudinaryDark || skill.cloudinary
            : skill.cloudinary,
         altText: skill.name
      }));
};
