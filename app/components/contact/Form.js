'use client';
import { useState } from 'react';

const Form = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
   });

   const handleChange = e => {
      const { name, value } = e.target;
      setFormData(prevData => ({
         ...prevData,
         [name]: value
      }));
   };

   const handleSubmit = async e => {
      e.preventDefault();
      try {
         const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
         });

         if (response.ok) {
            alert('Email sent successfully');
         } else {
            console.log('bb ~ response:', response);
            alert('Error sending email');
         }
      } catch (error) {
         console.log('bb ~ error:', error);
         alert('Error sending email');
      }
   };

   return (
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
            className="w-40 mt-4 cursor-pointer rounded-sm bg-[--bb-teal] p-4 text-center font-roboto-sans text-sm tracking-wide text-[--bb-dark-gray] transition duration-700 hover:brightness-125">
            Send
         </button>
      </form>
   );
};

export default Form;
