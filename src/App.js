import React from "react";
import { Switch, Route } from "react-router-dom";

import Grid from "./components/grid.component";
import Header from "./components/header.component";
import Menu from "./components/menu.component";
import Footer from "./components/footer.component";

import Homepage from "./pages/home";
import AboutPage from "./pages/about";
import ProjectsPage from "./pages/projects";
import Contactpage from "./pages/contact";

function App() {
    return (
        <>  
            <Grid/>
            <Header/>
            <Menu/>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/about" compontent={AboutPage} />
                <Route path="/projects" compontent={ProjectsPage} />
                <Route path="/contact" compontent={Contactpage} />
            </Switch>
            <Footer/>
        </>
    );
}

export default App;
