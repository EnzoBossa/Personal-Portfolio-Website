import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsStackOverflow} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Enzo Bossa</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/enzo-bossa/" target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href="https://github.com/EnzoBossa" target="_blank" rel='noreferrer'><BsGithub/></a>
        <a href="https://stackoverflow.com/users/18705628/enzo-bossa" target="_blank" rel='noreferrer'><BsStackOverflow/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Enzo Bossa. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer