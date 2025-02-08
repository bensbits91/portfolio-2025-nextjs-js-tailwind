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
   'Microservices & APIs',
   'Scalable & Accessible UI',
   'A/B Testing & Experimentation',
   'Monitoring & Observability',
   'Data Security & Privacy',
   'Process Improvement & Technical Leadership',
   'Cross-functional Team Collaboration & Mentorship',
   'Performance Optimization',
   'Cloud Infrastructure',
   'CI/CD & Agile Development Practice'
];
export const skills = [
   {
      type: 'Language',
      name: 'JavaScript',
      icon: '/js.svg',
      cloudinary: 'js_au9kmj',
      years: 10,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'Language',
      name: 'TypeScript',
      icon: '/ts1.svg',
      cloudinary: 'ts1_nbdvxm',
      years: 7,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Frontend Library',
      name: 'React.js',
      icon: '/react.svg',
      cloudinary: 'react_g4rwdx',
      years: 8,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'Frontend Framework',
      name: 'Vue.js',
      icon: '/vue.svg',
      cloudinary: 'vue_thuhnk',
      years: 3,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'Frontend Framework',
      name: 'Next.js',
      icon: '/next.svg',
      cloudinary: 'next_tpw7a4',
      years: 2,
      rating: 8,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'State Management',
      name: 'Redux',
      icon: '/redux.svg',
      cloudinary: 'redux_vd28jd',
      years: 8,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'State Management',
      name: 'Thunk',
      icon: '/react.svg',
      years: 6,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: false
   },
   {
      type: 'Styling',
      name: 'CSS',
      icon: '/css3.svg',
      cloudinary: 'css3_mvgbbf',
      years: 12,
      rating: 9,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Styling',
      name: 'Sass/SCSS',
      icon: '/sass.svg',
      cloudinary: 'sass_s3kz3x',
      years: 8,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'Styling',
      name: 'Tailwind',
      icon: '/tailwind.svg',
      cloudinary: 'tailwind_k9r34s',
      years: 2,
      rating: 8,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'Styling',
      name: 'JSS',
      icon: '/jss.svg',
      cloudinary: 'jss_zewece',
      years: 8,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Styling',
      name: 'Styled Components',
      icon: '/styled-components.svg',
      cloudinary: 'styled-components_fd8fvo',
      years: 8,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'UI/UX',
      name: 'Responsive Design',
      icon: '/rwd.svg',
      cloudinary: 'rwd_o9z8s0',
      years: 10,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'UI/UX',
      name: 'A/B Testing',
      icon: '/beaker.svg',
      cloudinary: 'beaker_vqshpg',
      years: 3,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'UI/UX',
      name: 'Multivariate Expirementation',
      icon: '/beaker1.svg',
      cloudinary: 'beakers_yellow_eehkpx',
      years: 3,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'UI/UX',
      name: 'LaunchDarkly',
      icon: '/launchdarkly.svg',
      cloudinary: 'launchdarkly_kdznir',
      years: 3,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Build Tools',
      name: 'Webpack',
      icon: '/webpack.svg',
      cloudinary: 'webpack_ycdnkv',
      years: 7,
      rating: 5,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Build Tools',
      name: 'Turbopack',
      icon: '/turbopack.svg',
      cloudinary: 'turbopack_gvkvbu',
      years: 1,
      rating: 5,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Build Tools',
      name: 'Parcel',
      icon: '/parcel.svg',
      cloudinary: 'parcel_ik2cum',
      years: 1,
      rating: 5,
      haveUsedProfessionally: false,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Testing',
      name: 'Jest',
      icon: '/jest.svg',
      cloudinary: 'jest_djvbcr',
      years: 3,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Testing',
      name: 'Cypress',
      icon: '/cypress.svg',
      cloudinary: 'cypress_ihahr3',
      years: 1,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Backend Development',
      name: 'NodeJS',
      icon: '/node.svg',
      cloudinary: 'node_hl58om',
      years: 8,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: true,
      showInSkillsTable: true
   },
   {
      type: 'Backend Development',
      name: 'PHP',
      icon: '/php.svg',
      cloudinary: 'php_hylcjn',
      years: 9,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Backend Development',
      name: 'WordPress',
      icon: '/wordpress.svg',
      cloudinary: 'wordpress_xkgfcd',
      years: 9,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Backend Development',
      name: 'Python',
      icon: '/python.svg',
      cloudinary: 'python_g5utim',
      years: 3,
      rating: 5,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Backend Framework',
      name: 'Express',
      icon: '/express.svg',
      cloudinary: 'express_bqzgin',
      years: 4,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Backend Framework',
      name: 'Fastify',
      icon: '/fastify.svg',
      cloudinary: 'fastify_zy8jul',
      years: 2,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Backend Framework',
      name: 'Django',
      icon: '/django.svg',
      cloudinary: 'django_yilgyq',
      years: 1,
      rating: 4,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Database',
      name: 'MongoDB',
      icon: '/mongodb.svg',
      cloudinary: 'mongodb_kv7lxz',
      years: 2,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Database',
      name: 'PostgreSQL',
      icon: '/postgresql.svg',
      cloudinary: 'postgresql_dx4o4h',
      years: 4,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Database',
      name: 'SQL',
      icon: '/sql.svg',
      cloudinary: 'sql_dxvo6o',
      years: 10,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'APIs',
      name: 'RESTful APIs',
      icon: '/rest.svg',
      cloudinary: 'rest_vt3dwy',
      years: 15,
      rating: 8,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'APIs',
      name: 'GraphQL',
      icon: '/graphql.svg',
      cloudinary: 'graphql_ztconi',
      years: 4,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: true,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Architecture',
      name: 'Microservices',
      icon: '/microservice.svg',
      cloudinary: 'microservice_xcczrj',
      years: 2,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Architecture',
      name: 'Micro-frontends',
      icon: '/micro-frontend.svg',
      cloudinary: 'micro-frontend_sx9fbr',
      years: 2,
      rating: 7,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Cloud Platform',
      name: 'GCP',
      icon: '/gcp.svg',
      cloudinary: 'gcp_h0xhhn',
      years: 3,
      rating: 6,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Cloud Platform',
      name: 'GKE',
      icon: '/gke.svg',
      cloudinary: 'gke_dwffq2',
      years: 3,
      rating: 5,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Cloud Platform',
      name: 'AWS',
      icon: '/aws.svg',
      cloudinary: 'aws_ntzjf4',
      years: 2,
      rating: 5,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Containerization',
      name: 'Docker',
      icon: '/docker.svg',
      cloudinary: 'docker_fx1vot',
      years: 4,
      rating: 5,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Containerization',
      name: 'Colima',
      icon: '/colima-no-bg.png',
      cloudinary: 'colima-no-bg_t4awkl',
      years: 2,
      rating: 5,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Infrastructure Orchestration',
      name: 'Kubernetes',
      icon: '/kubernetes.svg',
      cloudinary: 'kubernetes_z2x5da',
      years: 3,
      rating: 5,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Infrastructure Orchestration',
      name: 'Helm',
      icon: '/helm.svg',
      cloudinary: 'helm_nqdtj8',
      years: 3,
      rating: 5,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   },
   {
      type: 'Infrastructure Orchestration',
      name: 'Terraform',
      icon: '/terraform.svg',
      cloudinary: 'terraform_elhgrr',
      years: 3,
      rating: 5,
      haveUsedProfessionally: true,
      haveUsedForFun: false,
      featureOnHome: false,
      showInSkillsTable: true
   }
];
// export const skills = {
//    languages: [
//       {
//          name: 'JavaScript',
//          icon: '/js.svg',
//          years: 10,
//          rating: 8,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'TypeScript',
//          icon: '/ts1.svg',
//          years: 7,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       }
//    ],
//    frontendLibrariesAndFrameworks: [
//       {
//          name: 'React.js',
//          icon: '/react.svg',
//          years: 8,
//          rating: 9,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'Vue.js',
//          icon: '/react.svg',
//          years: 3,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       },
//       {
//          name: 'Next.js',
//          icon: '/next.svg',
//          years: 2,
//          rating: 7,
//          haveUsedProfessionally: false,
//          haveUsedForFun: true
//       }
//    ],
//    stateManagement: [
//       {
//          name: 'Redux',
//          icon: '/react.svg',
//          years: 8,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'Thunk',
//          icon: '/react.svg',
//          years: 6,
//          rating: 6,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       }
//    ],
//    styling: [
//       {
//          name: 'CSS',
//          icon: '/react.svg',
//          years: 12,
//          rating: 9,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'SCSS',
//          icon: '/react.svg',
//          years: 8,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'Sass',
//          icon: '/react.svg',
//          years: 8,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'Tailwind',
//          icon: '/react.svg',
//          years: 2,
//          rating: 6,
//          haveUsedProfessionally: false,
//          haveUsedForFun: true
//       },
//       {
//          name: 'JSS',
//          icon: '/react.svg',
//          years: 8,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'Styled Components',
//          icon: '/react.svg',
//          years: 8,
//          rating: 8,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       }
//    ],
//    uiUx: [
//       {
//          name: 'Responsive Design',
//          icon: '/rwd.svg',
//          years: 10,
//          rating: 8,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'A/B and multivariate testing',
//          icon: '/react.svg',
//          years: 3,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       },
//       {
//          name: 'LaunchDarkly',
//          icon: '/react.svg',
//          years: 3,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       } /* ,
//         {
//             name: 'Google Optimize',
//             icon: '/react.svg',
//             years: 0,
//             rating: 0,
//             haveUsedProfessionally: true,
//             haveUsedForFun: true
//         } */
//    ],
//    buildTools: [
//       {
//          name: 'Webpack',
//          icon: '/react.svg',
//          years: 7,
//          rating: 5,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'Turbopack',
//          icon: '/react.svg',
//          years: 1,
//          rating: 5,
//          haveUsedProfessionally: false,
//          haveUsedForFun: true
//       },
//       {
//          name: 'Parcel',
//          icon: '/react.svg',
//          years: 1,
//          rating: 5,
//          haveUsedProfessionally: false,
//          haveUsedForFun: true
//       }
//    ],
//    testing: [
//       {
//          name: 'Jest',
//          icon: '/react.svg',
//          years: 3,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'Cypress',
//          icon: '/react.svg',
//          years: 1,
//          rating: 6,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       }
//    ],
//    backendDevelopment: [
//       {
//          name: 'NodeJS',
//          icon: '/react.svg',
//          years: 8,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'PHP',
//          icon: '/react.svg',
//          years: 9,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'WordPress',
//          icon: '/react.svg',
//          years: 9,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'Python',
//          icon: '/react.svg',
//          years: 3,
//          rating: 5,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       }
//    ],
//    backendFrameworks: [
//       {
//          name: 'Express',
//          icon: '/react.svg',
//          years: 4,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'Fastify',
//          icon: '/react.svg',
//          years: 2,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'Django',
//          icon: '/react.svg',
//          years: 1,
//          rating: 4,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       }
//    ],
//    databases: [
//       {
//          name: 'MongoDB',
//          icon: '/react.svg',
//          years: 2,
//          rating: 7,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'PostgreSQL',
//          icon: '/react.svg',
//          years: 4,
//          rating: 6,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'SQL',
//          icon: '/react.svg',
//          years: 10,
//          rating: 8,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       }
//    ],
//    apis: [
//       {
//          name: 'RESTful APIs',
//          icon: '/react.svg',
//          years: 15,
//          rating: 8,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       },
//       {
//          name: 'GraphQL',
//          icon: '/react.svg',
//          years: 4,
//          rating: 6,
//          haveUsedProfessionally: true,
//          haveUsedForFun: true
//       }
//    ],
//    architecture: [
//       {
//          name: 'Microservices',
//          icon: '/react.svg',
//          years: 2,
//          rating: 6,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       },
//       {
//          name: 'micro-frontends',
//          icon: '/react.svg',
//          years: 2,
//          rating: 6,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       }
//    ],
//    cloudPlatforms: [
//       {
//          name: 'GCP',
//          icon: '/react.svg',
//          years: 3,
//          rating: 6,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       },
//       {
//          name: 'GKE',
//          icon: '/react.svg',
//          years: 3,
//          rating: 5,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       },
//       {
//          name: 'AWS',
//          icon: '/react.svg',
//          years: 2,
//          rating: 5,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       }
//    ],
//    containerization: [
//       {
//          name: 'Docker',
//          icon: '/react.svg',
//          years: 4,
//          rating: 5,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       },
//       {
//          name: 'Colima',
//          icon: '/react.svg',
//          years: 2,
//          rating: 5,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       }
//    ],
//    infrastructureOrchestration: [
//       {
//          name: 'Kubernetes',
//          icon: '/react.svg',
//          years: 3,
//          rating: 5,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       },
//       {
//          name: 'Helm',
//          icon: '/react.svg',
//          years: 3,
//          rating: 5,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       },
//       {
//          name: 'Terraform',
//          icon: '/react.svg',
//          years: 3,
//          rating: 5,
//          haveUsedProfessionally: true,
//          haveUsedForFun: false
//       }
//    ]
// };
export const experience = [
   {
      role: 'Staff Full-Stack Engineer',
      company: 'ZenBusiness',
      location: 'Austin, TX (Remote)',
      start: '2021-02',
      end: '2024-12',
      duties: [
         {
            name: 'Microservices & APIs',
            description:
               'Built and maintained scalable microservices to enhance functionality and replace monolithic components. Leveraged technologies like Node.js, Fastify, JavaScript, JSON, XML, and Jest for development and testing. Integrated logging and monitoring in GCP to ensure system reliability. Led the development of a critical microservice that automated data submissions to a federal API. Developed robust solutions for data validation, format conversion (JSON to XML), and secure handling of Personally Identifiable Information (PII) using a proxy to process sensitive data.'
         },
         {
            name: 'UI Development & Integration',
            description:
               'Built and maintained UI features across various repositories, including React/Redux/Styled Components and Vue.js/Vuex/CSS Modules. Developed interactive components to facilitate seamless user data collection and request submission to backend services.'
         },
         {
            name: 'Public Website',
            description:
               'Enhanced the company’s public website using WordPress, PHP, CSS/SASS, and JavaScript. Supported the shift to a page-speed-based SEO strategy, collaborating with the SEO Team to meet performance targets (e.g. TTFB, LCP, CLS). Vastly improved page speed. Optimized code organization and performance. Planned, implemented, documented and supported an atomic component structure, facilitating quick and consistent development.'
         },
         {
            name: 'Experimentation',
            description:
               'Led planning, building, tracking, and reporting on A/B and multivariate tests. Collaborated with Design and Product teams to develop hypotheses, define metrics, and design variants. Built variants. Worked with Data teams to analyze and present results. Partnered with stakeholders to confirm winners, implement solutions, and plan follow-up tests. Mentored senior engineers on testing and coding practices. Facilitated the transition to LaunchDarkly as our needs became too complex for Google Optimize. Trained other teams and presented to stakeholders regarding experimentation and LaunchDarkly. Acquired LaunchDarkly Gold Certification and provided ongoing support.'
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
            name: '',
            description:
               'Built and oversaw business operations and projects. Developed hundreds of custom SPAs using Node, JavaScript and React. Built a library of reusable components to speed delivery of custom applications. Designed and built our company website with WordPress, PHP, JavaScript including custom templates, menus, and widgets, to facilitate frequent updates. Led SEO, marketing and sales efforts. Established and maintained relationships with over 50 organizations including state and federal agencies, restaurants like Sizzler and Outback, universities, and large corporations like Unilever.'
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
      name: 'This website',
      year: '2025',
      tech: [
         'Next.js',
         'Tailwind CSS',
         'Node.js',
         'nodemailer',
         'dayjs',
         'Turbopack',
         'Vercel',
         'Cloudinary'
      ],
      codeLink:
         'https://github.com/bensbits91/portfolio-2025-nextjs-js-tailwind',
      description:
         "My personal website, built in about a week... deployed using Vercel... custom components and theme... atomic component structure, including custom typography and layout... minimal dependencies... content stored as JSON inside the project... a few li'l custom animations and transitions... images stored in cloudinary and optimized using next/image... videos stored using Vercel Blob storage... contact form sends email using nodemailer... api routes for contact form and image/video storage... Turbopack for faster page loads... dayjs for date formatting... Tailwind CSS for styling... Next.js for SSR and SSG... Vercel for deployment... Cloudinary for image and video storage... fun fun fun",
      motivation:
         'To showcase my skills and experience. To brush the rust off some of my front-end skills.',
      outcome:
         'A clean, responsive, and accessible website that showcases my skills and experience. Fun excerise.',
      images: [{ name: 'this-site_pyfjwv' }],
      showInProjectsGallery: true,
      featureOnHome: false
   },
   {
      name: 'Things app',
      year: '2025',
      tech: [
         'React.js',
         'Redux',
         'Thunk',
         'Styled Components',
         'Prime React',
         'Node.js',
         'Fastify',
         'Mongoose',
         'MongoDB'
      ],
      codeLink: 'https://github.com/bensbits91/primereact-test-01',
      description:
         "Add, rate and track anything... Integrates with multiple third-party APIs to find and display information about supported types (currently books, TV shows, movies and video games)... I'll be adding more types soon... Ability to export your Things to CSV. Built entirely using free tech so far (third-party APIs, Mongo Atlas...)... Built in about two weeks so far. Kinda ugly so far :/",
      motivation:
         "To practices some skills. To build something that I can use (an idea I've had for awhile). Hope to make an app available to others someday. Users will be able to log in (probably using auth0, including social auth), manage a profile and share their interests with others. Get recommendations on things you might like. Eventually find people with similar interests.",
      outcome: 'WIP, super fun',
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
         'node.js',
         'React.js',
         'TypeScript',
         'React Simple Maps',
         'Recharts',
         'd3js',
         'Fabric UI',
         'SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/goal-tracker',
      description: '',
      motivation: '',
      outcome: '',
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
         'node.js',
         'React.js',
         'TypeScript',
         'Recharts',
         'd3js',
         'SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: '',
      description: 'asdf',
      motivation: 'asdf',
      outcome: 'asdf',
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
      name: 'Map-based data display',
      year: '2020',
      tech: [
         'node.js',
         'React.js',
         'TypeScript',
         'React Simple Maps',
         'Recharts',
         'd3js',
         'SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: '',
      description: 'asdf',
      motivation:
         'Provide for clients... plug into existing apps... pracitce handling geo data... practice visualization...',
      outcome: 'asdf',
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
         'node.js',
         'React.js',
         'TypeScript',
         'Fabric UI',
         'moment.js',
         'SCSS',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/weather-widget',
      description: '',
      motivation: '',
      outcome: '',
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
         'node.js',
         'React.js',
         'TypeScript',
         'React Org Chart',
         'React Treebeard',
         'SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/org-chart-2021',
      description: 'asdf',
      motivation: 'asdf',
      outcome: 'asdf',
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
         'node.js',
         'React.js',
         'TypeScript',
         'Fabric UI',
         'React Treebeard',
         'SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/org-tree',
      description: '',
      motivation: '',
      outcome: '',
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
         'node.js',
         'React.js',
         'TypeScript',
         'Fabric UI',
         'SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/vertical-growing-form',
      description:
         'Enables form admins to build different journeys for different types requests. Using intuitive tools, admins can add, remove, and rearrange steps, fields, sections and pages. Admins can also control branching and conditional logic, as well as choosing from different display styles.',
      motivation: '',
      outcome: '',
      images: [
         {
            name: 'growing-form_mxndcb',
            hideFromModal: true
         },
         {
            name: 'form-builder-A8W3CLnzDdvZH4fZ3Yod5M9uCM9p1Y.mp4',
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
         'node.js',
         'React.js',
         'TypeScript',
         'React Treebeard',
         'Fabric UI',
         'SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/site-directory',
      description: '',
      motivation: '',
      outcome: '',
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
         'node.js',
         'React.js',
         'TypeScript',
         'Recharts',
         'Fabric UI',
         'moment.js',
         'SCSS',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/stock-widget',
      description: '',
      motivation: '',
      outcome: '',
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
         'node.js',
         'React.js',
         'TypeScript',
         'React Beautiful DnD',
         'React Treebeard',
         'Fabric UI',
         'moment.js',
         'SCSS',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/agenda-builder',
      description:
         'Drag and drop to change the order of items... Editable agenda item details... This demo has minimal styling to facilitate customer-specific branding and easy integration into other projects.',
      motivation:
         'To provide to multiple customers. To gain experience with drag and drop.',
      outcome:
         'Used by multiple customers. Gained experience with drag and drop.',
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
         'node.js',
         'React.js',
         'TypeScript',
         'Fabric UI',
         'moment.js',
         'SCSS',
         'Microsoft Graph API',
         'Gulp',
         'Webpack'
      ],
      codeLink: '',
      description: '',
      motivation: '',
      outcome: '',
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
         'node.js',
         'React.js',
         'TypeScript',
         'Fabric UI',
         'dayjs',
         'SCSS',
         'Gulp',
         'Webpack'
      ],
      codeLink: 'https://github.com/bensbits91/classifieds-2021',
      description: '',
      motivation: '',
      outcome: '',
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
         'node.js',
         'React.js',
         'TypeScript',
         'Fabric UI',
         'SCSS',
         'Microsoft Graph',
         'Gulp',
         'Webpack'
      ],
      motivation: '',
      description: '',
      codeLink: 'https://github.com/bensbits91/spfxContactSearch',
      outcome: '',
      images: [
         { name: 'spfxContactSearch_focus_z4jkqy', hideFromModal: true },
         {
            name: '',
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
