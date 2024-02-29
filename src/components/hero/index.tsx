import Image from 'next/image'
import React from 'react'
import profileImage from '../../assets/images/mateusz-szalowicz.jpeg'
import { Button } from '../ui/button'
import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons"

const Hero = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-center gap-5 max-w-[480px] sm:max-w-[600px]">
        <div className="flex flex-col justify-center gap-2">
            <h1 className="text-3xl min-[340px]:text-4xl min-[440px]:text-5xl font-bold font-serif">Matuesz Szałowicz</h1>
            <h2 className='text-gray-700 dark:text-gray-400'>Web developer</h2>
            <p className="text-sm text-gray-400 dark:text-gray-500">
                I am an aspiring web developer with a deep passion for crafting seamless and visually appealing web experiences.
            </p>
            <div className='flex items-center gap-2 text-3xl'>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/QuickerMaths" target='_blank'>
                  <GitHubLogoIcon />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com/matuesz.szalowicz" target='_blank'>
                  <LinkedInLogoIcon />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:mateusz.szalowicz@gmail.com" target='_blank'>
                  <EnvelopeClosedIcon />
                </a>
              </Button>
            </div>
        </div>
        <Image
          src={profileImage.src}
          alt="Picture of the author"
          width={100}
          height={100}
          className='rounded-full'
          />
    </div>
  )
}

export default Hero