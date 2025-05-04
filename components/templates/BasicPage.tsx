import { TwoColumnSection, Section } from '@/components/layout';
import { Heading, Text, List } from '@/components/typography';
import {
   Breadcrumb,
   PrimaryCta,
   StyledLink,
   IconBar
} from '@/components/common';
import { skillIcons } from '@/data/skills';

interface SectionProps {
   layout?: string;
   heading?: string;
   content?: (
      | string
      | string[]
      | { heading: string; subheading: string; list: string[] }
   )[]; // Allow nested objects
   subsections?: {
      heading?: string;
      subheading?: string | string[];
      list?: string[];
      stack?: string[];
      codeLink?: {
         text: string;
         href: string;
      };
      content?: (
         | string
         | string[]
         | { heading: string; subheading: string; list: string[] }
      )[]; // Allow nested objects
   }[];
   bigBottom?: boolean;
   stack?: string[];
   link?: {
      text: string;
      href: string;
   };
   skillNames?: string[];
}

interface BasicPageProps {
   content: {
      heading?: string;
      subheading?: string;
      skillNames?: string[];
      sections?: SectionProps[];
   };
}

interface ContentItemProps {
   item:
      | string
      | string[]
      | { heading: string; subheading: string; list: string[] };
}

const BasicPage = ({ content }: BasicPageProps) => {
   const { heading, subheading, skillNames, sections } = content;

   const ContentItem = ({ item }: ContentItemProps) => {
      if (typeof item === 'string') {
         return <Text>{item}</Text>;
      }

      if (Array.isArray(item)) {
         return <List items={item} />;
      }

      return (
         <div>
            <Heading level={3} appearance={4} color="tertiary">
               {item.heading}
            </Heading>
            <Text>{item.subheading}</Text>
            <List items={item.list} />
         </div>
      );
   };

   return (
      <div key="basic-page">
         <Breadcrumb />

         {heading && (
            <Section top="xl" bottom="lg" width="md">
               <Heading>{heading}</Heading>
               <Text>{subheading}</Text>

               {skillNames && (
                  <div className="my-2">
                     <IconBar
                        icons={skillIcons(skillNames).filter(
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
               )}
            </Section>
         )}

         {sections &&
            sections.map((section, index) => {
               const {
                  layout = 'OneColumnSection',
                  heading,
                  content,
                  subsections
                  // bigBottom
               } = section;

               // if (layout === 'Primary') {
               //    return (
               //       <Cta
               //          key={index}
               //          data={{
               //             ...section,
               //             content: section.content?.flatMap(item =>
               //                typeof item === 'string'
               //                   ? [item]
               //                   : Array.isArray(item)
               //                   ? item
               //                   : item.list
               //             )
               //          }}
               //          bigBottom={bigBottom}
               //          bg="teal"
               //       />
               //    );
               // }

               if (layout === 'TwoColumnSection') {
                  if (!subsections || subsections.length === 0) return null;

                  return (
                     <TwoColumnSection
                        key={index}
                        columns={subsections
                           .map((section, SubsectionIndex) => {
                              const { heading, stack, codeLink, content } =
                                 section;

                              if (!content) return null;

                              return {
                                 content: (
                                    <div key={SubsectionIndex}>
                                       <Heading
                                          level={2}
                                          appearance={2}
                                          color="secondary">
                                          {heading}
                                       </Heading>
                                       <div className="mb-8">
                                          {stack && <List items={stack} />}
                                          {codeLink && (
                                             <StyledLink
                                                href={codeLink.href}
                                                icon="GitHub"
                                                newTab
                                                text={codeLink.text}
                                             />
                                          )}
                                       </div>
                                       {content.map((item, contentIndex) => {
                                          if (typeof item === 'string') {
                                             return (
                                                <Text key={contentIndex}>
                                                   {item}
                                                </Text>
                                             );
                                          }

                                          if (Array.isArray(item)) {
                                             return (
                                                <List
                                                   key={contentIndex}
                                                   items={item}
                                                />
                                             );
                                          }

                                          return null;
                                       })}
                                    </div>
                                 )
                              };
                           })
                           .filter(column => column !== null)}
                     />
                  );
               }

               return (
                  <Section key={index}>
                     <Heading level={2} appearance={2} color="secondary" bottom="md">
                        {heading}
                     </Heading>

                     {content &&
                        content.map((item, index) => (
                           <ContentItem key={index} item={item} />
                        ))}

                     {subsections &&
                        subsections.map((section, index) => {
                           const { heading, content } = section;
                           return (
                              <div key={index} className="mb-8 md:ml-4">
                                 <Heading
                                    level={3}
                                    appearance={4}
                                    color="tertiary">
                                    {heading}
                                 </Heading>
                                 {content &&
                                    content.map((item, index) => (
                                       <ContentItem key={index} item={item} />
                                    ))}
                              </div>
                           );
                        })}
                  </Section>
               );
            })}
         <PrimaryCta />
      </div>
   );
};

export default BasicPage;
