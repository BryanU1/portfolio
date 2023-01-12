import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import github from '../images/github-mark.png';
import linkedin from '../images/linkedin.png';

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <ul id='contact-list'>
        <li>
          <a href="https://github.com/BryanU1" target='_blank'>
            <img src={github}/>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bryan-ung-b657b420a/" target='_blank'>
            <img src={linkedin}/>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default App;