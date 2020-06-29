import React, { useEffect, useState } from "react";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let projectsUrl = "http://yaokana.com/wp-json/wp/v2/projects?embed";
        fetch(projectsUrl)
            .then((projectData) => projectData.json())
            .then((projectData) => setProjects(projectData));
    }, []);

    return (
        <main className="linkgrid" style={{backgroundColor:'#000'}}>
            <div className="linkgrid__wrapper">
                {projects.map((project, index) => {
                    return (
                    <div key={index} className="linkgrid__linkwrap">
                      <a href={project.link} title={project.title.rendered}>{project.title.rendered}</a>
                      </div>
                    )
                    ;
                })}
            </div>
        </main>
    );
};

export default ProjectsPage;
