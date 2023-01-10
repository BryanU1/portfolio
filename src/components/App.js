import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';
import Hero from './Hero'

function App() {
  return (
    <div>
      <Navigation />
      <div className="content">
        <Hero />
      </div>
    </div>
  )
}

export default App;