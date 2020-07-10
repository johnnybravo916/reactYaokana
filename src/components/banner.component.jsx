import React from "react";

const Banner = (props) => {
    switch (props.page) {
        case "about":
            return (
                <div
                    className="banner"
                    style={{ backgroundImage: `url(${props.imgUrl})` }}
                >
                    <h1 className="banner__about">{props.bannerTitle}</h1>
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
                    <h1>{props.bannerTitle}</h1>
                </div>
            );
        case "contact":
            return (
                <div
                    className="banner"
                    style={{ backgroundImage: `url(${props.imgUrl})` }}
                >
                    <h1>{props.bannerTitle}</h1>
                </div>
            );
        default:
            return (
                <div
                    className="banner {props.page}"
                    style={{ backgroundColor: props.bgColor }}
                >
                    <h1>{props.bannerTitle}</h1>
                </div>
            );
    }
};

export default Banner;
