import React from 'react';
import pdf from '../images/resume.pdf';

function Hero() {
  return (
    <section id='hero'>
      <div>  
        <h3 className='hero-md'>Hi, my name is</h3>
        <h1 className='hero-lg text-blue fw-700'>Bryan Ung.</h1>
        <h2 className='hero-lg secondary fw-700'>Software Developer</h2>
        <p>I am a software developer that enjoys building and learning new technologies. Currently, I am focused on creating practical and fun websites with React and Express.</p>
        <a href={pdf} target='_blank'>
          <button className='primary-button'>Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero;