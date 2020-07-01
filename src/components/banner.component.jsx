import React from 'react';
import {Link} from 'react-router-dom';

const Banner = (props) => {
  return(
    <div className="banner" style={{ backgroundColor: props.bgColor }}>
    {/* <div className="banner" style={{ backgroundImage: `url(${props.imgUrl})` }}> */}
      <h1>{props.title}</h1>
      <Link to="/projects" title="View Projects" className="slider__mainlink">view projects</Link>
    </div>
  )
}

export default Banner;