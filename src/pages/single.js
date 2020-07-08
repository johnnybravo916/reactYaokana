import React, { useEffect, useState } from "react";

import Banner from "../components/banner.component";

import axios from "axios";
import parse from "html-react-parser";

const SinglePage = (props) => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        const slug = props.match.params.slug;
        let projectUrl = `https://yaokana.com/wp-json/wp/v2/projects?slug=${slug}&_embed`;
        axios
            .get(projectUrl)
            .then((projectData) => {
                setProject([projectData.data[0]]);
                console.log(projectData.data[0])
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {project.map((project, index) => {
                return (
                    <React.Fragment key={index}>
                        <Banner
                            title={parse(project.title.rendered)}
                            bgColor="#000"
                            imgUrl={project._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url}
                            page="single"
                        />
                        <main className="main project">
                            <div className="container">
                                <div className="projectcontent">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <h2> { parse(project.title.rendered) }</h2>
                                            <h3>{project._embedded["wp:term"][0][0].name}</h3>
                                        </div>
                                        <div className="col-md-6">
                                          {parse(project.content.rendered)}
                                        </div>
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

export default SinglePage;
