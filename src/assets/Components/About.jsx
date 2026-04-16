import React from 'react'
import '../Style/About.css'
import profile from '../Image/Profile.png'
import { LuDownload } from "react-icons/lu";
import cv from '../Image/BhanuResume.pdf'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const About = ({ active }) => {

  return (
    <section id='about'>
      <div className='about'>
        <div className='section-profile'>
          <img src={profile} alt='about' />
            <ul>
              <li><a href='https://github.com/bhanuprakash2406' target='_blank' rel='noopener noreferrer'><FiGithub /></a></li>
              <li><a href='https://www.linkedin.com/in/bhanuprakash-karuru/' target='_blank' rel='noopener noreferrer'><FaLinkedinIn /></a></li>
              <li><a href='https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-menu-homepage' target='_blank' rel='noopener noreferrer'><SiIndeed /></a></li>
              <li><a href='https://wa.me/916301003350' target='_blank' rel='noopener noreferrer'><FaWhatsapp /></a></li>
            </ul>
        </div>
        <div className='section-details'>
          <h2>I am a Professional Frontend Developer</h2>
          <p>Hi, I’m Bhanu, a passionate Frontend Developer with a strong interest in building modern, responsive, and user-friendly web applications. I specialize in React.js, JavaScript, HTML, and CSS, and I enjoy turning creative ideas into real-world digital experiences.</p>
          <p>I have hands-on experience in developing projects using React, including state management with useContext and creating clean UI designs. I focus on writing efficient, scalable code and delivering smooth user experiences.</p>
          <a href='#portfolio' className={active === 'portfolio' ? 'active' : ''}>
            My Projects
          </a>
          <a href={cv} download className="btn btn-primary">
            <LuDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
