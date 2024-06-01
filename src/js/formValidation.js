function formValidation() {
    console.log("Form validation...");

    // --- CONST VALUES ---
    const invisible = "opacity-0";
    const visible = "opacity-100";
    const errorMessages = {
        emptyField: "Pole nie powinno być puste!",
        name: {
            digits: "Imie nie powinno zawierać cyfr!",
        },
        surname: {
            digits: "Nazwisko nie powinno zawierać cyfr!",
        },
        email: "Email nie jest poprawny!",
        zipcode: "Kod pocztowy nie jest poprawny!",
    };

    // --- FORMS FIELDS --- 
    const nameField = document.querySelector("#name");
    const surnameField = document.querySelector("#surname");
    const emailField = document.querySelector("#email");
    const houseNrField = document.querySelector("#house-nr");
    const streetField = document.querySelector("#street");
    const zipCodeField = document.querySelector("#zip-code");
    const cityField = document.querySelector("#city");
    const ageGroupSelect = document.querySelector("#age-group");
    const termSelect = document.querySelector("#term");

    // --- ERROR FIELS ---
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

    for (const [key] of Object.entries(errorsFields)) {
        hideError(errorsFields[key]);
    }

    validateName();
    validateSurname();
    validateEmail();
    validateHouseNr();
    validateStreet();
    validateZipCode();
    validateCity();
    validateAgeGroup();
    validateTerm();

    function validateName() {
        let input = nameField.value;

        if (isFieldEmpty(input, 'name')) return;

        for (const letter of input) {
            if (isDigit(letter)) {
                isFormValid = false;
                setError(errorsFields.name, errorMessages.name.digits);
            }
        }
    }
    function validateSurname() {
        let input = surnameField.value;

        if (isFieldEmpty(input, 'surname')) return;

        for (const letter of input) {
            if (isDigit(letter)) {
                isFormValid = false;
                setError(errorsFields.surname, errorMessages.surname.digits);
            }
        }
    }
    function validateEmail() {
        let input = emailField.value;
        const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (isFieldEmpty(input, 'email')) return;

        if (!input.match(validRegex)) {
            isFormValid = false;
            setError(errorsFields.email, errorMessages.email);
        }
    }
    function validateHouseNr() {
        let input = houseNrField.value;

        if (isFieldEmpty(input, 'nr')) return;
    }
    function validateStreet() {
        let input = streetField.value;

        if (isFieldEmpty(input, 'street')) return;
    }
    function validateZipCode() {
        let input = zipCodeField.value;
        const validRegex = /^[0-9]{2}-[0-9]{3}$/;

        if (isFieldEmpty(input, 'zipcode')) return;

        if (!input.match(validRegex)) {
            isFormValid = false;
            setError(errorsFields.zipcode, errorMessages.zipcode);
        }
    }
    function validateCity() {
        let input = cityField.value;

        if (isFieldEmpty(input, 'city')) return;
    }
    function validateAgeGroup() {
        let input = ageGroupSelect.value;

        if (input === "empty") {
            isFormValid = false;
            setError(errorsFields.agegroup, errorMessages.emptyField);
        }
    }
    function validateTerm() {
        let input = termSelect.value;

        if (input === "empty") {
            isFormValid = false;
            setError(errorsFields.term, errorMessages.emptyField);
        }
    }

    // --- UTILS ---
    function setError(field, errorMessage) {
        field.classList.add(visible);
        field.classList.remove(invisible);
        field.textContent = errorMessage;
    }

    function hideError(field) {
        field.classList.add(invisible);
        field.classList.remove(visible);
    }

    function isFieldEmpty(value, errorField) {
        if (value == null || value.trim().length == 0) {
            isFormValid = false;
            setError(errorsFields[errorField], errorMessages.emptyField);
            return true;
        }
        return false;
    }

    function isDigit(char) {
        if (char >= "0" && char <= "9") return true;
        return false;
    }
}

export default formValidation;
