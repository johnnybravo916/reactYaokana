import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import parse from "html-react-parser";

const MediaPage = () => {
    const [media, setMedia] = useState([]);
    const [background, setBackground] = useState(null);

    useEffect(()=>{
        const pageClass = document.querySelector('.page');
        pageClass.classList.add('page--projects');
    })

    useEffect(() => {
        let mediaUrl = "http://yaokana.com/wp-json/wp/v2/medialinks?_embed";
        axios
            .get(mediaUrl)
            .then((mediaData) => {
                setMedia([...mediaData.data]);
                console.log(mediaData.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() => {
        const backgroundImgArray = document.querySelectorAll(
            ".linkgrid__background"
        );
        for (const backgroundImg of backgroundImgArray) {
            if (+backgroundImg.id === background) {
                backgroundImg.style.zIndex = "-1";
                backgroundImg.classList.add("animate__fadeIn");
            } else {
                backgroundImg.style.zIndex = "-2";
                backgroundImg.classList.remove("animate__fadeIn");
            }
        }
    }, [background]);

    return (
        <main className="linkgrid">
            {media.map((media, index) => {
                return (
                    <div
                        key={index}
                        id={media.id}
                        className="linkgrid__background animate__animated"
                        style={{
                            backgroundImage: `url(${media.acf.image})`,
                        }}
                    ></div>
                );
            })}
            <div className="linkgrid__wrapper">
                {media.map((media, index) => {
                    return (
                        <div
                            key={index}
                            className="linkgrid__linkwrap"
                            onMouseOver={() => setBackground(media.id)}
                        >
                            <Link
                                to={`/${media.slug}`}
                                title={parse(media.title.rendered)}
                            >
                                {parse(media.title.rendered)}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default MediaPage;
