import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <Link
                to="/"
                title="Alyana Yaokana"
                className="header__branding"
            >
                <img
                    src="https://via.placeholder.com/150"
                    alt="Alyana Yaokana"
                />
            </Link>
            <div className="header__menubtn" title="menu">
                <span></span>
                <span></span>
            </div>
            <nav className="nav--main">
                <ul>
                    <li>
                        <Link to="/about" title="#">
                            hello there
                        </Link>
                    </li>
                    <li>
                        <Link to="/media" title="#">
                            media
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" title="#">
                            contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
