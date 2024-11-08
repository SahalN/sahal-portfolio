/** @format */
"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:sahalnurdin@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className='max-w-4xl gap-16 p-4 mx-auto'>
      <form className='ml-auto space-y-4' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          className='w-full rounded-md py-3 px-4 bg-[#f5eee6] placeholder:text-gray-800 text-gray-800 dark:bg-[#363639] dark:text-white text-sm outline-[#2c7a7b]'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          className='w-full rounded-md py-3 px-4 bg-[#f5eee6] placeholder:text-gray-800 text-gray-800 dark:bg-[#363639] dark:text-white text-sm outline-[#2c7a7b]'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          className='w-full rounded-md py-3 px-4 bg-[#f5eee6] placeholder:text-gray-800 text-gray-800 dark:bg-[#363639] dark:text-white text-sm outline-[#2c7a7b]'
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name='message'
          placeholder='Your Message'
          rows='6'
          className='w-full rounded-md py-3 px-4 bg-[#f5eee6] placeholder:text-gray-800 text-gray-800 dark:bg-[#363639] dark:text-white text-sm outline-[#2c7a7b]'
          value={formData.message}
          onChange={handleChange}></textarea>
        <button
          type='button'
          className='text-white bg-[#2c7a7b] hover:bg-[#319795] tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6'
          onClick={handleSubmit}>
          Send Message
        </button>
      </form>
    </div>
  );
}
