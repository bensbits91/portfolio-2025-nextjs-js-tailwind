const content = {
   heading: 'Things App v2.0',
   subheading: 'Very much a WIP ;)',
   skillNames: [
      'Node.js',
      'Fastify',
      'MongoDB',
      'React.js',
      'Next.js',
      'CSS Modules',
      'Responsive Design'
   ],
   sections: [
      {
         heading: 'Overview',
         content: [
            'The Things app is a personal tracker and rating system for all the things you do, watch, read, play, listen to, and so on.'
         ]
      },
      {
         heading: 'Track, Rate & Discover',
         content: [
            "Track anything. Kind of like Goodreads but for everything. See what you've done, what you're currently doing, and what you want to do. Track how many times you've watched a movie, read a book, played a game, and so forth.",
            'Rate anything. See your favorite things across different categories. View all of your favorite things in fun, engaging ways.',
            "Discover new things in all-kindsa ways. Get recommondations on books you might like based on movies you've seen. Find new podcasts based on the video games you play. See what your friends are into. Find things by genre, tags, language, country, decade, and whatnot."
         ]
      },
      {
         heading: 'Supported Types & Beyond',
         content: [
            'Add anything just by typing a name. Then add ratings, indicate your status, add a review, add notes and tags, yada yada.',
            'Currently supported things with search results include books, movies, TV shows and video games. If you add a thing that is a supported type, see search results and select the thing you want to track. When you add a thing that supports search results, you can see the cover art, description, related people, and more.'
         ]
      },
      {
         heading: 'More Types on the Way!',
         content: [
            'Search results coming soon for podcasts, bands, albums, songs, board and card games, actors and stand-up comics, athletes and teams, and comic books.',
            'I designed and developed the backend to support adding search results for new types of things in the future. The backend also normalizes any data needed by the frontend, so client apps aren\'t affected by the addition of new types. We can always add "unsupported" things (without search results).'
         ]
      },
      {
         heading: 'Why a New Version?',
         content: [
            "I've been using verion 1.0 of the Things app and have curated my own library of things. It works well for a small user base.",
            'Version 2.0 separates the frontend and backend, with a focus on security and scalability. Auth0, multi-tier caching, social/community features, support for multiple frontends (e.g. iOS & Andriod), and so on.',
            'I also wanted to rebuild the frontend from scratch to make it faster, lighter, more accessible, and more customizable. No need for a UI library, I like building custom components. No need for a CSS framework. No need for Redux or Zustand for state management (yet).'
         ]
      },
      {
         heading: 'Need help?',
         layout: 'Cta',
         bigBottom: true,
         content: [
            "Let me know if you have any ideas or suggestions. Or let's build something else!"
         ],
         link: {
            href: '/contact',
            text: "Let's connect!"
         }
      },
      {
         heading: '',
         layout: 'TwoColumnSection',
         subsections: [
            {
               heading: 'Frontend',
               stack: [
                  'Node',
                  'React',
                  'Next',
                  'CSS Modules',
                  'Tanstack React-Query'
               ],
               codeLink: {
                  href: 'https://github.com/bensbits91/things-client',
                  text: 'View Frontend Code'
               },
               content: [
                  {
                     heading: 'Custom Components',
                     subheading:
                        '100% custom components, no third-party UI library. Faster, lighter and easier to customize.',
                     list: [
                        'Layout (boxes, responsive sections and such)',
                        'Typography (headings and other types of text)',
                        'Inputs including pretty dropdowns, buttons & ratings',
                        'Image component to help optimize images for different devices',
                        'Iconography (SVGs wrapped in components, can be modified with CSS)',
                        'View selector for lists of things and search sorting, filtering and more.',
                        'Modal with thing-specific controls and subtle animation',
                        'Toast for messages and user-facing errors, with subtle animation'
                     ]
                  },
                  {
                     heading: 'Style',
                     subheading: '',
                     list: [
                        'Custom style using CSS Modules',
                        'Responsive layouts & grids',
                        'Palete & theming'
                     ]
                  },
                  {
                     heading: 'Logic',
                     subheading: '',
                     list: [
                        'Custom hooks (controllers) to encapsulate logic',
                        'Tanstack React-Query to handle fetching and caching data',
                        'Services & Routes to handle communications with the backend'
                     ]
                  }
               ]
            },
            {
               heading: 'Backend',
               stack: [
                  'Node',
                  'Fastify',
                  'MongoDB, hosted on Atlas, managed with Mongoose',
                  'Caching -- in-memory caching for now; will replace with Redis soon'
               ],
               codeLink: {
                  href: 'https://github.com/bensbits91/things-server',
                  text: 'View Backend Code'
               },
               content: [
                  {
                     heading: 'Handling Requests & Data',
                     subheading: '',
                     list: [
                        'Routes to handle incoming requests',
                        'Controllers to handle logic',
                        'Services to handle communications and aggregate data',
                        'Models to define schemas and validate data'
                     ]
                  },
                  {
                     heading: 'Logic & Authorization',
                     subheading: 'Custom plugins and middleware to facilitate:',
                     list: [
                        'request authorization',
                        'caching',
                        'data normalization',
                        'error handling',
                        'logging'
                     ]
                  },
                  {
                     heading: 'Scripting & Maintenance',
                     subheading: '',
                     list: [
                        'Custom scripts to seed the database and run maintenance tasks',
                        'Cron jobs to refresh stats and clear cache (in the works...)'
                     ]
                  }
               ]
            }
         ]
      },
      {
         heading: 'More Key Features',
         subsections: [
            {
               heading: 'User Management & Auth',
               content: [
                  'Auth0 on the frontend for user management, authentication (login/logout), session management and authorization for protected pages and API routes. Auth0 on the backend, too, to handle authorization for protected routes.'
               ]
            },
            {
               heading: 'Multi-Tiered Caching',
               content: [
                  'To minimize how many request users make to third-party APIs, I cache search results:',
                  [
                     'In my database, with a long-ish TTL',
                     "Using in-memory cache on the server, with a medium-ish TTL. I'll replace this in-memory cache with Redis soon. Pretty excited about that :)",
                     'In the client app/browser, facilitated by Tanstack React-Query'
                  ],
                  '... and to minimize requests to my own database, I cache user and community data as needed, using the same strategy described for search results above.'
               ]
            },
            {
               heading: 'Centralized Logging',
               content: [
                  "Logging using Winston in both the frontend and backend, including a transport to send logs to a Loggly cloud instance for centralized logging (e.g. follow a user's request from button click to DB and back)."
               ]
            },
            {
               heading: 'Error Handling',
               content: [
                  'Scalable error handling with custom error classes and middleware to catch and handle errors in a consistent way. Also added a custom error boundary with fallback UI to handle uncaught errors in the frontend.'
               ]
            }
         ]
      },
      {
         heading: 'In Progress',
         subsections: [
            {
               heading: 'Tags',
               content: [
                  [
                     'Community tags shared by all users (e.g. Nostalgia, Chill, Background, Dance, Workout)',
                     'User-defined tags for personal use (e.g. "Songs Kyle Might Like" or "Rom-Coms for Pat")',
                     'Enables virtual lists',
                     'Facilitates discovery & organization'
                  ]
               ]
            },
            {
               heading: 'User-Curated Lists',
               content: [
                  [
                     'Manually curated, sorted lists, like playlists',
                     'Shareable, public or private',
                     'If public, other users can "like" the list'
                  ]
               ]
            },
            {
               heading: 'Community Lists & Stats',
               content: [
                  [
                     'Top 10 Scary Movies Right Now',
                     'Recently Added Podcasts',
                     'Most Added Fiction Books Last Month',
                     'Highest Rated Racing Video Games...',
                     'Most rewatched TV Shows',
                     "Probably include some cute li'l charts and graphs",
                     'Will have a cron job that refreshes stats by periodically running queries'
                  ]
               ]
            }
         ]
      },
      {
         heading: 'Coming Soon',
         subsections: [
            {
               heading: '',
               content: [
                  [
                     'Image gallery for things with multiple images',
                     'Visualization (charts and graphs). Your things by decade, by type, by number of times repeating, by when you first experienced them... Community wide charts and graphs, too.',
                     'People engine (find works and collaborations by people)',
                     "Social features. Find, follow and connect with people with similar interests. See a user's things (if they made their profile public).",
                     'News feeds related to your things, popular things, new things...',
                     'Export my things to CSV (already working) or to pretty formatted PDFs (or images). Make visually appealing displays of your things to share, frame, gift...',
                     'Feedback mechanism to encourage the user community to help decide what features to add or improve next.',
                     'Discovery features. If you like that TV Show, you might like this book and that podcast. People involved in this also worked on that. Other people who like this also like these. Explore things by genre, tags, language, country, decade, etc.',
                     'Distraction mode. Scroll through new things, popular things, things from the 90s...',
                     'iOS app and widget. '
                  ]
               ]
            }
         ]
      },
      {
         heading: 'Maybe Someday',
         subsections: [
            {
               heading: '',
               content: [
                  [
                     'Import things from other services, such as Goodreads. Connect your existing trackers, such as Goodreads, to sync your ratings and lists/shelves.',
                     'Android app.',
                     'Browser plugins.',
                     'API for other developers to build on top of.',
                     'Integration with other services, such as Spotify, Letterboxd, Steam, and so on.',
                     'Machine learning to make recommendations.',
                     'Voice commands.'
                  ]
               ]
            }
         ]
      },
      {
         heading: 'Still with Me?',
         layout: 'Cta',
         content: [
            'Thanks for reading all of that! This is a fun passion project.',
            "Let me know if you have any ideas or suggestions. Or let's build another app together!"
         ],
         link: {
            href: '/contact',
            text: "Let's connect!"
         }
      }
   ]
};

export default content;
