import React, { useEffect,useContext } from "react";

import parse from "html-react-parser";

import { DataContext } from "../context/context";

import Preloader from "../components/preloader.component";

const MediaPage = (props) => {
    const appContext = useContext(DataContext);
    const { media, handleBackground, loadingMedia,setFooterClass } = appContext;

    useEffect(()=>{
        props.history.location.pathname === '/media' ? 
        setFooterClass('gridLayout') :
        setFooterClass('');
    }, [setFooterClass, props.history.location.pathname])

    return (
        <>
            {loadingMedia ? (
                <Preloader/>
            ) : (
                <main className="linkgrid">
                    {media.map((media, index) => {
                        return (
                            <div
                                key={index}
                                id={media.id}
                                className="linkgrid__background animate__animated"
                                style={{
                                    backgroundImage: `url(${media.acf.image})`,
                                }}
                            ></div>
                        );
                    })}
                    <div className="linkgrid__wrapper">
                        {media.map((media, index) => {
                            return (
                                <div
                                    key={index}
                                    className="linkgrid__linkwrap"
                                    onMouseOver={() =>
                                        handleBackground(media.id)
                                    }
                                >
                                    <a
                                        href={media.acf.link}
                                        title={parse(media.title.rendered)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {parse(media.title.rendered)}
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </main>
            )}
        </>
    );
};

export default MediaPage;
