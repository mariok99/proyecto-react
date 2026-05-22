import { useState } from "react"
import { isEmptyObject } from "../utils/objectFunctions.js"
import { FormUI } from "./FormUI.jsx"
import { validateForm } from "../utils/validateForm.js"

const emptyForm = {
    name: "",
    lastName: "",
    email: "",
    message: ""
};

export const FormContainer = () => {
    const [formData, setFormData] = useState(emptyForm);

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        // [name] : por que sino la clave va a ser "name"
        const updatedData = { ...formData, [name]: value };
        setFormData(updatedData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const error = validateForm(formData);
        setErrors(errors);

        if (isEmptyObject(errors)) {
            setErrors({});
            console.log("Form submitted successfully", formData)
            setFormData(emptyForm)
        }
        else {

        }

    }

    return (
        <FormUI
            onChange={handleChange}
            onSubmit={handleSubmit}
            formData={formData}
            errors={errors}
        />
    )
}

