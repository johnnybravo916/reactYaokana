import React, { useEffect, useState } from "react";

import Banner from "../components/banner.component";
import ContactComponent from "../components/contact.component";
import NextPrev from "../components/nextprevproject.component";

import axios from "axios";
import parse from "html-react-parser";

const SinglePage = (props) => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const slug = props.match.params.slug;
        let projectUrl = `https://yaokana.com/wp-json/wp/v2/projects?slug=${slug}&_embed`;
        axios
            .get(projectUrl)
            .then((projectData) => {
                setProject([projectData.data[0]]);
                //console.log(projectData.data[0]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [props.match.params.slug]);

    return (
        <>
            {project.map((project, index) => {
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
                                                {parse(project.title.rendered)}
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
                                            {parse(project.content.rendered)}
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
                                                          ][0].title.rendered
                                                      )}
                                                  />
                                              );
                                          }
                                      )
                                    : null}
                            </div>
                            <ContactComponent />
                            <NextPrev
                                nextId={project.next_post}
                                prevId={project.previous_post}
                            />
                        </main>
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default SinglePage;
