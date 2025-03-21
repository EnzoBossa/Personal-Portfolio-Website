import React from 'react'
import './about.css'
import ME from '../../assets/me-about.JPG'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt='About Image' />
          </div>
        </div>

        <div className='about__content'>
          <div className="about__cards">

            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Years Working in Information Technology</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>2 Academic Projects</small>
              <br></br>
              <small>2 Personal Projects</small>
            </article>
          </div>

          <p>
            I have experience working with React and Firebase. I also have experience with Augmented Reality
            and Unity development as well as developing on the HoloLens 2 device. I have 6+ years of IT experience 
            with help desk support and network diagnostics.  
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About