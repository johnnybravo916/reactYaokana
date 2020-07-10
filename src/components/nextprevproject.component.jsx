import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import parse from "html-react-parser";

const NextPrev = (props) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const nextPostId = props.nextId;
        const prevPostId = props.prevId;
        let projectsUrl = "http://yaokana.com/wp-json/wp/v2/projects?_embed";
        axios
            .get(projectsUrl)
            .then((projectsData) => {
                const prevProject = projectsData.data.filter((project) => {
                    return project.id === prevPostId;
                });

                const nextProject = projectsData.data.filter((project) => {
                    return project.id === nextPostId;
                });
                setProjects([...prevProject, ...nextProject]);
                // console.log('test prev ', prevProject)
                console.log([...prevProject, ...nextProject]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [props.nextId, props.prevId]);

    return (
        <div className="latestprojects">
            <h3>projects {props.postId}</h3>
            <div className="latestprojectgrid">
                {projects.map((project,index) => {
                    return (
                        <Link
                            key={index}
                            to={`/${project.slug}`}
                            className="latestprojectgrid__singleproject"
                            title={parse(project.title.rendered)}
                            style={{
                                backgroundImage: `url(${project._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url})`,
                            }}
                        >
                            <h3>{parse(project.title.rendered)}</h3>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default NextPrev;
