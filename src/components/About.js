import React from 'react';

function About() {
  return (
    <section id='about'>
      <h2 className='text-md fw-700 text-blue'>About Me</h2>
      <div className='d-flex flex-wrap justify-content-between'>
        <div className='paragraphs'>  
          <p>
            Hello! My name is Bryan, and I am a software developer. Specifically, I am a full-stack developer that uses <b>React</b> and <b>Express</b> to build apps that sound interesting to me.
          </p>
          <p>
            As a teenager, I would spend most of my life sitting in front of my computer. I would play games, and create servers on Minecraft for my friend group. Because I am always exposed to computers and technology, I gradually became curious of the inner workings of the web and how computers work in general. Using this curiousity, I took classes in college where I learned Java, data structures & algorithms, and the basics of data science.
          </p>
          <p>
            My goal in software development is to simply learn everything related to computers. I want to learn what the future holds for computers and how it can benefit everyone.
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