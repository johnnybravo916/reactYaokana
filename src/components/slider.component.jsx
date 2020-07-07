import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import axios from "axios";
import parse from "html-react-parser";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        let contentUrl = "http://yaokana.com/wp-json/wp/v2/projects?_embed";
        axios
            .get(contentUrl)
            .then((contentData) => {
                console.log(contentData.data);
                const featuredCategories = contentData.data.filter((content) =>
                    content.categories.every((category) => category === 20)
                );
                setContent([...featuredCategories]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <AutoplaySlider
            play={true}
            bullets={false}
            cancelOnInteraction={false}
            interval={2000}
        >
            {content.map((content, index) => {
                return (
                    <div
                        className="slider__element"
                        key={index}
                        style={{
                            backgroundImage: `url(${content._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url})`,
                        }}
                    >
                        <Link to={`/${content.slug}`} className="slider__title">
                            <h2>{parse(content.title.rendered)}</h2>
                        </Link>
                        <Link to={`/${content.slug}`} className="slider__link">
                            click for more
                        </Link>
                        <span className="slider__element--number">
                            0{index + 1}
                        </span>
                    </div>
                );
            })}
        </AutoplaySlider>
    );
};
export default Slider;
