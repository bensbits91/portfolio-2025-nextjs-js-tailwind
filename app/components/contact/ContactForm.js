'use client';
import { useState } from 'react';
import { HeadingTwo, HeadingThree } from '@/app/components/typography';
import ContactLinks from './ContactLinks';
import { CloudinaryImage } from '../image';
import { noop } from '@/app/utils';

// todo: break into smaller components

const ContactForm = () => {
   const initialData = {
      name: '',
      email: '',
      message: ''
   };
   const [formData, setFormData] = useState({ ...initialData });
   const [isSending, setIsSending] = useState(false);
   const [isSent, setIsSent] = useState(false);
   const [errorData, setErrorData] = useState(null);

   const showModal = isSending || isSent || errorData;

   const handleChange = e => {
      const { name, value } = e.target;
      setFormData(
         prevData => ({
            ...prevData,
            [name]: value
         }),
         []
      );
   };

   const handleSending = () => {
      setIsSending(true);
   };

   const handleSuccess = () => {
      setIsSending(false);
      setIsSent(true);
      setFormData(initialData);
   };

   const handleError = error => {
      setIsSending(false);
      setIsSent(false);
      setErrorData(error);
   };

   const handleSubmit = async e => {
      e.preventDefault();
      handleSending();
      try {
         const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
         });

         if (response.ok) {
            handleSuccess();
         } else {
            console.log('bb ~ response:', response);
            handleError(response);
         }
      } catch (error) {
         console.log('bb ~ error:', error);
         handleError(error);
      }
   };

   const closeModal = () => {
      setIsSending(false);
      setIsSent(false);
      setErrorData(null);
   };

   const SendingComponent = () => (
      <div className="mt-8 flex flex-col items-center gap-4">
         <p>Sending message...</p>
      </div>
   );

   const SentComponent = () => (
      <div className="mt-8 flex flex-col items-center gap-4">
         <p>Thanks! I'll get back to you asap</p>
         <ContactLinks />
      </div>
   );

   const ErrorComponent = error => (
      <div className="mt-8 flex flex-col items-center gap-4">
         <p>Error: {JSON.stringify(error)}</p>
         <ContactLinks />
      </div>
   );

   const CloseButton = () => (
      <button
         className="lg:transition-all lg:duration-300 lg:ease-in-out lg:hover:scale-125"
         onClick={closeModal}>
         <CloudinaryImage
            cloudinaryId="close_wd9td4"
            alt="Close"
            width="24"
            height="24"
         />
      </button>
   );

   const Modal = () => {
      let heading = '';
      switch (true) {
         case isSending:
            heading = 'Sending message...';
            break;
         case isSent:
            heading = 'Message sent :)';
            break;
         case errorData !== null:
            heading = 'Error seding message :/';
            break;
         default:
            heading = '';
      }

      return (
         <>
            {showModal && (
               <div
                  onClick={!isSending ? closeModal : noop}
                  className="fixed inset-0 z-40 bg-black bg-opacity-50"
               />
            )}
            <div
               className={`fixed bottom-[5vh] left-[7.5vw] z-50 h-[85vh] w-[85vw] rounded-lg bg-[--bb-dark-gray-900] p-4 md:left-[5vw] md:w-[90vw] ${
                  showModal ? 'translate-y-0' : 'translate-y-[100vh]'
               } transform transition-transform duration-500 ease-in-out`}>
               <div className="relative h-full text-[--bb-dark-gray-200] md:p-4">
                  <div className="flex h-16 w-full items-start justify-between">
                     <div className="hidden items-baseline gap-4 sm:flex">
                        <HeadingTwo>{heading}</HeadingTwo>
                     </div>
                     <div className="flex items-baseline gap-4 sm:hidden">
                        <HeadingThree>{heading}</HeadingThree>
                     </div>
                     {!isSending && <CloseButton />}
                  </div>
                  <div className="h-[calc(100%-60px)] overflow-y-auto px-5">
                     {isSending && <SendingComponent />}
                     {isSent && <SentComponent />}
                     {errorData && <ErrorComponent error={errorData} />}
                  </div>
               </div>
            </div>
         </>
      );
   };

   // note to self: moving the form to a separate component caused it to rerender while typing, causing inputs to lose focus
   // todo: maybe find a workaround for this ^^
   return (
      <>
         <form onSubmit={handleSubmit}>
            <div className="form-group mb-4 flex flex-col gap-1">
               <label htmlFor="name">Name</label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-9 rounded px-3 text-[--bb-dark-gray]"
               />
            </div>
            <div className="form-group mb-4 flex flex-col gap-1">
               <label htmlFor="email">Email</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-9 rounded px-3 text-[--bb-dark-gray]"
               />
            </div>
            <div className="form-group mb-4 flex flex-col gap-1">
               <label htmlFor="message">Message</label>
               <textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="h-24 rounded px-3 text-[--bb-dark-gray]"
               />
            </div>
            <button
               type="submit"
               id="submitBtn"
               className="mt-4 w-40 rounded-sm bg-[--bb-teal] p-4 text-center font-roboto-sans text-sm tracking-wide text-[--bb-dark-gray] lg:transition lg:duration-700 lg:hover:brightness-125">
               Send
            </button>
         </form>
         <Modal />
      </>
   );
};

export default ContactForm;
