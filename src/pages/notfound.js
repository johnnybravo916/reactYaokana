import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
    return (
        <div className="center pagenotfound">
             <Helmet><title>404 Page not Found | Yaokana</title></Helmet>
            <div className="pagenotfound__content">
                <h2>404 error</h2>
                <h3>the page does not exist</h3>
                <Link
                    to="/"
                    title="go to homepage"
                    className="pagenotfound__link"
                >
                    go to homepage
                </Link>
                <Link
                    to="/projects"
                    title="View Projects"
                    className="slider__mainlink"
                >
                    view projects
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
