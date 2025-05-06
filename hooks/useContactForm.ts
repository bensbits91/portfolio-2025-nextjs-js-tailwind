'use client';
import { useState } from 'react';
const useContactForm = () => {
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

   return {
      formData,
      isSending,
      isSent,
      errorData,
      handleChange,
      handleSubmit
   };
};

export default useContactForm;
