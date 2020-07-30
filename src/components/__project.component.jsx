import React, { useContext } from "react";
import { Link } from "react-router-dom";

import parse from "html-react-parser";

import { DataContext } from "../context/context";

import Preloader from "./preloader.component";

const ProjectComponent = () => {
    const appContext = useContext(DataContext);
    const { projects, loadingProjects } = appContext;

    return (
        <>
            {loadingProjects ? (
                <Preloader />
            ) : (
                <div className="latestprojects">
                    <h2>latest projects</h2>
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
                                    <div className="latestprojectgrid__titles">
                                        <strong>
                                            {
                                                project._embedded[
                                                    "wp:term"
                                                ][0][0].name
                                            }
                                        </strong>
                                        <h4>{parse(project.title.rendered)}</h4>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
};

export default ProjectComponent;
