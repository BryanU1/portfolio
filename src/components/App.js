import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Hero from './Hero';
import About from './About';

function App() {
  return (
    <div className="app">
      <Navigation />
      <div className="content">
        <Hero />
        <About />
      </div>
    </div>
  )
}

export default App;