'use client'

import React from "react";
import StickyScroll from "@/components/sticky-scroll-reveal/index";
import StickyScrollMobile from "@/components/sticky-scroll-reveal-mobile";
import { allProjects } from "contentlayer/generated";
import useDeviceSize from "@/hooks/useDeviceSize";


const Projects = () => {
  const [width] = useDeviceSize()
  
  return (
    <main className="content-container min-h-screen flex justify-center items-center">
      {width > 768 ? <StickyScroll content={allProjects} /> : <StickyScrollMobile content={allProjects} />}
    </main>
  )
}

export default Projects