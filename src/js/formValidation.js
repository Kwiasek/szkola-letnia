const invisible = "opacity-0";
const visible = "opacity-100";

function formValidation() {
    console.log("Form validation");

    const nameField = document.querySelector("#name");
    const surnameField = document.querySelector("#surname");
    const emailField = document.querySelector("#email");
    const houseNrField = document.querySelector("#house-nr");
    const streetField = document.querySelector("#street");
    const zipCodeField = document.querySelector("#zip-code");
    const cityField = document.querySelector("#city");
    const ageGroupSelect = document.querySelector("#age-group");
    const termSelect = document.querySelector("#term");

    const errorsFields = {
        name: document.querySelector("#error-name"),
        surname: document.querySelector("#error-surname"),
        email: document.querySelector("#error-email"),
        nr: document.querySelector("#error-nr"),
        street: document.querySelector("#error-street"),
        zipcode: document.querySelector("#error-zip-code"),
        city: document.querySelector("#error-city"),
        agegroup: document.querySelector("#error-age-group"),
        term: document.querySelector("#error-term"),
    };

    let isFormValid = true;

    validateName();

    function validateName() {
        hideError(errorsFields.name);

        let input = nameField.value;

        if (input == null || input.length == 0) {
            isFormValid = false;
            setError(errorsFields.name, "Pole nie powinno być puste!");
        }

        for (const letter of input) {
            if (isDigit(letter)) {
                isFormValid = false;
                setError(errorsFields.name, "Imie nie powinno zawierać cyfr!");
            }
        }
    }
}

function isDigit(char) {
    if (char >= "0" && char <= "9") return true;
    return false;
}

function setError(field, errorMessage) {
    field.classList.add(visible);
    field.classList.remove(invisible);
    field.textContent = errorMessage;
}

function hideError(field) {
    field.classList.add(invisible);
    field.classList.remove(visible);
}

export default formValidation;
