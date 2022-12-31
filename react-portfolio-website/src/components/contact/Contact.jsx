import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlinePhone} from 'react-icons/ai'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {useRef} from 'react';
import emailjs from '@emailjs/browser'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hi2e1sa', 'template_wfm8t4q', form.current, 'l9G5KSZ333XdKa1l_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container container__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>enzobossa12@gmail.com</h5>
            <a href="mailto:enzobossa12@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlinePhone className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>+1(786)-563-6706</h5>
            <a href="tel:7865636706">Call or send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Enzo Bossa</h5>
            <a href="https://www.linkedin.com/in/enzo-bossa/" target="_blank" rel='noreferrer'>Send a message</a>
          </article>
        </div>
        {/*END OF CONTACT OPTIONS*/} 
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact