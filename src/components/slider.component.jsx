import React from 'react';

import AutoplaySlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Slider = () => {
  return (
    <AutoplaySlider
      play={true}
      bullets={false}
    >
    <div className="slider__element">
      <h2>
        Chimes 1
      </h2>
      <span className="slider__element--number">01</span>
    </div>
    <div className="slider__element">
      <h2>
        Chimes 2
      </h2>
      <span className="slider__element--number">02</span>
    </div>
    <div className="slider__element">
      <h2>
        Chimes 3
      </h2>
      <span className="slider__element--number">03</span>
    </div>
    <div className="slider__element">
      <h2>
        Chimes 4
      </h2>
      <span className="slider__element--number">04</span>
    </div>
  </AutoplaySlider>    
  )
}
export default Slider;