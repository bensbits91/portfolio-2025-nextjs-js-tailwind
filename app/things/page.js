import Link from 'next/link';
import {
   HeroSection,
   OneColumnSection,
   TwoColumnSection
} from '@/app/components/layout';
import {
   HeadingOne,
   HeadingTwo,
   HeadingThree,
   SubtleText
} from '@/app/components/typography';
import { CloudinaryImage } from '@/app/components/image';

/*
 * todo:
 * fun heading colors
 * add link somewhere on homepage
 * add to project data/page
 * make some content truncated and/or collapsible/expandable, or tabbed
 * add images
 */

const Things = () => {
   return (
      <>
         <HeroSection>
            <HeadingOne>Things App 2.0</HeadingOne>
            <SubtleText textCenter>Very much a WIP</SubtleText>
         </HeroSection>
         <OneColumnSection bigBottom>
            <HeadingTwo color="purple">Overview</HeadingTwo>
            <p className="mb-4 text-sm">
               The Things app is a personal tracker and rating system for all
               the things you do, watch, read, play, listen to, and so on.
            </p>
            <HeadingTwo color="purple">Track, Rate & Discover</HeadingTwo>
            <p className="mb-4 text-sm">
               Track anything. Kind of like Goodreads but for everything. See
               what you've done, what you're currently doing, and what you want
               to do. Track how many times you've watched a movie, read a book,
               played a game, and so forth.
            </p>
            <p className="mb-4 text-sm">
               Rate anything. See your favorite things across different
               categories. View all of your favorite things in fun, engaging
               ways.
            </p>
            <p className="mb-4 text-sm">
               Discover new things in all-kindsa ways. Get recommondations on
               books you might like based on movies you've seen. Find new
               podcasts based on the video games you play. See what your friends
               are into. Find things by genre, tags, language, country, decade,
               and whatnot.
            </p>
            <HeadingTwo color="purple">Supported Types & Beyond</HeadingTwo>
            <p className="mb-4 text-sm">
               Add anything just by typing a name. Then add ratings, indicate
               your status, add a review, add notes and tags, yada yada.
            </p>
            <p className="mb-4 text-sm">
               Currently supported things with search results include books,
               movies, TV shows and video games. If you add a thing that is a
               supported type, see search results and select the thing you want
               to track. When you add a thing that supports search results, you
               can see the cover art, description, related people, and more.
            </p>
            <HeadingTwo color="purple">More Types on the Way!</HeadingTwo>
            <p className="mb-4 text-sm">
               Search results coming soon for podcasts, bands, albums, songs,
               board and card games, actors and stand-up comics, athletes and
               teams, and comic books.
            </p>
            <p className="mb-4 text-sm">
               I designed and developed the backend to support adding search
               results for new types of things in the future. The backend also
               normalizes any data needed by the frontend, so client apps aren't
               affected by the addition of new types. We can always add
               "unsupported" things (without search results).
            </p>
            <HeadingTwo color="purple">Why a New Version?</HeadingTwo>
            <p className="mb-4 text-sm">
               I've been using verion 1.0 of the Things app and have curated my
               own library of things. It works well for a small user base.
            </p>
            <p className="mb-4 text-sm">
               Version 2.0 separates the frontend and backend, with a focus on
               security and scalability. Auth0, multi-tier caching,
               social/community features, support for multiple frontends (e.g.
               iOS & Andriod), and so on.
            </p>
            <p className="mb-4 text-sm">
               I also wanted to rebuild the frontend from scratch to make it
               faster, lighter, more accessible, and more customizable. No need
               for a UI library, I like building custom components. No need for
               a CSS framework. No need for Redux or Zustand for state
               management (yet).
            </p>
         </OneColumnSection>
         <TwoColumnSection
            bigBottom
            columns={[
               {
                  content: (
                     <div>
                        <HeadingTwo color="purple">Frontend</HeadingTwo>
                        <div className="mb-8">
                           <ul className="mb-4 ml-6 list-outside list-disc text-sm">
                              <li className="mb-1">Node.js</li>
                              <li className="mb-1">React.js</li>
                              <li className="mb-1">Next.js</li>
                              <li className="mb-1">CSS Modules</li>
                              <li className="mb-1">Tanstack React-Query</li>
                           </ul>
                           <a
                              href="https://github.com/bensbits91/things-client"
                              target="_blank"
                              rel="noreferrer"
                              className="hover-delay hover-brightness block w-52 rounded-sm border-2 border-bb-gray-500 p-4 text-center font-roboto-sans text-sm tracking-wide text-bb-gray">
                              <div className="flex items-center gap-2">
                                 <CloudinaryImage
                                    cloudinaryId="github1_o1ok5i"
                                    alt="GitHub"
                                    width={30}
                                    height={30}
                                 />
                                 <SubtleText>View Frontend Code</SubtleText>
                              </div>
                           </a>
                        </div>
                        <div>
                           <HeadingThree color="yellow">
                              Custom Components
                           </HeadingThree>
                           <p className="mb-4 text-sm">
                              100% custom components, no third-party UI library.
                              Faster, lighter and easier to customize :)
                           </p>
                           <ul className="mb-4 ml-6 list-outside list-disc text-sm">
                              <li className="mb-1">
                                 Layout (responsive sections and such)
                              </li>
                              <li className="mb-1">
                                 Typography (headings and other types of text)
                              </li>
                              <li className="mb-1">
                                 Inputs including pretty dropdowns, buttons &
                                 ratings
                              </li>
                              <li className="mb-1">
                                 Image component to help optimize images for
                                 different devices
                              </li>
                              <li className="mb-1">
                                 Iconography (SVGs wrapped in components, can be
                                 modified with CSS)
                              </li>
                              <li className="mb-1">
                                 View selector for lists of things and search
                                 results. Choose between table, grid, list &
                                 photo wall. Supports infinite scrolling.
                                 sorting, filtering and more.
                              </li>
                              <li className="mb-1">
                                 Modal with thing-specific controls and subtle
                                 animation
                              </li>
                              <li className="mb-1">
                                 Toast for messages and user-facing errors, with
                                 subtle animation
                              </li>
                           </ul>
                        </div>
                        <div>
                           <HeadingThree color="yellow">Style</HeadingThree>
                           <ul className="mb-4 ml-6 list-outside list-disc text-sm">
                              <li className="mb-1">
                                 Custom style using CSS Modules
                              </li>
                              <li className="mb-1">
                                 Responsive layouts & grids
                              </li>
                              <li className="mb-1">Palete & theming...</li>
                           </ul>
                        </div>
                        <div>
                           <HeadingThree color="yellow">Logic</HeadingThree>
                           <ul className="mb-4 ml-6 list-outside list-disc text-sm">
                              <li className="mb-1">
                                 Custom hooks (controllers) to encapsulate logic
                              </li>
                              <li className="mb-1">
                                 Tanstack React-Query to handle fetching and
                                 caching data
                              </li>
                              <li className="mb-1">
                                 Services & Routes to handle communications with
                                 the backend
                              </li>
                           </ul>
                        </div>
                     </div>
                  )
               },
               {
                  content: (
                     <div>
                        <HeadingTwo color="purple">Backend</HeadingTwo>
                        <div className="mb-8">
                           <ul className="mb-4 ml-6 list-outside list-disc text-sm">
                              <li className="mb-1">Node.js</li>
                              <li className="mb-1">Fastify</li>
                              <li className="mb-1">
                                 MongoDB, hosted on Atlas, managed with Mongoose
                              </li>
                              <li className="mb-1">
                                 Caching -- in-memory caching for now; will
                                 replace with Redis soon
                              </li>
                           </ul>
                           <a
                              href="https://github.com/bensbits91/things-server"
                              target="_blank"
                              rel="noreferrer"
                              className="hover-delay hover-brightness block w-52 rounded-sm border-2 border-bb-gray-500 p-4 text-center font-roboto-sans text-sm tracking-wide text-bb-gray">
                              <div className="flex items-center gap-2">
                                 <CloudinaryImage
                                    cloudinaryId="github1_o1ok5i"
                                    alt="GitHub"
                                    width={30}
                                    height={30}
                                 />
                                 <SubtleText>View Backend Code</SubtleText>
                              </div>
                           </a>
                        </div>
                        <div>
                           <HeadingThree color="yellow">
                              Handling Requests & Data
                           </HeadingThree>
                           <ul className="mb-4 ml-6 list-outside list-disc text-sm">
                              <li className="mb-1">
                                 Routes to handle incoming requests
                              </li>
                              <li className="mb-1">
                                 Controllers to handle logic
                              </li>
                              <li className="mb-1">
                                 Services to handle communications and aggregate
                                 data
                              </li>
                              <li className="mb-1">
                                 Models to define schemas and validate data
                              </li>
                           </ul>
                           <HeadingThree color="yellow">
                              Logic & Authorization
                           </HeadingThree>
                           <ul className="mb-4 ml-6 list-outside list-disc text-sm">
                              <li className="mb-1">
                                 Custom plugins and middleware to facilitate
                                 request authorization, data caching, data
                                 normalization and cleansing, error handling and
                                 logging
                              </li>
                           </ul>
                           <HeadingThree color="yellow">
                              Scripting & Maintenance
                           </HeadingThree>
                           <ul className="mb-4 ml-6 list-outside list-disc text-sm">
                              <li className="mb-1">
                                 Custom scripts to seed the database and run
                                 maintenance tasks
                              </li>
                              <li className="mb-1">
                                 Cron jobs to refresh stats and clear cache (in
                                 the works...)
                              </li>
                           </ul>
                        </div>
                     </div>
                  )
               }
            ]}
         />
         <OneColumnSection bigBottom>
            <HeadingTwo color="purple">More Key Features</HeadingTwo>
            <HeadingThree color="yellow">User Management & Auth</HeadingThree>
            <p className="mb-4 text-sm">
               Auth0 on the frontend for user management, authentication
               (login/logout), session management and authorization for
               protected pages and API routes. Auth0 on the backend, too, to
               handle authorization for protected routes.
            </p>
            <HeadingThree color="yellow">Multi-Tiered Caching</HeadingThree>
            <p className="mb-4 text-sm">
               To minimize how many request we make to third-party APIs, we
               cache search results in:
            </p>
            <ul className="mb-4 ml-6 list-outside list-disc text-sm">
               <li className="mb-1">In our database, with a long-ish TTL</li>
               <li className="mb-1">
                  In-memory cache on the server, with a medium-ish TTL. I'll
                  replace this in-memory cache with Redis soon. Pretty excited
                  about that :)
               </li>
               <li className="mb-1">
                  In the client app/browser, facilitated by Tanstack React-Query
               </li>
            </ul>
            <p className="mb-4 text-sm">
               ... and to minimize our requests to our own database, we cache
               user and community data as needed, using the same strategy
               described for search results above.
            </p>
            <HeadingThree color="yellow">Centralized Logging</HeadingThree>
            <p className="mb-4 text-sm">
               Logging using Winston in both the frontend and backend, including
               a transport to send logs to a Loggly cloud instance for
               centralized logging (e.g. follow a user's request from button
               click to DB and back).
            </p>
            <HeadingThree color="yellow">Error Handling</HeadingThree>
            <p className="mb-4 text-sm">
               Scalable error handling with custom error classes and middleware
               to catch and handle errors in a consistent way. Also added a
               custom error boundary with fallback UI to handle uncaught errors
               in the frontend.
            </p>
         </OneColumnSection>
         <OneColumnSection bigBottom>
            <HeadingTwo color="purple">In Progress</HeadingTwo>
            <HeadingThree color="yellow">Tags</HeadingThree>
            <ul className="mb-4 ml-6 list-outside list-disc text-sm">
               <li className="mb-1">
                  Community tags shared by all users (e.g. Nostalgia, Chill,
                  Background, Dance, Workout)
               </li>
               <li className="mb-1">
                  User-defined tags for personal use (e.g. "Songs Kyle Might
                  Like" or "Rom-Coms for Pat")
               </li>
               <li className="mb-1">Enables virtual lists</li>
               <li className="mb-1">Facilitates discovery & organization</li>
            </ul>
            <HeadingThree color="yellow">User-Curated Lists</HeadingThree>
            <ul className="mb-4 ml-6 list-outside list-disc text-sm">
               <li className="mb-1">
                  Manually curated, sorted lists, like playlists
               </li>
               <li className="mb-1">Shareable, public or private</li>
               <li className="mb-1">
                  If public, other users can "like" the list
               </li>
            </ul>
            <HeadingThree color="yellow">Community Lists & Stats</HeadingThree>
            <ul className="mb-4 ml-6 list-outside list-disc text-sm">
               <li className="mb-1">Top 10 Scary Movies Right Now</li>
               <li className="mb-1">Recently Added Podcasts</li>
               <li className="mb-1">Most Added Fiction Books Last Month</li>
               <li className="mb-1">Highest Rated Racing Video Games...</li>
               <li className="mb-1">Most rewatched TV Shows</li>
               <li className="mb-1">
                  Probably include some cute li'l charts and graphs
               </li>
               <li className="mb-1">
                  Will have a cron job that refreshes stats by periodically
                  running queries
               </li>
            </ul>
         </OneColumnSection>
         <OneColumnSection bigBottom>
            <HeadingTwo color="purple">Coming Soon</HeadingTwo>
            <ul className="mb-4 ml-6 list-outside list-disc text-sm">
               <li className="mb-1">
                  Image gallery for things with multiple images
               </li>
               <li className="mb-1">
                  Visualization (charts and graphs). Your things by decade, by
                  type, by number of times repeating, by when you first
                  experienced them... Community wide charts and graphs, too.
               </li>
               <li className="mb-1">
                  People engine (find works and collaborations by people)
               </li>
               <li className="mb-1">
                  Social features. Find, follow and connect with people with
                  similar interests. See a user's things (if they made their
                  profile public).
               </li>
               <li className="mb-1">
                  News feeds related to your things, popular things, new
                  things...
               </li>
               <li className="mb-1">
                  Export my things to CSV (already working) or to pretty
                  formatted PDFs (or images). Make visually appealing displays
                  of your things to share, frame, gift...
               </li>
               <li className="mb-1">
                  Feedback mechanism to encourage the user community to help
                  decide what features to add or improve next.
               </li>
               <li className="mb-1">
                  Discovery features. If you like that TV Show, you might like
                  this book and that podcast. People involved in this also
                  worked on that. Other people who like this also like these.
                  Explore things by genre, tags, language, country, decade, etc.
               </li>
               <li className="mb-1">
                  Distraction mode. Scroll through new things, popular things,
                  things from the 90s...
               </li>
               <li className="mb-1">SearchiOS app and widget.</li>
            </ul>
         </OneColumnSection>
         <OneColumnSection bigBottom>
            <HeadingTwo color="purple">Maybe Someday</HeadingTwo>
            <ul className="mb-4 ml-6 list-outside list-disc text-sm">
               <li className="mb-1">
                  Import things from other services, such as Goodreads. Connect
                  your existing trackers, such as Goodreads, to sync your
                  ratings and lists/shelves.
               </li>
               <li className="mb-1">Android app.</li>
            </ul>
         </OneColumnSection>
         <OneColumnSection bigBottom>
            <HeadingTwo color="purple">Still with Me?</HeadingTwo>
            <p className="mb-4 text-sm">
               Thanks for reading all that! This is a fun passion project.
               <Link
                  href="/contact"
                  className="hover-delay hover-brightness text-bb-teal">
                  Let me know if you have any ideas or suggestions!
               </Link>
            </p>
         </OneColumnSection>
      </>
   );
};

export default Things;
