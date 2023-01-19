import React, { useEffect, useState } from 'react';
import store from '../images/keyboard-store.png';
import cw from '../images/competitive-wordle.png';
import external_link from '../images/external.png';
import github from '../images/github-mark.png';
import portfolio from '../images/portfolio.png';

function Projects() {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener('resize', function(event) {
    setWidth(window.innerWidth);
  })

  return (
    <section id='projects'>
      <h2 className='text-md fw-700 text-blue'>Projects</h2>
      <div className='d-flex project first'>
        <a 
          className='img-link'
          href='https://keyboard-store-app.herokuapp.com/'
          target='_blank'
        >
          <img className='b-left sample' src={store}/>
        </a>
        <div className='align-self-center pos-right'>
          <h3 className='text-sm align-right'>Keyboard Store</h3>
          <p className='align-right'>
            An e-commerce website that allows customers to add products to their shopping cart. It also has a built-in build page that allows users to pick their own parts and personalize their own keyboard. The back-end server contains CRUD operations that manages the product listing in this website.
          </p>
          <ul className={`d-flex flex-wrap ${width <= 785 ? '' : 'justify-content-end'}`}>
            <li>React</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>SASS</li>
          </ul>
          <ul className={`d-flex ${width <= 785 ? '' : 'justify-content-end'}`}>
            <li>
              <a
                href='https://github.com/BryanU1/keyboard-store-app'
                target='_blank'
              >
                <img className='git_icon' src={github}/>
              </a>
              <span>Code</span>
            </li>
            <li>
              <a 
                href='https://keyboard-store-app.herokuapp.com/'
                target='_blank'
              >
                <img className='link_icon' src={external_link}/>
              </a>
              <span>Link</span>
            </li>
          </ul>
        </div>
      </div>
      <div className='d-flex justify-content-end project second'>
        <div className='align-self-center pos-left'>
          <h3 className='text-sm'>Competitive Wordle</h3>
          <p>
            A wordle clone game that incorporates a skill-based matchmaking system. By assigning each user an ELO rating &#40;similar to chess&#41;, players are able to play against each other with a similar skill level. 
          </p>
          <ul className='d-flex flex-wrap'>
            <li>React</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>Node.js</li>
            <li>Socket.io</li>
            <li>SASS</li>
            <li>ESLint</li>
            <li>JWT</li>
          </ul>
          <ul className='d-flex'>
            <li>
              <a
                href='https://github.com/BryanU1/competitive-wordle'
                target='_blank'
              >
                <img className='git_icon' src={github}/>
              </a>
              <span>Code</span>
            </li>
            <li>
              <a 
                href='https://competitive-wordle.herokuapp.com/'
                target='_blank'
              >
                <img className='link_icon' src={external_link}/>
              </a>
              <span>Link</span>
            </li>
          </ul>
        </div>
        <a 
          href='https://competitive-wordle.herokuapp.com/'
          target='_blank'
          className='img-link'
        >
          <img className='b-right sample' src={cw}/>
        </a>
      </div>
      <div className='d-flex project third'>
        <a 
          className='img-link'
          href='https://bryanung.com/'
          target='_blank'
        >
          <img className='b-left sample' src={portfolio}/>
        </a>
        <div className='align-self-center pos-right'>
          <h3 className='text-sm align-right'>Personal Website</h3>
          <p className='align-right'>
            For this project, I decided to set up a react environment without the help of create-react-app. The purpose of this is to better understand the technologies behind create-react-app and to learn how to use Webpack.
          </p>
          <ul className={`d-flex flex-wrap ${width <= 785 ? '' : 'justify-content-end'}`}>
            <li>React</li>
            <li>Bootstrap</li>
            <li>SASS</li>
            <li>Webpack</li>
            <li>Babel</li>
          </ul>
          <ul className={`d-flex ${width <= 785 ? '' : 'justify-content-end'}`}>
            <li>
              <a
                href='https://github.com/BryanU1/portfolio'
                target='_blank'
              >
                <img className='git_icon' src={github}/>
              </a>
              <span>Code</span>
            </li>
            <li>
              <a 
                href='https://bryanung.com/'
                target='_blank'
              >
                <img className='link_icon' src={external_link}/>
              </a>
              <span>Link</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects;