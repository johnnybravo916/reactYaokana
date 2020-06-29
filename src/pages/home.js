import React from 'react';
import {Link} from 'react-router-dom';

const HomePage  = () => {
  return(
    <main>
    <div className="slider">
      <div className="slider__element">
        <h2>
          Chimes
        </h2>
        <span className="slider__element--number">01</span>
      </div>
      <Link to="/projects" title="View Projects" className="slider__mainlink">view projects</Link>
    </div>
  </main>
  )
}

export default HomePage ;