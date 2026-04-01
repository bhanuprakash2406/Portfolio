import React,{useEffect} from 'react'
import '../Style/Form.css'
import { useForm, ValidationError } from '@formspree/react';

const Form = () => {

    const [state, handleSubmit] = useForm('xnjovpen')

    if (state.succeeded){
        return <p className='finish'>Thanks for Contacting me!</p>;
    }

  return (
    <div className="contact-form">  
          <h2>Contact Me</h2>
          <p>Interested in working together or have an idea to discuss? Let’s connect and build something amazing.</p>
      <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input id="name" type="text" name="name" placeholder='Name*'/>
        <ValidationError className='name error' prefix="Name" field="name" errors={state.errors}/>
      </div>
      <div className="form-group">
        <input id="email" type="email" name="email" placeholder='Email*'/>
        <ValidationError className='email error' prefix="Email" field="email" errors={state.errors}/>
      </div>
      <div className="form-group">
        <input id="location" name="location" placeholder='Location'/>
        <ValidationError className='location error' prefix="Location" field="location" errors={state.errors}/>
      </div>
      <div className="form-group">
        <input id="message" name="message" placeholder='Message*'/>
        <ValidationError className='message error' prefix="Message" field="message" errors={state.errors}/>
      </div>
      <button type="submit" disabled={state.submitting}>Submit</button>
    </form>
  </div> 
  )
}

export default Form