import { ContactForm, ContactLinks } from '@/app/components/contact';
import { HeadingOne, Subheading } from '@/app/components/typography';
import { HeroSection, OneColumnSection } from '@/app/components/layout';

const Contact = () => {
   return (
      <>
         <HeroSection bigBottom={false}>
            <HeadingOne>Get in touch</HeadingOne>
            <Subheading>
               I'm always open to new opportunities and collaborations. Feel
               free to reach out!
            </Subheading>
         </HeroSection>
         <OneColumnSection size="narrow" bigBottom>
            <div className="mb-12">
               <ContactLinks />
            </div>
            <ContactForm />
         </OneColumnSection>
      </>
   );
};

export default Contact;
