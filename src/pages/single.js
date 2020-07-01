import React, { useEffect, useState } from "react";

import Banner from "../components/banner.component";

import axios from "axios";
import parse from "html-react-parser";

const SinglePage = (props) => {
    const [project, setProject] = useState([]);
    const [category, setCategory] = useState();

    useEffect(() => {
        const slug = props.match.params.slug;
        let projectUrl = `https://yaokana.com/wp-json/wp/v2/projects?slug=${slug}`;
        axios
            .get(projectUrl)
            .then((projectData) => {
                setProject([projectData.data[0]]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    // useEffect(() => {
    //   let categoryUrl = "https://yaokana.com/wp-json/wp/v2/categories";
    //   axios
    //       .get(categoryUrl)
    //       .then((categoryData) => {
    //           console.log("category data ", categoryData.data);
    //           setCategory([categoryData.data]);
    //           categoryData.data.filter(data => {
    //             data.id == "21";
    //             console.log(data.id)
    //           })
    //       })
    //       .catch((error) => {
    //           console.log(error);
    //       });
    // }, []);    

    return (
        <>
            {project.map((project, index) => {
                return (
                    <React.Fragment key={index}>
                        <Banner
                            title={project.title.rendered}
                            imgUrl="#"
                            bgColor="#000"
                        />
                        <main className="main project">
                            <div className="container">
                                <div className="projectcontent">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <h2>{project.title.rendered}</h2>
                                            <h3>residential</h3>
                                        </div>
                                        <div className="col-md-6">
                                          {project.content.rendered}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default SinglePage;
