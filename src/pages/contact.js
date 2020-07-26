import React, { useEffect, useState } from "react";

import Banner from "../components/banner.component";
import ProjectComponent from "../components/project.component";

import axios from "axios";

const ContactPage = () => {
    const initialState = {
        Name: "",
        Email: "",
        Subject: "",
        Message: "",
    };
    const [content, setContent] = useState([]);
    const [userdata, setUserdata] = useState(initialState);
    const { Name, Email, Subject, Message } = userdata;

    const handleChange = (e) => {
        console.log(e);
        setUserdata({ ...userdata, [e.target.name]: e.target.value });
        console.log(userdata);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailBody = {
            Name: userdata.Name,
            Email: userdata.Email,
            Subject: userdata.Subject,
            Message: userdata.Message,
        };

        const form = new FormData();
        for (const field in emailBody) {
            form.append(field, emailBody[field]);
        }

        console.log(form);
        let projectsUrl =
            "https://cors-anywhere.herokuapp.com/http://yaokana.com/wp-json/contact-form-7/v1/contact-forms/1958/feedback";
        axios
            .post(projectsUrl, form)
            .then((response) => {
                console.log("yes ", response);
            })
            .catch((error) => {
                console.log(error);
            });
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
                                                    name="Name"
                                                    type="text"
                                                    placeholder="name"
                                                    onChange={handleChange}
                                                    value={Name}
                                                />
                                                <input
                                                    name="Email"
                                                    type="email"
                                                    placeholder="email"
                                                    onChange={handleChange}
                                                    value={Email}
                                                />
                                                <input
                                                    name="Subject"
                                                    type="text"
                                                    placeholder="subject"
                                                    className="input--subject"
                                                    onChange={handleChange}
                                                    value={Subject}
                                                />
                                                <textarea
                                                    name="Message"
                                                    onChange={handleChange}
                                                    value={Message}
                                                    placeholder="message"
                                                ></textarea>
                                                <input
                                                    type="submit"
                                                    value="send"
                                                />
                                            </form>
                                            {userdata.name}
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
