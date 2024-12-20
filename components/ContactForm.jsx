/** @format */
"use client";
import { useState } from "react";
import { IoSend } from "react-icons/io5";

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
    <div className='max-w-4xl gap-16 mx-auto'>
      <form className='ml-auto space-y-4' onSubmit={(e) => e.preventDefault()}>
        <input
          type='text'
          name='name'
          placeholder='Your Name'
          className=' dark:placeholder:text-white w-full rounded-md py-3 px-4 bg-[#dddddd] placeholder:text-gray-800 text-gray-800 dark:bg-[#363639] dark:text-white text-sm outline-[#6D9886]'
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type='email'
          name='email'
          placeholder='Your Email'
          className='dark:placeholder:text-white w-full rounded-md py-3 px-4 bg-[#dddddd] placeholder:text-gray-800 text-gray-800 dark:bg-[#363639] dark:text-white text-sm outline-[#6D9886]'
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type='text'
          name='subject'
          placeholder='Subject'
          className='w-full rounded-md py-3 px-4 bg-[#dddddd] placeholder:text-gray-800 dark:placeholder:text-white text-gray-800 dark:bg-[#363639] dark:text-white text-sm outline-[#6D9886]'
          value={formData.subject}
          onChange={handleChange}
        />
        <textarea
          name='message'
          placeholder='Your Message'
          rows='6'
          className='w-full rounded-md py-3 px-4 bg-[#dddddd] placeholder:text-gray-800 text-gray-800 dark:bg-[#363639] dark:text-white text-sm outline-[#6D9886] dark:placeholder:text-white'
          value={formData.message}
          onChange={handleChange}></textarea>
        <button
          type='button'
          className='dark:placeholder:text-white text-white bg-[#6D9886] hover:bg-[#a7c1b6] tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6'
          onClick={handleSubmit}>
          <div className='flex flex-row items-center justify-center gap-2'>
            <div>Send Message</div>
            <div>
              <IoSend />
            </div>
          </div>
        </button>
      </form>
    </div>
  );
}
