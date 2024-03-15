"use client";


import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { Project } from "contentlayer/generated";
import ProjectPreview from "../project-preview"; 

interface StickyScrollProps {
  content: Project[];
}

export const StickyScrollMobile = ({
  content,
}: StickyScrollProps) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    cardsBreakpoints.forEach((breakpoint, index) => {
      if (latest > breakpoint - 0.2 && latest <= breakpoint) {
        setActiveCard(() => index);
      }
    });
  });

  const mappedImages = content.map((item) => item.image_src);

  return (
    <motion.div
      className="h-[30rem] overflow-y-auto flex flex-col items-center relative rounded-md px-5"
      ref={ref}
    >
      <motion.div 
        animate={{
            backgroundImage: `url(${mappedImages[activeCard]})`,
        }}
        className="bg-contain bg-no-repeat bg-center block min-h-[10rem] lg:h-60 w-full lg:w-80 rounded-md bg-transparent sticky top-0 z-[10]"
      >
      </motion.div>  
      <div className="relative flex items-start px-10 z-[-1]">
        <div className="max-w-2xl max-h-[400px]">
          {content.map((item, index) => (
            <ProjectPreview project={item} index={index} activeCard={activeCard} key={item.title + index}/>
          ))}
          <p className="my-5">See rest of my projects <a href="https://github.com/QuickerMaths" target="_blank" className="text-primary underline cursor-pointer">here.</a></p>
        </div>
      </div>
    </motion.div>
  );
}