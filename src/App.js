import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header.component";

import Homepage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import Contactpage from "./pages/contact";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/about" compontent={AboutPage} />
                <Route path="/projects" compontent={ProjectsPage} />
                <Route path="/contact" compontent={Contactpage} />
            </Switch>
        </div>
    );
}

export default App;
