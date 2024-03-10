import type { Project } from "contentlayer/generated";
import { motion } from "framer-motion";
import Link from "next/link";

interface ProjectPreviewProps {
    project: Project;
    index: number;
    activeCard: number;
  }
  
  const ProjectPreview = ({ project, index, activeCard }: ProjectPreviewProps) => {
    const MotionLink = motion(Link)
  
    return (
      <div key={project.title + index} className="my-20">
        <motion.h2
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: activeCard === index ? 1 : 0.3,
          }}
          className="text-2xl font-bold text-primary"
        >
          {project.title}
        </motion.h2>
        <motion.p 
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: activeCard === index ? 1 : 0.3,
          }}
          className="text-kg text-secondary max-w-sm mt-10 mb-2"
        >
          {project.description}
        </motion.p>
        <MotionLink 
           initial={{
            opacity: 0,
          }}
          animate={{
            opacity: activeCard === index ? 1 : 0.3,
          }}
          className="text-kg text-primary max-w-sm"
          href={`/projects/${project.slug}`}
        >
          Read more ...
        </MotionLink>
      </div>
    );
  }

  export default ProjectPreview