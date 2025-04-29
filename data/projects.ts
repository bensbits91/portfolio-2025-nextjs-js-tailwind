import { getYearsSince } from '@/utils/date';
import { DefinitionProject, ProjectImage } from '@/types/Project';

export const projects = [
   {
      name: 'Things App v2.0',
      year: '2025',
      tech: [
         'Next.js',
         'React.js',
         'JavaScript',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Node.js',
         'RESTful APIs',
         'Turbopack',
         'Vercel',
         'Mongoose',
         'MongoDB'
      ],
      codeLink: 'https://github.com/bensbits91/things-client',
      moreInfoLink: '/projects/things',
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
         'CSS',
         'Responsive Design',
         'Node.js',
         'RESTful APIs',
         'nodemailer',
         'Turbopack',
         'Vercel',
         'Cloudinary',
         'Mongoose',
         'MongoDB',
         'Zustand'
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
         'CSS',
         'Responsive Design',
         'Node.js',
         'RESTful APIs',
         'nodemailer',
         'Turbopack',
         'Vercel',
         'Cloudinary',
         'Mongoose',
         'MongoDB',
         'Zustand'
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
         'TypeScript',
         'D3.js',
         'Tailwind',
         'CSS',
         'Responsive Design',
         'Node.js',
         'RESTful APIs',
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
         'CSS',
         'Responsive Design',
         'Node.js',
         'RESTful APIs',
         'nodemailer',
         'Turbopack',
         'Vercel',
         'Cloudinary',
         'Mongoose',
         'MongoDB',
         'Zustand'
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
         'CSS',
         'Prime React',
         'Responsive Design',
         'Node.js',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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
   //       'Node.js',
   //       'React.js',
   //       'JavaScript',
   //       'TypeScript',
   //       'Fabric UI',
   //       'Sass/SCSS',
   //       'CSS Modules',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'dayjs',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'React Simple Maps',
         'Recharts',
         'D3.js',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph API',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Recharts',
         'D3.js',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph API',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'React Simple Maps',
         'Recharts',
         'D3.js',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph API',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'moment.js',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'React Org Chart',
         'React Treebeard',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph API',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'React Treebeard',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph API',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph API',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'React Treebeard',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph API',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Recharts',
         'Fabric UI',
         'moment.js',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'React Beautiful DnD',
         'React Treebeard',
         'Fabric UI',
         'moment.js',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'moment.js',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph API',
         'RESTful APIs',
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
         'Node.js',
         'React.js',
         'JavaScript',
         'TypeScript',
         'Fabric UI',
         'Sass/SCSS',
         'CSS Modules',
         'CSS',
         'Responsive Design',
         'Microsoft Graph',
         'RESTful APIs',
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

export const homeProjects = projects.filter(
   project => project.featureOnHome === true
);

export const projectsForGallery = projects.filter(
   project => project.showInProjectsGallery === true
);

type FilterCallback = (item: DefinitionProject) => boolean;

const filterAndInverse = (
   array: DefinitionProject[],
   callback: FilterCallback
): [DefinitionProject[], DefinitionProject[]] => {
   const filtered = array.filter(callback);
   const inverseFiltered = array.filter(item => !callback(item));
   return [filtered, inverseFiltered];
};

export const [recentProjects, olderProjects] = filterAndInverse(
   projectsForGallery,
   project => getYearsSince(project.year) < 2
);

const getFeaturedImage = function (
   project: DefinitionProject
): ProjectImage | undefined {
   if (!project.images) return undefined;
   return project.images.find((image: ProjectImage) => image.type !== 'video');
};

const getModalImages = function (project: DefinitionProject) {
   if (!project.images) return undefined;
   return project.images.filter((image: ProjectImage) => !image.hideFromModal);
};

projects.forEach((project: DefinitionProject) => {
   project.getFeaturedImage = (): ProjectImage | undefined =>
      getFeaturedImage(project);
   project.getModalImages = () => getModalImages(project);
});
