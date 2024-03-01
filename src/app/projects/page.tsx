import React from "react";
import { StickyScroll } from "@/components/sticky-scroll-reveal/index";
import { StickyScrollMobile } from "@/components/sticky-scroll-reveal-mobile";
import imageOne from "@/assets/images/image_one.png";
import imageTwo from "@/assets/images/image_two.jpeg";
 
const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    imageSrc: imageOne.src
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    imageSrc: imageTwo.src
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    imageSrc: imageOne.src
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    imageSrc: imageTwo.src
  },
];

const Projects = () => {
  return (
    <main className="content-container min-h-screen flex justify-center items-center">
      <div className="hidden lg:block">
        <StickyScroll content={content} />  
      </div>
      <div className='lg:hidden'>
        <StickyScrollMobile content={content} />
      </div>
    </main>
  )
}

export default Projects