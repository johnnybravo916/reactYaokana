import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import parse from "html-react-parser";

import { DataContext } from "../context/context";

import Preloader from "./preloader.component";

const NextPrev = (props) => {
    const appContext = useContext(DataContext);
    const {
        nextprevProject,
        loadingNextprevProject,
        setLoadingNextprevProject,
        setNextID,
        setPrevID,
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
        {props.pageType === 'singlePage' ? 'singlepage' : 'not single page'}
            {loadingNextprevProject ? (
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
                                    className={`latestprojectgrid__singleproject ${props.prevId === null ? 'latestprojectgrid--first' : 'latestprojectgrid--last'}`}
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

export default NextPrev;
