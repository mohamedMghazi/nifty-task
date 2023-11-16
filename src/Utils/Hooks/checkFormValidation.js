/**
 * Check if the form is valid or not by checking if the required fields are filled or not.
 * @param form {Object} - The form to be checked.
 * @param entitiesToBeChecked {Array} - The entities to be checked in the form.
 * @returns {{ isValid: boolean, errors: {} }}
 */
const checkFormValidation = (form, entitiesToBeChecked) => {
    const errors = entitiesToBeChecked.reduce((acc, entity) => {
        if (!form[entity] || form[entity].trim() === "") {
            acc[entity] = { msg: `Please enter your ${entity}.` };
        }

        return acc;
    }, {});

    return {
        isValid: Object.keys(errors).length === 0,
        errors: errors
    };
};

export default checkFormValidation;
