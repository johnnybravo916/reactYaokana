import React, { useContext } from "react";

import Banner from "../components/banner.component";
import ContactComponent from "../components/contact.component";
import ProjectFooter from "../components/projectfooter.component";
import Slide from "react-reveal/Slide";
import parse from "html-react-parser";

import { DataContext } from "../context/context";

import Preloader from "../components/preloader.component";

const AboutPage = () => {
    const appContext = useContext(DataContext);
    const { about, loadingAbout } = appContext;

    return (
        <>
            {loadingAbout ? (
                <Preloader />
            ) : (
                about.map((content, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Banner
                                page="about"
                                bannerTitle={content.title.rendered}
                                imgUrl={
                                    content._embedded["wp:featuredmedia"][0]
                                        .media_details.sizes.large.source_url
                                }
                                bgColor="#000"
                                secondImgUrl={content.acf.profile_photo}
                            />
                            <main className="main about">
                                <h2>{content.acf.main_header}</h2>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 about__content">
                                            <Slide bottom>
                                                <h3>
                                                    {content.acf.sub_header}
                                                </h3>
                                            </Slide>
                                            <Slide bottom>
                                                {parse(
                                                    content.content.rendered
                                                )}
                                            </Slide>
                                        </div>
                                    </div>
                                </div>
                                <ContactComponent />
                                <ProjectFooter />
                            </main>
                        </React.Fragment>
                    );
                })
            )}
        </>
    );
};

export default AboutPage;
