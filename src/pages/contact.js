import React, { useEffect, useState } from "react";

import useForm from "../hooks/useForm.hook";
import validate from "../components/validation.component";

import Banner from "../components/banner.component";
import ProjectComponent from "../components/project.component";

import axios from "axios";

const ContactPage = () => {
    const initialState = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };
    const { values, handleChange, handleSubmit, errors } = useForm(
        initialState,
        submitForm,
        validate
    );

    const [content, setContent] = useState([]);

    function submitForm() {
        console.log("success");
    }

    // const [userdata, setUserdata] = useState(initialState);
    // const { Name, Email, Subject, Message } = userdata;

    // const handleChange = (e) => {
    //     console.log(e);
    //     setUserdata({ ...userdata, [e.target.name]: e.target.value });
    //     console.log(userdata);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const emailBody = {
    //         Name: userdata.Name,
    //         Email: userdata.Email,
    //         Subject: userdata.Subject,
    //         Message: userdata.Message,
    //     };

    //     const form = new FormData();
    //     for (const field in emailBody) {
    //         form.append(field, emailBody[field]);
    //     }

    //     console.log(form);
    //     let projectsUrl =
    //         "https://cors-anywhere.herokuapp.com/http://yaokana.com/wp-json/contact-form-7/v1/contact-forms/1958/feedback";
    //     axios
    //         .post(projectsUrl, form)
    //         .then((response) => {
    //             console.log("yes ", response);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    useEffect(()=>{
        const pageClass = document.querySelector('.page');
        pageClass.classList.add('page--contact');
    })

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
                                                <div className="form__field">
                                                    {errors.name && (
                                                        <div className="error">
                                                            {errors.name}
                                                        </div>
                                                    )}
                                                    <input
                                                        className={`input${
                                                            errors.email &&
                                                            "--error"
                                                        }`}
                                                        name="name"
                                                        type="text"
                                                        placeholder="name"
                                                        onChange={handleChange}
                                                        value={values.name}
                                                    />
                                                </div>
                                                <div className="form__field">
                                                    {errors.email && (
                                                        <div className="error">
                                                            {errors.email}
                                                        </div>
                                                    )}
                                                    <input
                                                        className={`input${
                                                            errors.email &&
                                                            "--error"
                                                        }`}
                                                        autoComplete="off"
                                                        name="email"
                                                        type="email"
                                                        placeholder="email"
                                                        onChange={handleChange}
                                                        value={values.email}
                                                    />
                                                </div>
                                                {errors.subject && (
                                                    <div className="error">
                                                        {errors.subject}
                                                    </div>
                                                )}
                                                <input
                                                    className={`input--subject input${
                                                        errors.email &&
                                                        "--error"
                                                    }`}
                                                    name="subject"
                                                    type="text"
                                                    placeholder="subject"
                                                    onChange={handleChange}
                                                    value={values.subject}
                                                />
                                                {errors.message && (
                                                    <div className="error">
                                                        {errors.message}
                                                    </div>
                                                )}
                                                <textarea
                                                    className={`input${
                                                        errors.email &&
                                                        "--error"
                                                    }`}
                                                    name="message"
                                                    onChange={handleChange}
                                                    value={values.message}
                                                    placeholder="message"
                                                ></textarea>
                                                <input
                                                    type="submit"
                                                    value="send"
                                                />
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ProjectComponent />
                        </main>
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default ContactPage;
