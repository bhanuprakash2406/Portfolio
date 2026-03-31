import React, { useState, useEffect } from 'react'
import '../Style/Nav.css'
import { IoMenu } from "react-icons/io5";

const Nav = ({ active }) => {

    const [open, setOpen] = useState(false);

  return (
    <div className='nav'>
        <div className='title'>
            <span className='dot'>B</span>
            <h1>Bhanu Prakash</h1>
        </div>
        <ul>
            <li><a href="#home" className={active === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" className={active === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#process" className={active === 'process' ? 'active' : ''}>Process</a></li>
            <li><a href="#portfolio" className={active === 'portfolio' ? 'active' : ''}>Portfolio</a></li>
            <li><a href="#services" className={active === 'services' ? 'active' : ''}>Services</a></li>
            <li><a href="#contact" className={active === 'contact' ? 'active' : ''}>Contact</a></li>
        </ul>

            <div className='end'>
                    <IoMenu className='menu_icon' onClick={() => setOpen(!open)}/>

                    {open && ( <ul className='open_list'>
                       <li><a href="#home" className={active === 'home' ? 'active' : ''}>Home</a></li>
                        <li><a href="#about" className={active === 'about' ? 'active' : ''}>About</a></li>
                        <li><a href="#process" className={active === 'process' ? 'active' : ''}>Process</a></li>
                        <li><a href="#portfolio" className={active === 'portfolio' ? 'active' : ''}>Portfolio</a></li>
                        <li><a href="#services" className={active === 'services' ? 'active' : ''}>Services</a></li>
                        <li><a href="#contact" className={active === 'contact' ? 'active' : ''}>Contact</a></li>
                    </ul>  )}
             </div>
    </div>
  )
}

export default Nav