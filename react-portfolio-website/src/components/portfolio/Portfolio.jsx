import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.PNG'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Enliven - Social Media Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Szmjuly/CEN4010_fa21_g21" className='btn' target="_blank">Github</a>
          {/*  <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>LibAR - Augmented Reality POC for FAU Library</h3>
          <div className="portfolio__item-cta">
            <a href="https://dev.azure.com/fau2021/4950C%20EngDesign/_git/LibAR" className='btn' target="_blank">Repository</a>
            {/* <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Video Editing</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.youtube.com/watch?v=yFG4SQHL2aE&t=66s" className='btn' target="_blank">YouTube</a>
            {/* <a href="https://github.com" className='btn btn-primary' target="_blank">Live Demo</a> */}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio