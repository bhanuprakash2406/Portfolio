import React from 'react'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import '../Style/Contact.css'
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneOutgoing } from "react-icons/fi";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {

  const [state, handleSubmit] = useForm("xnjovpen");
  if (state.succeeded) {
      return <p className='message'>Thanks for Contacting me!</p>;
  }

  return (
   <section id='contact'>
      <div className="contact">
        <div className="contact-heading">
          <h1>Get in Touch</h1>
          <p>Feel free to reach out to me for any inquiries or collaborations. I'm always open to discussing new projects and opportunities.</p>
          <div className="contact-info">
            <div className="contact-item ">
              <CiLocationOn className='contact-icon location'/>
              <div className="data">
                <h3>Location :</h3>
                <p>3-8 Nindra,Chittor Dist, Andhra Pradesh, India</p>
              </div>
            </div>
            <div className="contact-item">
              <TfiEmail className='contact-icon'/>
              <div className="data">
                <h3>Email :</h3>
                <p><a href="mailto:bhanuprakash2606@gmail.com">bhanuprakash2606@gmail.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <FiPhoneOutgoing className='contact-icon'/>
              <div className="data">
                <h3>Phone :</h3>
                <p><a href="tel:6301003350">+91 6301003350</a></p>
              </div>
            </div>
            <div className="contact-icons">
              <p><a href='https://github.com/bhanuprakash2406' target='_blank' rel='noopener noreferrer'><FiGithub /></a></p>
              <p><a href='https://www.linkedin.com/in/bhanuprakash-karuru/' target='_blank' rel='noopener noreferrer'><FaLinkedinIn /></a></p>
              <p><a href='https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-jobseeker-profile--profile-one-frontend' target='_blank' rel='noopener noreferrer'><SiIndeed /></a></p>
              <p><a href='https://wa.me/6301003350' target='_blank' rel='noopener noreferrer'><FaWhatsapp /></a></p>
            </div>
          </div>
        </div>
        <div className="contact-form">  
          <h2>Contact Me</h2>
          <p>Interested in working together or have an idea to discuss? Let’s connect and build something amazing.</p>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input id="name" type="text" name="name" placeholder='Name*'/>
        <ValidationError prefix="Name" field="name" errors={state.errors}/>
      </div>
      <div className="form-group">
        <input id="email" type="email" name="email" placeholder='Email*'/>
        <ValidationError prefix="Email" field="email" errors={state.errors}/>
      </div>
      <div className="form-group">
        <input id="location" name="location" placeholder='Location'/>
        <ValidationError prefix="Location" field="location" errors={state.errors}/>
      </div>
      <div className="form-group">
        <input id="message" name="message" placeholder='Message*'/>
        <ValidationError prefix="Message" field="message" errors={state.errors}/>
      </div>
      <button type="submit" disabled={state.submitting}>Submit</button>
    </form>
  </div> 
  </div>
        
   </section>
  )
}

export default Contact
