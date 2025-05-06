'use client';
import { useState } from 'react';
import ContactLinks from './ContactLinks';
import clsx from 'clsx';

const ContactForm = ({ dark = false }: { dark?: boolean }) => {
   const initialData = {
      name: '',
      email: '',
      message: ''
   };
   const [formData, setFormData] = useState({ ...initialData });
   const [isSending, setIsSending] = useState(false);
   const [isSent, setIsSent] = useState(false);
   const [errorData, setErrorData] = useState<ErrorData | null>(null);

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const { name, value } = e.target;
      setFormData((prevData: typeof initialData) => ({
         ...prevData,
         [name]: value
      }));
   };

   const handleSending = () => {
      setIsSending(true);
   };

   const handleSuccess = () => {
      setIsSending(false);
      setIsSent(true);
      setFormData(initialData);
   };

   interface ErrorData {
      message?: string;
      [key: string]: unknown;
   }

   const handleError = (error: ErrorData) => {
      setIsSending(false);
      setIsSent(false);
      setErrorData(error);
   };

   interface FetchErrorData extends ErrorData {
      message: string;
   }

   const handleSubmit = async (
      e: React.FormEvent<HTMLFormElement>
   ): Promise<void> => {
      e.preventDefault();
      handleSending();
      try {
         const response: Response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
         });

         if (response.ok) {
            handleSuccess();
         } else {
            console.info('bb ~ response:', response);
            const errorData: FetchErrorData = {
               message: await response.text()
            };
            handleError(errorData);
         }
      } catch (error) {
         console.error('bb ~ error:', error);
         handleError(error as ErrorData);
      }
   };

   const SendingComponent = () => (
      <div className="mt-8 flex flex-col items-center gap-4">
         <p>Sending message...</p>
      </div>
   );

   const SentComponent = () => (
      <div className="mt-8 flex flex-col items-center gap-4">
         <p>Thanks! I&apos;ll get back to you asap</p>
         <ContactLinks />
      </div>
   );

   interface ErrorComponentProps {
      error: ErrorData;
   }

   const ErrorComponent = ({ error }: ErrorComponentProps) => (
      <div className="mt-8 flex flex-col items-center gap-4">
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
                     className="h-9 rounded bg-[var(--bb-gray-25)] px-3"
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
                     className="h-9 rounded bg-[var(--bb-gray-25)] px-3"
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
                     className="h-24 rounded bg-[var(--bb-gray-25)] p-3"
                  />
               </div>
               <button
                  type="submit"
                  id="submitBtn"
                  className={clsx(
                     'hover-delay hover-brightness mt-4 w-full rounded-md  p-4 text-center font-roboto-sans text-sm tracking-wide  md:w-40',
                     dark ? 'dark-text bg-bb-teal' : 'text-bb-teal bg-bb-gray'
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
