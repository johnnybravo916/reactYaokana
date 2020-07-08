import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import parse from "html-react-parser";

const ProjectComponent = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let projectsUrl = "http://yaokana.com/wp-json/wp/v2/projects?_embed";
        axios
            .get(projectsUrl)
            .then((projectsData) => {
                setProjects([...projectsData.data]);
                console.log(projectsData.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className="latestprojects">
            <h3>latest projects</h3>
            <div className="latestprojectgrid">
                {projects.slice(0, 2).map((project, index) => {
                    return (
                        <Link
                            key={index}
                            to={`/${project.slug}`}
                            title={parse(project.title.rendered)}
                            className="latestprojectgrid__singleproject"
                            style={{
                                backgroundImage: `url(${project._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url})`,
                            }}
                        >
                            <h4>{parse(project.title.rendered)}</h4>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ProjectComponent;
