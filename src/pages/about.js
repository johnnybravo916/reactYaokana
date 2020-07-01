import React, { useEffect, useState } from "react";

import Banner from "../components/banner.component";

import axios from "axios";
import parse from "html-react-parser";

const AboutPage = () => {
    const [content, setContent] = useState([]);

    useEffect(() => {
        let contentUrl = "http://yaokana.com/wp-json/wp/v2/pages/1911?_embed";
        axios
            .get(contentUrl)
            .then((contentData) => {
                console.log(contentData.data);
                setContent([contentData.data]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {content.map((content, index) => {
                return (
                    <React.Fragment key={index}>
                        <Banner
                            title={content.title.rendered}
                            imgUrl="#"
                            bgColor="#000"
                        />
                        <main className="main about">
                            <h2>Interior Designer</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 about__content">
                                        <h2>Alyana Yaokana</h2>
                                        {content.content.rendered}
                                    </div>
                                </div>
                            </div>
                        </main>
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default AboutPage;
