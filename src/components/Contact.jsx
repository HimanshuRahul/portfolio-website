import React from 'react'
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { z, object } from 'zod';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {

  const toEmail = import.meta.env.VITE_REACT_APP_TO_EMAIL;

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Zod validation schema
      const validationSchema = z.object({
        name: z.string().min(1, { message: 'Name is required' }),
        email: z.string().email({ message: 'Invalid email address' }),
        message: z.string().min(1, { message: 'Message is required' }),
      });

      const validatedForm = validationSchema.parse(form);

      setLoading(true);


      // if (!validateForm()) {
      //   // If the form is not valid, do not proceed with submission
      //   return;
      // }



      await emailjs.send(
        'service_t39x77j',
        'template_v6pngaj',
        {
          from_name: validatedForm.name,
          to_name: 'Himanshu',
          from_email: validatedForm.email,
          to_email: toEmail,
          message: validatedForm.message,
        },
        '9CWZYCVQ13zZPNUh0'
      );

      setLoading(false);
      alert('Thank you for reaching out. I will get back to you!');

      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error(error);

      if (error instanceof z.ZodError) {
        const errorMessages = {};
        error.errors.forEach((err) => {
          const path = err.path.join('.');
          errorMessages[path] = err.message;
        });

        // Update state with validation errors
        setForm((prevForm) => ({
          ...prevForm,
          errors: errorMessages,
        }));
      } else {
        // Handle other errors (e.g., network issues)
        alert('Something went wrong.');
      }

      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };


  return (
    <div className='xl:mt-10 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder='Enter your name'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
            {form.errors?.name && (
              <span className="text-red-500">{form.errors.name}</span>
            )}
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder='Enter your email'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
            {form.errors?.email && (
              <span className="text-red-500">{form.errors.email}</span>
            )}
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder='Enter your message'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'
            />
            {form.errors?.message && (
              <span className="text-red-500">{form.errors.message}</span>
            )}
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
          >
            {loading ? 'Sending...' : 'Send'}

          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />

      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact");