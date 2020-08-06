import React from "react";

import { Link } from "react-router-dom";
import Slide from "react-reveal/Slide";
const ContactComponent = () => {
    return (
        <div className="container-fluid">
            <div className="contact--footer">
                <div className="row">
                    <div className="col-md-12">
                        <Slide bottom>
                        <h3>
                            <Link to="/contact" title="contact me">
                                contact me
                            </Link>
                        </h3>

                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;
