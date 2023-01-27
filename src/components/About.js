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
            By growing up with technologies and computers, I became curious of the inner workings of the web and how computers work in general. With questions of how or why computers are able to function, I took computer science classes in high school and college to better understand them. My journey of web development started in college when I found a website called, "The Odin Project" and used their resources to teach myself principles of developing a website.
          </p>
          <p>
            My goal in software development is to develop skills in both front-end and back-end. More specifically, I want to learn how to test and develop scalable apps.
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