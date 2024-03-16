import React from "react";
import { StickyScroll } from "@/components/sticky-scroll-reveal/index";
import { StickyScrollMobile } from "@/components/sticky-scroll-reveal-mobile";
import { allProjects } from "contentlayer/generated";
import { sleep, PAGE_TRANSITION_DURATION } from '@/lib/utils';


const Projects = async () => {
  await sleep(PAGE_TRANSITION_DURATION);
  return (
    <main className="content-container min-h-screen flex justify-center items-center">
      <div className="hidden lg:block">
        <StickyScroll content={allProjects} />  
      </div>
      <div className='lg:hidden'>
        <StickyScrollMobile content={allProjects} />
      </div>
    </main>
  )
}

export default Projects