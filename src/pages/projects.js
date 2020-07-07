import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import parse from "html-react-parser";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [background, setBackground] = useState(null);

    useEffect(() => {
        let projectsUrl = "http://yaokana.com/wp-json/wp/v2/projects?_embed";
        axios
            .get(projectsUrl)
            .then((projectsData) => {
                setProjects([...projectsData.data]);
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
            {projects.map((project, index) => {
                return (
                    <div
                        key={index}
                        id={project.id}
                        className="linkgrid__background animate__animated"
                        style={{
                            backgroundImage: `url(${project._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url})`,
                        }}
                    ></div>
                );
            })}
            <div className="linkgrid__wrapper">
                {projects.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className="linkgrid__linkwrap"
                            onMouseOver={() => setBackground(project.id)}
                        >
                            <Link
                                to={`/${project.slug}`}
                                title={parse(project.title.rendered)}
                            >
                                {parse(project.title.rendered)}
                            </Link>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default ProjectsPage;
