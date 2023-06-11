import React from 'react'
import Particles from './Particles'
import Typed from 'react-typed'
import './header.css'
const Header = () => {
  return (
    <section id='home' className='header-wrapper'>
      <Particles />
      <div className='main-info'>
        <h1>Professional tecnology Skills</h1>
        <Typed
          className='typed-text'
          strings={[
            'Web Design',
            'Web Development',
            'Front-End',
            'Back-End',
            'Full-Stack'
            
          ]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href='#contacts' className='btn-main-offer'>
          contact me
        </a>
      </div>
    </section>
  )
}

export default Header
