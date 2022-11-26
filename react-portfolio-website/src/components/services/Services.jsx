import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Front-end design and development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Back-end development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>API integration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive website</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Video Editing</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Trimming and merging clips</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>YouTube video editing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Gaming videos and montages</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>YouTube thumbnails</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services