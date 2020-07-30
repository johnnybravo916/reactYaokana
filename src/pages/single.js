import React, { useEffect, useContext } from "react";

import Banner from "../components/banner.component";
import ContactComponent from "../components/contact.component";
import ProjectFooter from "../components/projectfooter.component";

import parse from "html-react-parser";

import { DataContext } from "../context/context";

import Preloader from "../components/preloader.component";

const SinglePage = ({ match }) => {
    let slug = match.params.slug;
    const appContext = useContext(DataContext);
    const {
        singleProject,
        setSinglePath,
        loadingSingleProject,
        setloadingSingleProject
    } = appContext;

    useEffect(() => {
        setloadingSingleProject(true);
        setSinglePath(slug);
    }, [setloadingSingleProject,setSinglePath, slug]);

    return (
        <>
            {loadingSingleProject ? (
                <Preloader/>
            ) : (
                singleProject.map((project, index) => {
                    return (
                        <React.Fragment key={index}>
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
                                                <h2>
                                                    {parse(
                                                        project.title.rendered
                                                    )}
                                                </h2>
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
                                            </div>
                                            <div className="col-md-6">
                                                {parse(
                                                    project.content.rendered
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="projectgallery">
                                    {project.acf.photo_gallery
                                        ? project.acf.photo_gallery.map(
                                              (photo, index) => {
                                                  return (
                                                      <img
                                                          key={index}
                                                          src={photo}
                                                          alt={parse(
                                                              project._embedded[
                                                                  "wp:featuredmedia"
                                                              ][0].title
                                                                  .rendered
                                                          )}
                                                      />
                                                  );
                                              }
                                          )
                                        : null}
                                </div>
                                <ContactComponent />
                                <ProjectFooter 
                                    pageType={'singlePage'}
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
