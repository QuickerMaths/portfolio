"use client";


import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";

interface StickyScrollProps {
  content: {
    title: string;
    description: string;
    imageSrc: string;
  }[];
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

  const mappedImages = content.map((item) => item.imageSrc);

  return (
    <motion.div
      className="h-[30rem] overflow-y-auto flex flex-col items-center relative rounded-md px-5"
      ref={ref}
    >
      <motion.div 
        animate={{
            backgroundImage: `url(${mappedImages[activeCard]})`,
        }}
        className="cover bg-center block min-h-[10rem] lg:h-60 w-full lg:w-80 rounded-md bg-white sticky top-0 z-[10]"
      >
      </motion.div>  
      <div className="relative flex items-start px-10 z-[-1]">
        <div className="max-w-2xl max-h-[400px]">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"   
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-lg text-slate-300 max-w-sm mt-10"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}