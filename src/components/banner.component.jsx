import React from 'react';
import {Link} from 'react-router-dom';

const Banner = (props) => {

  switch(props.page){
    case 'about':
      return (
        <div className="banner" style={{ backgroundImage: `url(${props.imgUrl})` }}> 
          <h1 className="banner__about">{props.title}</h1>
          <img className="banner__image" src="#" alt="#"/>
        </div>
      );
    case '/media':
      return (null);
    case '/projects':
      return (null);
    case '/contact':
      return (
        <div className="banner" style={{ backgroundImage: `url(${props.imgUrl})` }}>
          <h1>{props.title}</h1>
        </div>
      );
    default:
      return (
        <div className="banner {props.page}" style={{ backgroundColor: props.bgColor }}>
          <h1>{props.title}</h1>
        </div>
      );
  }
}

export default Banner;