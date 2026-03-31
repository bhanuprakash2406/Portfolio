import React from 'react'
import '../Style/Services.css'

const Services = () => {
  return (
    <section id='services'>
      <div className='services'>
        <div className='services-heading'>
          <h2>What I do?</h2>
          <p>I design and develop modern, responsive web applications with a strong focus on user experience and performance. I create intuitive interfaces, write clean and efficient code, and build seamless digital experiences using React.js and modern web technologies.</p>
          <a href="mailto:bhanuprakash2606@gmail.com">Say Hello</a>
        </div>
        <div className='services-items'>
          <div className='services-item'>
            <h3>UI/UX + Developer</h3>
            <p>I create user-centered designs and bring them to life through code. From designing intuitive UI/UX to developing responsive web applications, I focus on delivering visually appealing and high-performing digital experiences.</p>
          </div>
          <div className='services-item'>
            <h3>Frontend Focused Version</h3>
            <p>I build responsive and interactive web applications using React.js, ensuring clean design, smooth functionality, and an excellent user experience across all devices.</p>
          </div>
          <div className='services-item'>
            <h3>Performance Optimization</h3>
            <p>I optimize web applications for speed and performance by implementing best practices, minimizing load times, and ensuring smooth interactions for users.</p>
          </div>
          <div className='services-item'>
            <h3>Maintenance & Support</h3>
            <p>I offer continuous maintenance and support services, including bug fixes, performance optimization, and feature updates to keep applications secure, efficient, and up to date.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services