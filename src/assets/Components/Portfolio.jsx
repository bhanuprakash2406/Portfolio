import React from 'react'
import '../Style/Portfolio.css'
import zapbasket from '../Image/zapbasket.png'
import skillzone from '../Image/skillzone.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='portfolio'>
        <div className='portfolio-heading'>
          <h1>My Portfolio</h1>
          <p>Here's a selection of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.</p>
        </div>
        <div className='portfolio-items'>
          <div className='portfolio-item'>  
            <img src={zapbasket} alt='Project 1' />
            <span className='project-category'>Web Development</span>
            <h3>Zap Basket</h3>
            <p>ZapBasket is a modern e-commerce web application designed to provide users with a fast, seamless, and intuitive online shopping experience. The platform focuses on user-friendly navigation, responsive design, and efficient performance.  </p>
            <a href='https://zapbasket.vercel.app/' className='project-link'>View Project</a>
          </div>
          <div className='portfolio-item'>  
            <img src={skillzone} alt='Project 2' />
            <span className='project-category'>Web Development</span>
            <h3>Skill Zone</h3>
            <p>SkillZone is an interactive web platform designed to help users explore, learn, and improve their skills through structured content and a user-friendly interface. The platform focuses on providing a smooth learning experience with clean design and easy navigation.</p>
            <a href='https://skill-zone-five.vercel.app/' className='project-link'>View Project</a>
          </div>
          </div>
      </div>
    </section>
  )
}

export default Portfolio