import React from 'react';

const Banner = (props) => {
  return(
    <div className="banner" style={{ backgroundColor: props.bgColor }}>
    {/* <div className="banner" style={{ backgroundImage: `url(${props.imgUrl})` }}> */}
      <h1>{props.title}</h1>
    </div>
  )
}

export default Banner;