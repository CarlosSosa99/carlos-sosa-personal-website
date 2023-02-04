import React from 'react'
import './about.css'
import PicOfMe from './perfilcarlos.jpg'

const AboutMe = () => {
  return (
    <section id='about' className='container py-5 about-wrapper'>
      <div className='row'>
        <div className='col-lg-6 col-xm-12'>
          <div className='photo-wrap'>
            <img
              className='profile-img'
              src={PicOfMe}
              alt='Picture of Author'
            />
          </div>
        </div>
        <div className='col-lg-6 col-xm-12'>
          <h2 className='text-uppercase about-heading'>about me</h2>
          <p>
            Hello! I am Carlos. I have been developing websites for more than one year.
             I'm a Front-End Web Developer. Technologies I use is
            (HTML, CSS, Boostrap, Javascript, Typescript, ReactJS and NodeJS). I create
            responsive websites that are displayed on all devices desktops and smartphones.
            Of course, before I begin developing any webapp, Landing Page,Business Website 
            or E-commerce, I need to have a ready-made project layout (sketch). And 
            I’m ready to do this for you, before we start developing 
            your website, we will discuss all the details of your niche with you.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
