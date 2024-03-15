"use client";


import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import type { Project } from "contentlayer/generated";
import ProjectPreview from "../project-preview";

interface StickyScrollProps {
  content: Project[];
}

export const StickyScroll = ({
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
      className="h-[30rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => 
            <ProjectPreview project={item} index={index} activeCard={activeCard} key={item.title + index} />
          )}
          <div className="min-h-40">
            <p>See rest of my projects <a href="https://github.com/QuickerMaths" target="_blank" className="text-primary underline cursor-pointer">here.</a> </p>
          </div>
        </div>
      </div>
      <motion.div
        animate={{
          backgroundImage: `url(${mappedImages[activeCard]})`,
        }}
        className="bg-cover bg-center hidden lg:block h-60 w-[27rem] rounded-md bg-white sticky top-10 overflow-hidden"
      ></motion.div>
    </motion.div>
  );
};




