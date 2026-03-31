import React from 'react'
import '../Style/Process.css'
import { MdOutlineCoPresent } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { FaFigma } from "react-icons/fa";
import { IoRocketOutline } from "react-icons/io5";

const Process = () => {
  return (
    <section id='process'>
      <div className='process'>
      <div className='process-heading'>
        <h1>Work Process</h1>
        <p>Driven by design and powered by code, I create intuitive and high-performing web interfaces. I focus on crafting responsive layouts, smooth interactions, and scalable components that balance usability with visual clarity. By combining clean design with efficient code, I build engaging and user-friendly digital experiences  .</p>
      </div>
      <div className='group'>
        <div className='process-container'>
          <MdOutlineCoPresent className='icon'/>
          <h1>1. Research</h1>
          <p>I start by understanding client requirements, target audience, and project goals to ensure the right direction.</p>
        </div>
        <div className='process-container'>
          <FaFigma className='icon'/>
          <h1>2. UI/UX Design</h1>
          <p>I design wireframes and user-friendly interfaces focusing on usability, accessibility, and modern design trends.</p>
        </div>
        <div className='process-container'>
          <FaCode className='icon'/>
          <h1>3. Development</h1>
          <p>I develop responsive and performant web applications using modern technologies and best practices.</p>
        </div>
        <div className='process-container'>
          <IoRocketOutline className='icon'/>
          <h1>4. Deployment</h1>
          <p>I deploy the project and provide support for updates, improvements, and maintenance.</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Process