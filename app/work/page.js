import Link from 'next/link';
import { FeaturedProjectCard, ProjectGrid } from '@/app/components/projects';
import {
   HeadingOne,
   HeadingTwo,
   SubtleText,
   P
} from '@/app/components/typography';
import { HeroSection, OneColumnSection } from '@/app/components/layout';
import { Cta } from '@/app/components/common';

const Work = () => {
   return (
      <>
         <HeroSection size="wide" bigBottom={false}>
            <HeadingOne>Work Samples</HeadingOne>
            <HeadingTwo>Recent Projects</HeadingTwo>
            <P>
               In 2025, I've been doing contract work, contributing to projects
               and expanding my skills through passion projects. View some of my
               recent work below, or{' '}
               <Link
                  className="inline text-sm text-bb-teal"
                  href="https://www.benbdev.com/">
                  check out my new contracting website.
               </Link>
            </P>
         </HeroSection>
         <ProjectGrid onOrAfter={[2025]} />
         <Cta
            data={{
               heading: '2021 to 2024',
               layout: 'Cta',
               content: [
                  'Spent almost four years at ZenBusiness working on the public website, customer-facing apps, internal tools, APIs, microservices, experiments and more.'
               ],
               link: {
                  href: '/experience',
                  text: 'Read more about my experience'
               }
            }}
            bg="teal"
         />
         <HeroSection size="wide" bigBottom={false}>
            <HeadingTwo>2021 &amp; Earlier</HeadingTwo>
            <P>
               From 2013 to 2021, I built hundreds of websites and apps for all
               kinds of clients. View some of reusalbe components below, or{' '}
               <Link href="/experience">read more about my experience.</Link>
            </P>
         </HeroSection>
         <ProjectGrid before={[2025]} />
         <Cta
            data={{
               heading: 'Need help with a project?',
               layout: 'Cta',
               content: ["Let's chat and see if I can help."],
               link: {
                  href: '/contact',
                  text: "Let's connect!"
               }
            }}
            bg="teal"
         />
      </>
   );
};

export default Work;
