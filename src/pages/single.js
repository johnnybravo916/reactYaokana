import React, { useEffect, useContext } from "react";

import Banner from "../components/banner.component";
import ContactComponent from "../components/contact.component";
import ProjectFooter from "../components/projectfooter.component";

import { DataContext } from "../context/context";
import Preloader from "../components/preloader.component";

import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";
import parse from "html-react-parser";

const SinglePage = ({ match }) => {
    let slug = match.params.slug;
    const appContext = useContext(DataContext);
    const {
        singleProject,
        setSinglePath,
        loadingSingleProject,
        setloadingSingleProject,
    } = appContext;

    useEffect(() => {
        setloadingSingleProject(true);
        setSinglePath(slug);
    }, [setloadingSingleProject, setSinglePath, slug]);

    return (
        <>
            {loadingSingleProject ? (
                <Preloader />
            ) : (
                singleProject.map((project, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Helmet>{parse(project.yoast_head)}</Helmet>
                            <Banner
                                bannerTitle={parse(project.title.rendered)}
                                bgColor="#000"
                                imgUrl={
                                    project._embedded["wp:featuredmedia"][0]
                                        .media_details.sizes.large.source_url
                                }
                                page="single"
                            />
                            <main className="main project">
                                <div className="container">
                                    <div className="projectcontent">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <Slide bottom>
                                                    <h3>
                                                        {
                                                            project._embedded[
                                                                "wp:term"
                                                            ][0][0].name
                                                        }
                                                    </h3>
                                                    <h4>
                                                        {project.acf.client}
                                                        <sub>client</sub>
                                                    </h4>
                                                    <h4>
                                                        {project.acf.floor_area}
                                                        <sub>floor area</sub>
                                                    </h4>
                                                </Slide>
                                            </div>
                                            <div className="col-md-6">
                                                <Slide bottom>
                                                    {parse(
                                                        project.content.rendered
                                                    )}
                                                </Slide>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="projectgallery">
                                    <Slide bottom>
                                        {project.acf.photo_gallery
                                            ? project.acf.photo_gallery.map(
                                                  (photo, index) => {
                                                      return (
                                                          <img
                                                              key={index}
                                                              src={photo}
                                                              alt={parse(
                                                                  project
                                                                      ._embedded[
                                                                      "wp:featuredmedia"
                                                                  ][0].title
                                                                      .rendered
                                                              )}
                                                          />
                                                      );
                                                  }
                                              )
                                            : null}{" "}
                                    </Slide>
                                </div>

                                <ContactComponent />
                                <ProjectFooter
                                    pageType={"singlePage"}
                                    nextId={project.next_post}
                                    prevId={project.previous_post}
                                />
                            </main>
                        </React.Fragment>
                    );
                })
            )}
        </>
    );
};

export default SinglePage;
