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
            Hello! I am Carlos. I have been developing websites for more than two years.
             I'm a passionate Web Developer.The Technologies that I use are 
            (HTML, CSS, Boostrap, Javascript, Typescript, ReactJS,Firebase,MySQL, PHP and NodeJS). I create
            responsive and functional Personal Website, Bussines Website, Web Applications, Blogs, E-commerce, that are displayed on all devices desktops and smartphones.
            Before I begin developing any proyect, I would like to have a ready-made project layout (sketch) and the opportunity to discuss all the details of your niche with you to make your dream project come true.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
