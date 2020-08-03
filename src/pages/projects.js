import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import parse from "html-react-parser";

import { DataContext } from "../context/context";

import Preloader from "../components/preloader.component";

const ProjectsPage = (props) => {
    const appContext = useContext(DataContext);
    const { projects, handleBackground, loadingProjects, setFooterClass } = appContext;

    useEffect(()=>{
        props.history.location.pathname === '/projects' ? 
        setFooterClass('gridLayout') :
        setFooterClass('');
    }, [setFooterClass, props.history.location.pathname])

    return (
        <>
            {loadingProjects ? (
                <Preloader />
            ) : (
                <main className="linkgrid">
                    {projects.map((project, index) => {
                        return (
                            <div
                                key={index}
                                id={project.id}
                                className="linkgrid__background animate__animated"
                                style={{
                                    backgroundImage: `url(${project._embedded["wp:featuredmedia"][0].media_details.sizes.full.source_url})`,
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
                                    onMouseOver={() =>
                                        handleBackground(project.id)
                                    }
                                >
                                    <Link
                                        to={`/${project.slug}`}
                                        title={parse(project.title.rendered)}
                                    >
                                        <h4>
                                            {
                                                (project._embedded[
                                                    "wp:term"
                                                ][0][0].name).toLowerCase()
                                            }
                                        </h4>
                                        {parse(project.title.rendered)}
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </main>
            )}
        </>
    );
};

export default ProjectsPage;
