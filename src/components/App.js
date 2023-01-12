import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="content">
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  )
}

export default App;