import React from 'react'
import ContactForm from '@/components/contact-form'

const Contact = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center gap-10'>
        <ContactForm />
        <div className='hidden h-full md:flex flex-col justify-center'>
          <h1 className='relative mb-20 font-bold uppercase text-5xl text-secondary tracking-widest after:content-"" after:bg-primary after:dark:bg-primary after:absolute after:-bottom-5 after:left-0 after:w-1/2 after:h-[3px]'>
            Contact me
          </h1>
          <div className='flex flex-col justify-center gap-2'>
            <p>Feel free to write anything using this form</p>
            <p>or send me an email at <a className='underline text-primary' href='mailto:matuesz.szalowicz@gmail.com'>mateusz.szalowicz@gmail.com</a></p>
          </div>
        </div>
    </div>
  )
}

export default Contact