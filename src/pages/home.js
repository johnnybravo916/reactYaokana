import React from 'react';
import {Link} from 'react-router-dom';

import SlickSlider from '../components/slider.component';

const HomePage  = () => {
  return(
    <main>
    
    <div className="slider">
      <SlickSlider/>
      <Link to="/projects" title="View Projects" className="slider__mainlink">view projects</Link>
    </div>
  </main>
  )
}

export default HomePage ;