"use client";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { useLanguage } from "./LanguageProvider";

export default function ContactForm() {
  const { t } = useLanguage();
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

  // Underline-only fields: one hairline per input instead of four filled
  // blocks, so the form reads as a document rather than a widget.
  const fieldClass =
    "w-full px-0 py-2 text-sm bg-transparent border-0 border-b rounded-none outline-none border-black/15 dark:border-white/20 placeholder:text-transparent focus:border-[#6D9886] transition-colors";
  const labelClass =
    "block mb-1 text-[11px] font-medium tracking-widest uppercase text-gray-500 dark:text-gray-400";

  return (
    <div className='w-full'>
      <form className='w-full space-y-4' onSubmit={(e) => e.preventDefault()}>
        <div className='grid gap-4 sm:grid-cols-2'>
          <label className='block'>
            <span className={labelClass}>{t("form.name")}</span>
            <input
              type='text'
              name='name'
              className={fieldClass}
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className='block'>
            <span className={labelClass}>{t("form.email")}</span>
            <input
              type='email'
              name='email'
              className={fieldClass}
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>
        <label className='block'>
          <span className={labelClass}>{t("form.subject")}</span>
          <input
            type='text'
            name='subject'
            className={fieldClass}
            value={formData.subject}
            onChange={handleChange}
          />
        </label>
        <label className='block'>
          <span className={labelClass}>{t("form.message")}</span>
          <textarea
            name='message'
            rows='4'
            className={`${fieldClass} resize-none`}
            value={formData.message}
            onChange={handleChange}></textarea>
        </label>
        <p className='text-sm font-light'>
          {t("home.contact.direct")}{" "}
          <a
            href='mailto:sahalnurdin@gmail.com'
            className='text-[#6d9886] hover:underline'>
            sahalnurdin@gmail.com
          </a>
          {" · "}
          <a
            href='https://www.linkedin.com/in/muhammadsahalnurdin/'
            target='_blank'
            rel='noopener noreferrer'
            className='text-[#6d9886] hover:underline'>
            LinkedIn
          </a>
        </p>
        <div className='flex justify-end'>
          <button
            type='button'
            className='inline-flex items-center gap-2 px-6 py-2.5 text-sm tracking-wide text-white transition-colors bg-[#6D9886] rounded-md hover:bg-[#5c8474] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D9886] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F6F6] dark:focus-visible:ring-offset-[#212121]'
            onClick={handleSubmit}>
            {t("form.send")}
            <IoSend className='text-xs' />
          </button>
        </div>
      </form>
    </div>
  );
}
