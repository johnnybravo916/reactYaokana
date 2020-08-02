import { useState, useEffect } from "react";
import axios from "axios";
const useForm = (initialState, callback, validate) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState(false);
    const [formStatus, setFormStatus] = useState('default');
    const [formError, setFormError] = useState(false)

    useEffect(() => {
        if (Object.keys(errors).length === 0 && formStatus === "sending") {
            callback();
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        //hide form then show if success
        setFormStatus("sending");
        setErrors(validate(values));
        setTouched(true);

        const emailBody = {
            "your-name": values.name,
            "your-email": values.email,
            "your-subject": values.subject,
            message: values.message,
        };

        const form = new FormData();
        for (const field in emailBody) {
            form.append(field, emailBody[field]);
        }

        let projectsUrl =
            "https://yaokana.com/wp-json/contact-form-7/v1/contact-forms/1958/feedback";
        axios
            .post(projectsUrl, form)
            .then((response) => {
                console.log("yes ", response.data.status);

                if(response.data.status === "mail_sent"){
                    setFormStatus("success")
                } else {
                    setFormStatus("default");
                    setFormError(true)
                }
            })
            .catch((error) => {
                console.log(error);
                setFormStatus("default");
                setFormError(true);
            });
    };

    const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        event.persist();
        setValues((values) => ({
            ...values,
            [name]: value,
        }));
        touched && setErrors(validate(values));
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors,
        touched,
        formStatus,
        formError
    };
};

export default useForm;
