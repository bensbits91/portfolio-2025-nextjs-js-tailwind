import { ContactForm, ContactLinks } from '@/components/contact';
import { Heading, Text } from '@/components/typography';
import { Section } from '@/components/layout';

const Contact = () => {
   return (
      <>
         <Section top='xl' bottom='sm' width='sm'>
            <Heading level={1} appearance={1}>Get in touch</Heading>
            <Text color="white" size='lg'>
               I&apos;m always open to new opportunities and collaborations.
            </Text>
         </Section>
         <Section width='sm' bottom='lg'>
            <div className="mb-12">
               <ContactLinks />
            </div>
            <ContactForm />
         </Section>
      </>
   );
};

export default Contact;
