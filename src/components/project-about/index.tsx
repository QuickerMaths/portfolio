import Link from 'next/link';
import React from 'react'

interface ProjectAboutProps {
	project: {
		url?: string;
		title: string;
		description: string;
		repository?: string;
    }
}

const ProjectAbout = ({project}: ProjectAboutProps) => {
  const links: { label: string; href: string }[] = [];

  if (project.repository) {
		links.push({
			label: "GitHub",
			href: `https://github.com/QuickerMaths/${project.repository}`,
		});
	}

	if (project.url) {
		links.push({
			label: "Website",
			href: project.url,
		});
	}

  return (
    <section className="w-full flex flex-col justify-center items-center gap-5 px-5 md:px-0">
      <h1 className="text-primary text-3xl md:text-5xl font-bold text-center">
        {project.title}
      </h1>
      <p className='text-secondary text-center'>
        {project.description}
      </p>
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
						<div className="grid grid-cols-1 gap-y-2 gap-x-8 leading-7 sm:grid-cols-2 md:flex lg:gap-x-10">
							{links.map((link) => (
								<a target="_blank" key={link.label} href={link.href} className='text-secondary hover:text-primary duration-200 font-semibold'>
									{link.label} <span aria-hidden="true">&rarr;</span>
								</a>
							))}
						</div>
					</div>
    </section>
  )
}

export default ProjectAbout