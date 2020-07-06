import React, { useState, useEffect } from "react";

import MainMenu from "./mainmenu.component";

import { Link, withRouter } from "react-router-dom";

const Header = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const showMenuClasses = menuOpen
        ? "overlay animate__animated show animate__slideInLeft"
        : "overlay animate__animated";
    const btnClasses = menuOpen
    ? "btn__menu btn--active"
    : "btn__menu";

    useEffect(() => {
        props.history.listen(() => {
            setMenuOpen(!menuOpen)
        })
    });

    return (
        <>
            <div
                className={btnClasses}
                title="menu"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span></span>
                <span></span>
            </div>
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

                <nav className="nav--main">
                    <ul>
                        <li>
                            <Link to="/about" title="hello there">
                                hello there
                            </Link>
                        </li>
                        <li>
                            <Link to="/media" title="media">
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
            <MainMenu showMenu={showMenuClasses} />
        </>
    );
};

export default withRouter(Header);
