import { ContactForm, ContactLinks } from '@/components/contact';
import { HeadingOne, Text } from '@/components/typography';
import { Section } from '@/components/layout';

const Contact = () => {
   return (
      <>
         <Section top='xl' bottom='sm' width='sm'>
            <HeadingOne>Get in touch</HeadingOne>
            <Text color="white" size='lg'>
               I&apos;m always open to new opportunities and collaborations. Feel
               free to reach out!
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
