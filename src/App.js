import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import Grid from "./components/grid.component";
import Header from "./components/header.component";
import Footer from "./components/footer.component";
import ScrollTop from "./components/scroll.component";

import Homepage from "./pages/home";
import AboutPage from "./pages/about";
import MediaPage from "./pages/media";
import ProjectsPage from "./pages/projects";
import SinglePage from "./pages/single";
import Contactpage from "./pages/contact";
import NotFoundPage from './pages/notfound';

import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./sass/main.scss";

function App({ location }) {
    return (
        <>
            <Grid />
            <Header />
            <TransitionGroup>
                <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames={"fade"}
                >
                    <div className="page">
                        <ScrollTop/>
                        <Switch location={location}>
                            <Route exact path="/" component={Homepage} />
                            <Route exact path="/about" component={AboutPage} />
                            <Route exact path="/media" component={MediaPage} />
                            <Route exact path="/projects" component={ProjectsPage} />
                            <Route exact path="/projects/:slug" component={SinglePage} />
                            <Route exact path="/contact" component={Contactpage} />
                            <Route component={NotFoundPage} />
                        </Switch>
                    </div>
                </CSSTransition>
            </TransitionGroup>
            <Footer />
        </>
    );
}

export default withRouter(App);
