import React, { useState, useEffect } from 'react'
import Home from './assets/Components/Home'
import Nav from './assets/Components/Nav'
import Portfolio from './assets/Components/Portfolio'
import Process from './assets/Components/Process'
import Services from './assets/Components/Services'
import Contact from './assets/Components/Contact'
import About from './assets/Components/About'

const App = () => {

  const [active, setActive] = useState();
    
     useEffect(() => {
        const handleScroll = () => {
          const sections = document.querySelectorAll("section");
    
          sections.forEach((section) => {
            const top = window.scrollY;
            const offset = section.offsetTop - 100;
            const height = section.offsetHeight;
            const id = section.getAttribute("id");
    
            if (top >= offset && top < offset + height) {
              setActive(id);
            }
          });
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

  return (
    <div>
      <Nav active={active} />
      <Home />
      <About active={active}/>
      <Process />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  )
}

export default App