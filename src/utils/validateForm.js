export const validateForm = (formData) => {
    const errors = {};

    if (!formData.name.trim()) {
        errors.name = "Name is required";
    }

    if (!formData.lastName.trim()) {
        errors.lastName = "Last name is required";
    }

    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
        errors.email = "Email is invalid";
    }

    if (!formData.message.trim()) {
        errors.message = "Message is required";
    }

    return errors;

}