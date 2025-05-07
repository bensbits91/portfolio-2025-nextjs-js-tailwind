'use client';
import useContactForm from '@/hooks/useContactForm';
import ContactLinks from './ContactLinks';
import clsx from 'clsx';

const ContactForm = ({ dark = false }: { dark?: boolean }) => {
   const {
      formData,
      isSending,
      isSent,
      errorData,
      handleChange,
      handleSubmit
   } = useContactForm();

   const SendingComponent = () => (
      <div aria-live="polite" className="mt-8 flex flex-col items-center gap-4">
         <p>Sending message...</p>
      </div>
   );

   const SentComponent = () => (
      <div aria-live="polite" className="mt-8 flex flex-col items-center gap-4">
         <p>Thanks! I&apos;ll get back to you asap</p>
         <ContactLinks />
      </div>
   );

   const ErrorComponent = ({
      error
   }: {
      error: Record<string, unknown> | null;
   }) => (
      <div
         role="alert"
         aria-live="assertive"
         className="mt-8 flex flex-col items-center gap-4">
         <p>Error: {JSON.stringify(error)}</p>
         <ContactLinks />
      </div>
   );
   return (
      <>
         {!(isSending || isSent || errorData) && (
            <form onSubmit={handleSubmit}>
               <div
                  className={clsx(
                     'form-group mb-4 flex flex-col gap-1',
                     dark ? 'light-text' : 'dark-text'
                  )}>
                  <label htmlFor="name">Name</label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     placeholder="Your name"
                     value={formData.name}
                     onChange={handleChange}
                     required
                     className="wcag-focus h-9 rounded bg-[var(--bb-gray-25)] px-3"
                  />
               </div>
               <div
                  className={clsx(
                     'form-group mb-4 flex flex-col gap-1',
                     dark ? 'light-text' : 'dark-text'
                  )}>
                  <label htmlFor="email">Email</label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="Your email address"
                     value={formData.email}
                     onChange={handleChange}
                     required
                     className="wcag-focus h-9 rounded bg-[var(--bb-gray-25)] px-3"
                  />
               </div>
               <div
                  className={clsx(
                     'form-group mb-4 flex flex-col gap-1',
                     dark ? 'light-text' : 'dark-text'
                  )}>
                  <label htmlFor="message">Message</label>
                  <textarea
                     id="message"
                     name="message"
                     placeholder="Your message"
                     value={formData.message}
                     onChange={handleChange}
                     required
                     className="wcag-focus h-24 rounded bg-[var(--bb-gray-25)] p-3"
                  />
               </div>
               <button
                  type="submit"
                  id="submitBtn"
                  className={clsx(
                     'wcag-focus hover-delay hover-brightness mt-4 w-full rounded-md p-4 text-center font-roboto-sans text-sm tracking-wide md:w-40',
                     dark ? 'dark-text bg-bb-teal' : 'bg-bb-gray text-bb-teal'
                  )}>
                  Send
               </button>
            </form>
         )}
         {isSending && <SendingComponent />}
         {isSent && <SentComponent />}
         {errorData && <ErrorComponent error={errorData} />}
      </>
   );
};

export default ContactForm;
