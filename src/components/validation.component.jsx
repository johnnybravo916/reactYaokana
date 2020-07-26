const validate = (values) => {
    let errors = {};

    if (!values.email) {
        errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "email address is invalid";
    }

    if(!values.name){
      errors.name = "name is required";
    }

    if(!values.subject){
      errors.subject = "subject is required";
    }

    if(!values.message){
      errors.message = "message is required";
    }


    return errors;
};
export default validate;
