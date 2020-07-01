import React, { useEffect, useState } from "react";

const ProjectsPage = (props) => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        let projectsUrl = "http://yaokana.com/wp-json/wp/v2/projects?_embed";
        fetch(projectsUrl)
            .then((projectData) => projectData.json())
            .then((projectData) => setProjects([...projectData]));
    }, []);

    const getBackground = (background) => {
        const linkgrid = document.querySelector('.linkgrid');
        linkgrid.style.backgroundImage = `url(${background})`;
        // too slow, will think of something else, maybe show all the images then hide/show on hover
    };

    return (
        <main className="linkgrid" style={{ backgroundImage: "url('http://yaokana.com/wp/wp-content/uploads/2018/08/yaokana_watermark_FeaturedImage-1140x600.jpg')" }}>
            <div className="linkgrid__wrapper">
                {projects.map((project, index) => {
                    return (
                        <div
                            key={index}
                            data-img={
                                project._embedded["wp:featuredmedia"][0]
                                    .media_details.sizes.large.source_url
                            }
                            className="linkgrid__linkwrap"
                            onMouseOver={() => getBackground(project._embedded["wp:featuredmedia"][0]
                            .media_details.sizes.large.source_url)}
                        >
                            <a
                                href={project.link}
                                title={project.title.rendered}
                            >
                                {project.title.rendered}
                            </a>
                        </div>
                    );
                })}
            </div>
        </main>
    );
};

export default ProjectsPage;
