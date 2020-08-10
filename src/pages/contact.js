import React, { useContext } from "react";

import useForm from "../hooks/useForm.hook";
import validate from "../components/validation.component";

import Banner from "../components/banner.component";
import ProjectFooter from "../components/projectfooter.component";
import Status from "../components/status.component";

import Slide from 'react-reveal/Slide';
import parse from "html-react-parser";
import { Helmet } from "react-helmet";

import { DataContext } from "../context/context";

import Preloader from "../components/preloader.component";

const ContactPage = () => {
    const appContext = useContext(DataContext);
    const { contact, loadingContact } = appContext;

    const initialState = {
        name: "",
        email: "",
        subject: "",
        message: "",
    };
    const {
        errors,
        values,
        handleChange,
        handleSubmit,
        formStatus,
        formError,
    } = useForm(
        initialState,
        submitForm,
        validate
    );

    function submitForm() {
        console.log("success");
    }

    return (
        <>
            {loadingContact ? (
                <Preloader />
            ) : (
                contact.map((content, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Helmet>{parse(content.yoast_head)}</Helmet>
                            <Banner
                                page="contact"
                                bannerTitle={content.title.rendered}
                                imgUrl={
                                    content._embedded["wp:featuredmedia"][0]
                                        .media_details.sizes.full.source_url
                                }
                            />
                            <main className="main animate__animated animated__slideInLeft">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="contact">
                                                <h2 className="contact__title">
                                                    hello there
                                                </h2>
                                                <Slide bottom>
                                                {
                                                    {
                                                        default: (
                                                            <>
                                                            
                                                                <form
                                                                    onSubmit={
                                                                        handleSubmit
                                                                    }
                                                                >
                                                                    {" "}
                                                                    {formError && (
                                                                        <div className="contact__error form--fullwidth">
                                                                            <strong>
                                                                                There's an error with your form, please try again.
                                                                            </strong>
                                                                        </div>
                                                                    )}
                                                                    <div className="form__field">
                                                                        {errors.name && (
                                                                            <div className="error">
                                                                                {
                                                                                    errors.name
                                                                                }
                                                                            </div>
                                                                        )}
                                                                        <input
                                                                            className={
                                                                                errors.name &&
                                                                                `input${
                                                                                    errors.name &&
                                                                                    "--error"
                                                                                }`
                                                                            }
                                                                            name="name"
                                                                            type="text"
                                                                            placeholder="name"
                                                                            onChange={
                                                                                handleChange
                                                                            }
                                                                            value={
                                                                                values.name
                                                                            }
                                                                        />
                                                                    </div>
                                                                    <div className="form__field">
                                                                        {errors.email && (
                                                                            <div className="error">
                                                                                {
                                                                                    errors.email
                                                                                }
                                                                            </div>
                                                                        )}
                                                                        <input
                                                                            className={
                                                                                errors.email &&
                                                                                `input${
                                                                                    errors.email &&
                                                                                    "--error"
                                                                                }`
                                                                            }
                                                                            autoComplete="off"
                                                                            name="email"
                                                                            type="email"
                                                                            placeholder="email"
                                                                            onChange={
                                                                                handleChange
                                                                            }
                                                                            value={
                                                                                values.email
                                                                            }
                                                                        />
                                                                    </div>
                                                                    <div className="form__field form--fullwidth">
                                                                        {errors.subject && (
                                                                            <div className="error">
                                                                                {
                                                                                    errors.subject
                                                                                }
                                                                            </div>
                                                                        )}
                                                                        <input
                                                                            className={
                                                                                errors.email &&
                                                                                `input${
                                                                                    errors.subject &&
                                                                                    "--error"
                                                                                }`
                                                                            }
                                                                            name="subject"
                                                                            type="text"
                                                                            placeholder="subject"
                                                                            onChange={
                                                                                handleChange
                                                                            }
                                                                            value={
                                                                                values.subject
                                                                            }
                                                                        />
                                                                    </div>
                                                                    <div className="form__field form--fullwidth">
                                                                        {errors.message && (
                                                                            <div className="error">
                                                                                {
                                                                                    errors.message
                                                                                }
                                                                            </div>
                                                                        )}
                                                                        <textarea
                                                                            className={`input${
                                                                                errors.message &&
                                                                                "--error"
                                                                            }`}
                                                                            name="message"
                                                                            onChange={
                                                                                handleChange
                                                                            }
                                                                            value={
                                                                                values.message
                                                                            }
                                                                            placeholder="message"
                                                                        ></textarea>
                                                                    </div>
                                                                    <input
                                                                        type="submit"
                                                                        value="send"
                                                                    />
                                                                </form>
                                                            </>
                                                        ),
                                                        sending: (
                                                            <Status status="sending" />
                                                        ),
                                                        success: (
                                                            <Status status="success" />
                                                        ),
                                                    }[formStatus]
                                                }</Slide>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ProjectFooter />
                            </main>
                        </React.Fragment>
                    );
                })
            )}
        </>
    );
};

export default ContactPage;
