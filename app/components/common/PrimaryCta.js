import { CloudinaryImage } from '@/app/components/image';
import { HeadingTwo, P } from '@/app/components/typography';
import { Button } from '@/app/components/common';
import { IconBar } from '@/app/components/common';
import { ctaSkills, skillIcons } from '@/app/data';

const PrimaryCta = ({
   //    data,
   link = { href: '/contact', text: 'Contact me' },
   //    size = 'narrow',
   bigBottom = false,
   bg = 'teal'
}) => (
   <section className={`min-h-screen flex-col content-center ${bg === 'teal' ? 'bg-gradient-teal' : 'bg-transparent'}`}>
      <div
         className={`container mx-auto px-10 pb-20 pt-10 md:px-5 md:pb-32 md:pt-32 ${
            bigBottom ? 'mb-20 md:mb-32' : 'mb-0'
         }`}>
         <div className="flex flex-col items-start justify-around md:flex-row">
            <div>
               <HeadingTwo color="gray">Frontend + Fullstack</HeadingTwo>

               <div className="mb-12 md:max-w-[640px]">
                  <IconBar wrap icons={skillIcons(ctaSkills, true)} />
                  {/* <Button link="/skills">View all skills</Button> */}
               </div>

               <div className="mb-8 flex gap-12 text-bb-gray md:gap-20">
                  <div>
                     <div className="text-4xl md:text-5xl">23+</div> years in{' '}
                     <div className="text-xl md:text-2xl">Tech</div>
                  </div>
                  <div>
                     <div className="text-4xl md:text-5xl">12+</div> years in{' '}
                     <div className="text-xl md:text-2xl">Frontend</div>
                  </div>
                  <div>
                     <div className="text-4xl md:text-5xl">9+</div> years in{' '}
                     <div className="text-xl md:text-2xl">Fullstack</div>
                  </div>
               </div>

               <div className="hidden md:block">
                  <Button inverted link={link.href}>
                     <div className="md:min-w-[400px]">{link.text}</div>
                  </Button>
               </div>
            </div>
            <div className='mx-auto md:mx-0'>
               <CloudinaryImage
                  cloudinaryId="ben-2024-a-circle_ra873b"
                  alt="Photo of Ben Brooks"
                  width={200}
                  height={200}
               />
            </div>
         </div>

         <div className="block md:hidden">
            <Button inverted link={link.href}>
               <div className="md:min-w-[400px]">{link.text}</div>
            </Button>
         </div>
      </div>
   </section>
);

export default PrimaryCta;
