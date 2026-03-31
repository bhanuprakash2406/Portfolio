import React from 'react'
import '../Style/Home.css'
import profile from '../Image/Profile.png'

const Home = () => {
  return (
    <section id='home'>
      <div className='home'>
        <div className="home-container">
        <h1>Hello, I'm Bhanuprakash</h1>
        <p>I’m a Frontend Developer specializing in React.js, focused on building modern, responsive, and visually appealing web applications. I aim to craft high-quality user experiences through clean code and user-centric design.</p>
        <a href="mailto:bhanuprakash2606@gmail.com">Say Hello</a>
      </div>
      <div className="home-image">
        <img src={profile} alt="Home" />
      </div>
      </div>
    </section>
  )
}

export default Home