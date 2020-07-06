import React from "react";
import {Link} from 'react-router-dom';

const Menu = (props) => {
    return (
        <header className={props.showMenu}>
            <Link
                to="/"
                title="Alyana Yaokana"
                className="overlay__branding"
            >
                <img
                    src="https://via.placeholder.com/150"
                    alt="Alyana Yaokana"
                />
            </Link>
            <nav className="nav--overlay">
                <ul>
                    <li>
                        <Link to="/about" title="hello there">
                            hello there
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" title="projects">
                            projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/media" title="media#">
                            media
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" title="contact">
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Menu;
