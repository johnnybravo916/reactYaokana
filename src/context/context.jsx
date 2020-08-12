import React, { useState, useEffect } from "react";
import axios from "axios";

const DataContext = React.createContext();

const DataProvider = (props) => {
    const url = "https://yaokana.com/wp/wp-json/wp/v2/";
    const [slider, setSlider] = useState([]);
    const [loadingSlider, setLoadingSlider] = useState(true);
    const [homePage, setHomePage] = useState([]);
    const [projects, setProjects] = useState([]);
    const [loadingProjects, setLoadingProjects] = useState(true);
    const [projectPage, setProjectPage] = useState([])
    const [media, setMedia] = useState([]);
    const [loadingMedia, setLoadingMedia] = useState(true);
    const [mediaPage, setMediaPage] = useState([]);
    const [about, setAbout] = useState([]);
    const [loadingAbout, setLoadingAbout] = useState(true);
    const [singleProject, setSingleProject] = useState([]);
    const [loadingSingleProject, setloadingSingleProject] = useState(true);
    const [singlePath, setSinglePath] = useState("");
    const [nextprevProject, setnextprevProject] = useState([]);
    const [loadingNextprevProject, setLoadingNextprevProject] = useState(true);
    const [nextID, setNextID] = useState("");
    const [prevID, setPrevID] = useState("");
    const [contact, setContact] = useState([]);
    const [footerClass, setFooterClass] = useState('');
    const [loadingContact, setLoadingContact] = useState(true);

    const urlProjects = `projects?_embed`;
    const urlMedia = `medialinks?_embed`;
    const urlAbout = `pages/1911?_embed`;
    const urlProjectPage = `pages/189?_embed`;
    const urlMediaPage = `pages/2002?_embed`;
    const urlHomePage = `pages/5?_embed`;
    const urlContact = `pages/15?_embed`;

    const [background, setBackground] = useState(null);

    
    useEffect(() => {
        const projectUrl = `${url}projects?slug=${singlePath}&_embed`;
        axios
            .get(projectUrl)
            .then((projectData) => {
                if (singlePath) {
                    setSingleProject([projectData.data[0]]);
                    setloadingSingleProject(false);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [singlePath]);

    const getProjects = () => {
        axios
            .get(`${url}${urlProjects}`)
            .then((content) => {
                const featuredCategories = content.data.filter((featured) =>
                    featured.categories.every((category) => category === 20)
                );
                setSlider([...featuredCategories]);
                setLoadingSlider(false);
                setProjects([...content.data]);
                setLoadingProjects(false);
                const prevProject = content.data.filter((project) => {
                    return project.id === prevID;
                });

                const nextProject = content.data.filter((project) => {
                    return project.id === nextID;
                });
                setnextprevProject([...prevProject, ...nextProject]);
                setLoadingNextprevProject(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

 
    const getHomePage = () => {
        axios
            .get(`${url}${urlHomePage}`)
            .then((content) => {
                setHomePage([content.data]);
            })
            .catch((error) => {
                console.log(error);
            });
    };   

 
    const getMediaPage = () => {
        axios
            .get(`${url}${urlMediaPage}`)
            .then((content) => {
                setMediaPage([content.data]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getProjectPage = () => {
        axios
            .get(`${url}${urlProjectPage}`)
            .then((content) => {
                setProjectPage([content.data]);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getAbout = () => {
        axios
            .get(`${url}${urlAbout}`)
            .then((content) => {
                setAbout([content.data]);
                setLoadingAbout(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getContact = () => {
        axios
            .get(`${url}${urlContact}`)
            .then((content) => {
                setContact([content.data]);
                setLoadingContact(false);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    const getMedia = () => {
        axios
            .get(`${url}${urlMedia}`)
            .then((content) => {
                setMedia([...content.data]);
                setLoadingMedia(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const handleBackground = (bgID) => {
        setBackground(bgID);
    };

    useEffect(() => {
        const backgroundImgArray = document.querySelectorAll(
            ".linkgrid__background"
        );
        for (const backgroundImg of backgroundImgArray) {
            if (+backgroundImg.id === background) {
                backgroundImg.classList.add("linkgrid__fadeIn");
            } else {
                backgroundImg.classList.remove("linkgrid__fadeIn");
            }
        }
    }, [background]);

    useEffect(() => {
        getProjects();
        getMedia();
        getAbout();
        getContact();
        getProjectPage();
        getHomePage();
        getMediaPage();
    }, [urlProjects, prevID, nextID]);

    return (
        <DataContext.Provider
            value={{
                slider,
                loadingSlider,
                projects,
                loadingProjects,
                handleBackground,
                media,
                loadingMedia,
                about,
                loadingAbout,
                url,
                setSinglePath,
                singleProject,
                setloadingSingleProject,
                loadingSingleProject,
                nextprevProject,
                setLoadingNextprevProject,
                loadingNextprevProject,
                setNextID,
                setPrevID,
                setnextprevProject,
                contact,
                loadingContact,
                setFooterClass,
                footerClass,
                projectPage,
                homePage,
                mediaPage
            }}
        >
            {props.children}
        </DataContext.Provider>
    );
};

export { DataProvider, DataContext };
