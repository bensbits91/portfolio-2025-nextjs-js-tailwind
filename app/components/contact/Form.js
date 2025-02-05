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
            console.log('bb ~ response:', response);
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
         <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
               type="text"
               id="name"
               name="name"
               placeholder="Your name"
               value={formData.name}
               onChange={handleChange}
               required
            />
         </div>
         <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
               type="email"
               id="email"
               name="email"
               placeholder="Your email address"
               value={formData.email}
               onChange={handleChange}
               required
            />
         </div>
         <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
               id="message"
               name="message"
               placeholder="Your message"
               value={formData.message}
               onChange={handleChange}
               required
            />
         </div>
         <button type="submit" id="submitBtn">
            Send
         </button>
      </form>
   );
};

export default Form;
