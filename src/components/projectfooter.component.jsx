import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import parse from "html-react-parser";

import { DataContext } from "../context/context";

import Preloader from "../components/preloader.component";

const ProjectFooter = (props) => {
    const appContext = useContext(DataContext);
    const {
        nextprevProject,
        loadingNextprevProject,
        setLoadingNextprevProject,
        setNextID,
        setPrevID,
        projects,
        loadingProjects,
    } = appContext;

    useEffect(() => {
        setLoadingNextprevProject(true);
        setPrevID(props.prevId);
        setNextID(props.nextId);
    }, [
        setLoadingNextprevProject,
        setNextID,
        setPrevID,
        props.prevId,
        props.nextId,
    ]);

    return (
        <>
            {props.pageType === "singlePage" ? (
                loadingNextprevProject ? (
                    <Preloader />
                ) : (
                    <div className="latestprojects">
                        <h2>projects</h2>
                        <div className="latestprojectgrid">
                            {nextprevProject.map((project, index) => {
                                return (
                                    <Link
                                        key={index}
                                        to={`/${project.slug}`}
                                        className={`latestprojectgrid__singleproject ${
                                            props.prevId === null
                                                ? "latestprojectgrid--first"
                                                : "latestprojectgrid--last"
                                        }`}
                                        title={parse(project.title.rendered)}
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
                                            <h4>
                                                {parse(project.title.rendered)}
                                            </h4>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )
            ) : loadingProjects ? (
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

export default ProjectFooter;
