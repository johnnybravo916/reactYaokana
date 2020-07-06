import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Banner = (props) => {
  const [pageData, setpageData] = React.useState(null);

  

  return(
    <div className="banner {props.page}" style={{ backgroundColor: props.bgColor }}>
    {/* <div className="banner" style={{ backgroundImage: `url(${props.imgUrl})` }}> */}
      <h1>{props.title}</h1>
      <Link to="/projects" title="View Projects" className="slider__mainlink">view projects</Link>
    </div>
  )
}

export default Banner;