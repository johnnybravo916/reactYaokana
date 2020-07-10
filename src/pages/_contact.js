import React, { useEffect, useState } from "react";

import Banner from "../components/banner.component";
import ProjectComponent from "../components/project.component";

import useInput from "../hooks/contactHook";
import axios from "axios";

const ContactPage = (callback) => {
    const [content, setContent] = useState([]);
    const {
        value: firstName,
        bind: bindFirstName,
        reset: resetFirstName,
    } = useInput("");
    // const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${firstName}`);

        let projectsUrl =
            "https://cors-anywhere.herokuapp.com/http://yaokana.com/wp-json/contact-form-7/v1/contact-forms/49/feedback";
        axios
            .post(projectsUrl)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

        resetFirstName();
        // resetLastName();
    };

    useEffect(() => {
        let contentUrl = "http://yaokana.com/wp-json/wp/v2/pages/15?_embed";
        axios
            .get(contentUrl)
            .then((contentData) => {
                console.log(contentData.data);
                setContent([contentData.data]);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {content.map((content, index) => {
                return (
                    <React.Fragment key={index}>
                        <Banner
                            page="contact"
                            bannerTitle={content.title.rendered}
                            imgUrl={
                                content._embedded["wp:featuredmedia"][0]
                                    .media_details.sizes.full.source_url
                            }
                        />
                        <main className="main">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="contact">
                                            <h2 className="contact__title">
                                                hello there
                                            </h2>
                                            <form onSubmit={handleSubmit}>
                                                <input
                                                    type="text"
                                                    placeholder="name"
                                                    {...bindFirstName}
                                                />
                                                <input
                                                    type="email"
                                                    placeholder="email"
                                                />
                                                <textarea placeholder="message"></textarea>
                                                <input
                                                    type="submit"
                                                    value="send"
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <ProjectComponent />
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default ContactPage;
