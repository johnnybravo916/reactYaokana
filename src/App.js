import React from 'react';
import { Switch, Route } from "react-router-dom";

import Grid from "./components/grid.component";
import Header from "./components/header.component";
import Menu from "./components/menu.component";
import Footer from "./components/footer.component";

import Homepage from "./pages/home";
import AboutPage from "./pages/about";
import MediaPage from "./pages/media";
import ProjectsPage from "./pages/projects";
import SinglePage from "./pages/single";
import Contactpage from "./pages/contact";

import "./sass/main.scss";

function App() { 
    return (
        <>
            <Grid/>
            <Header/>
            <Menu/>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/about" component={AboutPage} />
                <Route path="/media" component={MediaPage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/contact" component={Contactpage} />
                <Route path="/:slug" component={SinglePage} />
            </Switch>
            <Footer/>
        </>
    );
}

export default App;
