import React from 'react';
import './contact.css'
import Contact_sucess from './Contact-success';
import background from '../img_backg/contact_background.jpg'
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("xvojwlaw");
  if (state.succeeded) {
      return <Contact_sucess/>
  }
  return (
    <div className="contact_body" style={{ backgroundImage: `url(${background})` }}>
        <div className='contact_container'>
            <h2>Hagamos un proyecto juntos!</h2>
            <br/>
            <p> <b>Correo: </b>baroniolivasandoval@gmail.com  <br></br> <b>linkedin:</b> https://www.linkedin.com/in/baroni-oliva-eng-fre-spa/</p>
      <form className='contact_text' onSubmit={handleSubmit}>
      
      <input
      required
      className='contact-input'
        placeholder='Correo'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
       required
      className='contact-input contact-text'
        placeholder='mensaje'
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className='myButton' type="submit" disabled={state.submitting}>
        Submit
      </button>
      
    </form>
    </div>
</div>  

);
}
function Contact() {
  return (
    <ContactForm />
  );
}
export default Contact;

