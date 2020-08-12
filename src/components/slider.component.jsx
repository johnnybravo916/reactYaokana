import React, { useContext } from "react";
import { Link } from "react-router-dom";

import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

import parse from "html-react-parser";

import { DataContext } from "../context/context";

import Preloader from "../components/preloader.component";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    const appContext = useContext(DataContext);
    const { slider, loadingSlider } = appContext;

    return (
        <>
            {loadingSlider ? (
               <Preloader/>
            ) : (
                <AutoplaySlider
                    play={true}
                    bullets={false}
                    cancelOnInteraction={false}
                    interval={2000}
                >
                    {slider.map((content, index) => {
                        return (
                            <div
                                className="slider__element"
                                key={index}
                                style={{
                                    backgroundImage: `url(${content._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url})`,
                                }}
                            >
                                <Link
                                    to={`/projects/${content.slug}`}
                                    className="slider__title"
                                >
                                    <h2>{parse(content.title.rendered)}</h2>
                                </Link>
                                <Link
                                    to={`/projects/${content.slug}`}
                                    className="slider__link"
                                >
                                    click for more
                                </Link>
                                <span className="slider__element--number">
                                    0{index + 1}
                                </span>
                            </div>
                        );
                    })}
                </AutoplaySlider>
            )}
        </>
    );
};
export default Slider;
