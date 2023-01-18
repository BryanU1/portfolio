import React from 'react';

function About() {
  return (
    <section id='about'>
      <h2 className='text-md fw-700 text-blue'>About Me</h2>
      <div className='d-flex flex-wrap justify-content-between'>
        <div className='paragraphs'>  
          <p>
            Hello! My name is Bryan, and I am a software developer. Specifically, I am a full-stack developer that that uses <b>React</b> and <b>Express</b>.
          </p>
          <p>
            My interest in software development stemmed from spending time with my computer. After spending so much time on the internet, I gradually became curious about the inner workings of the web and technologies in general. My curiosity in technologies led me to take classes on data structure & algorithms, robotics, and the introduction to data science. 
          </p>
          <p>
            My goal in learning software development is to contribute in the advancement of technologies. I want to see what kind of possibilities are there and how technologies can benefit everyone.
          </p>
        </div>
        <div>
          <h3 className='text-sm fw-700 secondary'>Technologies I Work With:</h3>
          <div className='d-flex text-xs'>
            <ul>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Java</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Express</li>
            </ul>
            <ul>
              <li>Bootstrap</li>
              <li>SASS</li>
              <li>Git</li>
              <li>Webpack</li>
              <li>MongoDB</li>
              <li>Socket.io</li>
              <li>Ubuntu</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;