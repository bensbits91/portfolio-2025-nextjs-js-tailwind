import Form from '@/app/components/contact/Form';
import { HeadingOne, Subheading } from '@/app/components/typography';
import { HeroSection, OneColumnSection } from '@/app/components/layout';

const Contact = () => {
   return (
      <>
         <HeroSection>
            <HeadingOne>Get in touch</HeadingOne>
            <Subheading>
               I'm always open to new opportunities and collaborations. Feel
               free to reach out to me at
            </Subheading>
         </HeroSection>
         <OneColumnSection size="narrow">
            <p>linked in link</p>
            <Form />
         </OneColumnSection>
      </>
   );
};

export default Contact;
