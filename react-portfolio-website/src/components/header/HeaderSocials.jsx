import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsStackOverflow} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/enzo-bossa/' target='_blank' rel="noreferrer"><BsLinkedin/></a>
        <a href='https://github.com/EnzoBossa' target='_blank' rel="noreferrer"><BsGithub/></a>
        <a href='https://stackoverflow.com/users/18705628/enzo-bossa' target='_blank' rel="noreferrer"><BsStackOverflow/></a>
    </div>
  )
}

export default HeaderSocials