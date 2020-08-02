import React from "react";

const Status = (props) => {
    const { status } = props;
    return (
        <div className="center">
            <div className="contact__wrapper">
                {
                    {
                        sending: (
                            <>
                                <h4 className="sending">Sending form...</h4>
                            </>
                        ),
                        success: (
                            <>
                                <h3>
                                    Thank you, <br />
                                    Your inquiry has been submitted.
                                </h3>
                                <h4>I'll get in touch as soon as possible.</h4>
                            </>
                        ),
                    }[status]
                }
            </div>
        </div>
    );
};

export default Status;
