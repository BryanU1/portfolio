import React from 'react';

function About() {
  return (
    <section id='about'>
      <h2 className='text-md fw-700 secondary'>About Me</h2>
      <div className='d-flex flex-wrap justify-content-between'>
        <div>  
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum massa felis, quis tempor quam finibus non. Etiam aliquam felis mi, ac fringilla erat lobortis efficitur. Praesent velit enim, commodo non porttitor et, faucibus at nisi. Vestibulum sed dignissim massa, fermentum sodales urna. Duis imperdiet pulvinar tortor, vel scelerisque sem scelerisque eu. Praesent faucibus, ligula vel pellentesque faucibus, diam orci mollis ante, vel fermentum sapien erat a lorem. Sed eu suscipit augue, accumsan mattis ante. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam sapien ipsum, tempus vulputate ornare vitae, finibus ut ipsum. Maecenas at efficitur est, eget posuere orci. Pellentesque scelerisque tortor in sapien euismod pharetra. Sed in sem et elit interdum vulputate. In sit amet est eget justo lobortis venenatis. Aliquam erat volutpat.
          </p>
        </div>
        <div>
          <h3 className='text-sm fw-700 secondary'>Technologies I work with:</h3>
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