import React from 'react';

function About() {
  return (
    <section id='about'>
      <h2 className='text-md fw-700 text-blue'>About Me</h2>
      <div className='d-flex flex-wrap justify-content-between'>
        <div>  
          <p>
            Hello! My name is Bryan, and I am a software developer. I specialize in front-end and back-end devlopment with <b>React</b> and <b>Express</b>.
          </p>
          <p>
            My interest in software development stemmed from spending time with my computer. After spending so much time on the internet, I gradually became curious about the inner workings of the web and technologies in general. My curiosity in technologies led me to take classes on data structure & algorithms, robotics, and web design. Some projects I built over the years besides the projects listed in this website include: a door lock using Arduino, a multiplayer tapping game on Android, and game of life using Java.
          </p>
          <p>
            My goal in learning software development is to contribute in the advancement of technologies. I want to see what kind of possibilities are there and how technologies can benefit everyone. Above all else, I want to learn everything about software development because it is fun.
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