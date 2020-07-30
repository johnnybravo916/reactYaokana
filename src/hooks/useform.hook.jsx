import { useState, useEffect } from "react";

const useForm = (initialState ,callback, validate) => {
    const [values, setValues] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0  && isSubmitting) {
            callback();
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setIsSubmitting(true);
        setErrors(validate(values));
    };

    const handleChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            [event.target.name]: event.target.value,
        }));
        const eventError = event.target.name;
        const eventErrorClass = `document.querySelector('.error---${eventError}')`;
        eventErrorClass.classList.add(`${eventError}--test`)
    };

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    };
};

export default useForm;
