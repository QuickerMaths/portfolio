import React from 'react'
import Link from 'next/link'

const TechStack = () => {
  return (
    <div className='flex flex-col justify-center mx-auto'>
      <h3 className='text-secondary font-semibold mb-5'><span className='text-primary'>Technologies</span> I use:</h3>
      <div className='flex flex-wrap items-center gap-2'>
        <Link href="https://www.w3.org/html/" target="_blank" rel="noreferrer"><i className="devicon-html5-plain-wordmark colored text-5xl"></i></Link> 
        <Link href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"><i className="devicon-css3-plain-wordmark colored text-5xl"></i></Link>
        <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><i className="devicon-javascript-plain colored text-5xl"></i></Link> 
        <Link href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><i className="devicon-typescript-plain colored text-5xl"></i></Link> 
        <Link href="https://reactjs.org/" target="_blank" rel="noreferrer"><i className="devicon-react-original-wordmark colored text-5xl"></i></Link> 
        <Link href="https://nodejs.org" target="_blank" rel="noreferrer"><i className="devicon-nodejs-plain-wordmark colored text-5xl"></i></Link> 
        <Link href="https://expressjs.com" target="_blank" rel="noreferrer"><i className="devicon-express-original-wordmark text-5xl"></i></Link> 
        <Link href="https://jestjs.io" target="_blank" rel="noreferrer"><i className="devicon-jest-plain colored text-5xl"></i></Link> 
        <Link href="https://sass-lang.com" target="_blank" rel="noreferrer"><i className="devicon-sass-original colored text-5xl"></i> </Link> 
        <Link href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><i className="devicon-tailwindcss-original colored text-5xl"></i> </Link> 
        <Link href="https://git-scm.com/" target="_blank" rel="noreferrer"><i className="devicon-git-plain-wordmark colored text-5xl"></i> </Link> 
        <Link href="https://www.postgresql.org" target="_blank" rel="noreferrer"><i className="devicon-postgresql-plain-wordmark colored text-5xl"></i> </Link> 
        <Link href="https://www.mysql.com/" target="_blank" rel="noreferrer"><i className="devicon-mysql-plain-wordmark colored text-5xl"></i></Link> 
      </div>
    </div>
  )
}

export default TechStack