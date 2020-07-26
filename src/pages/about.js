import React, { useEffect, useState } from "react";

import Banner from "../components/banner.component";
import ContactComponent from "../components/contact.component";
import ProjectComponent from "../components/project.component";

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
                            page="about"
                            bannerTitle={content.title.rendered}
                            imgUrl={content._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url}
                            bgColor="#000"
                            secondImgUrl = {content.acf.profile_photo}
                        />
                        <main className="main about">
                            <h2>{content.acf.main_header}</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 about__content">
                                        <h3>{content.acf.sub_header}</h3>
                                        { parse(content.content.rendered) }
                                    </div>
                                </div>
                            </div>
                        <ContactComponent/>
                        <ProjectComponent/>
                        </main>
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default AboutPage;
