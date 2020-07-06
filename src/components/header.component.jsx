import React, { useState, useEffect } from "react";

import MainMenu from "./mainmenu.component";
import PageMenu from "./pagemenu.component";

import { Link, withRouter } from "react-router-dom";

const Header = (props) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const showMenuClasses = menuOpen
        ? "overlay animate__animated show animate__slideInLeft"
        : "overlay animate__animated";
    const btnClasses = menuOpen ? "btn__menu btn--active" : "btn__menu";

    useEffect(() => {
        const { history } = props;

        history.listen(() => {
            setMenuOpen(false);
        });
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
                <PageMenu />
            </header>
            <MainMenu showMenu={showMenuClasses} />
        </>
    );
};

export default withRouter(Header);
