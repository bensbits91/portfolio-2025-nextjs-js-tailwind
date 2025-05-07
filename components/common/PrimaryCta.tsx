import { CloudinaryImage } from '@/components/image';
import { Heading } from '@/components/typography';
import { ContactPopper } from '@/components/contact';
import { IconBar } from '@/components/common';
import { ctaSkills, skillIcons } from '@/data/skills';

const PrimaryCta = ({
   link = { href: '/contact', text: 'Contact me' },
   bigBottom = false,
   bg = 'teal'
}) => (
   <section
      className={`min-h-screen flex-col content-center ${bg === 'teal' ? 'bg-gradient-teal' : 'bg-transparent'}`}>
      <div
         className={`container mx-auto px-10 pb-20 pt-10 md:px-5 md:pb-32 md:pt-32 ${
            bigBottom ? 'mb-20 md:mb-32' : 'mb-0'
         }`}>
         <div className="flex flex-col items-start justify-around md:flex-row">
            <div>
               <Heading level={2} appearance={2} color="dark" bottom="md">
                  Frontend + Fullstack
               </Heading>

               <div className="mb-12 md:max-w-[640px]">
                  <IconBar
                     wrap
                     icons={skillIcons(ctaSkills, true).filter(
                        (
                           icon
                        ): icon is {
                           src: string;
                           altText: string;
                           iconName: string;
                        } => icon.src !== undefined
                     )}
                  />
               </div>

               <div className="mb-8 flex gap-12 text-bb-gray md:gap-20">
                  <div>
                     <div className="text-4xl md:text-5xl">23+</div> years in
                     <div className="text-xl md:text-2xl">Tech</div>
                  </div>
                  <div>
                     <div className="text-4xl md:text-5xl">12+</div> years in
                     <div className="text-xl md:text-2xl">Frontend</div>
                  </div>
                  <div>
                     <div className="text-4xl md:text-5xl">9+</div> years in
                     <div className="text-xl md:text-2xl">Fullstack</div>
                  </div>
               </div>

               <div className="hidden md:block">
                  <ContactPopper dark>
                     <button
                        aria-label="Open contact form"
                        className="hover-delay hover-brightness wcag-focus mt-12 min-w-[400px] max-w-max rounded-md bg-bb-gray p-4 text-bb-teal">
                        {link.text}
                     </button>
                  </ContactPopper>
               </div>
            </div>
            <div className="mx-auto md:mx-0">
               <CloudinaryImage
                  cloudinaryId="ben-2024-a-circle_ra873b"
                  alt="Photo of Ben Brooks"
                  width={200}
                  height={200}
               />
            </div>
         </div>

         <div className="block md:hidden">
            <ContactPopper dark>
               <button
                  aria-label="Open contact form"
                  className="wcag-focus mt-12 w-full rounded-md bg-bb-gray p-4 text-bb-teal">
                  {link.text}
               </button>
            </ContactPopper>
         </div>
      </div>
   </section>
);

export default PrimaryCta;
