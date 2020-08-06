import React from "react";
import Slide from "react-reveal/Slide";
const Banner = (props) => {
    switch (props.page) {
        case "about":
            return (
                <div
                    className="banner"
                    style={{ backgroundImage: `url(${props.imgUrl})` }}
                >
                    <Slide bottom><h1 className="banner__about">{props.bannerTitle}</h1></Slide>
                    <img
                        className="banner__image"
                        src={props.secondImgUrl}
                        alt={props.bannerTitle}
                    />
                </div>
            );
        case "media":
            return null;
        case "projects":
            return null;
        case "single":
            return (
                <div
                    className="banner"
                    style={{ backgroundImage: `url(${props.imgUrl})` }}
                >
                    <Slide bottom><h1>{props.bannerTitle}</h1></Slide>
                </div>
            );
        case "contact":
            return (
                <div
                    className="banner"
                    style={{ backgroundImage: `url(${props.imgUrl})` }}
                >
                    <Slide bottom><h1>{props.bannerTitle}</h1></Slide>
                </div>
            );
        default:
            return (
                <div
                    className="banner {props.page}"
                    style={{ backgroundColor: props.bgColor }}
                >
                    <Slide bottom><h1>{props.bannerTitle}</h1></Slide>
                </div>
            );
    }
};

export default Banner;
