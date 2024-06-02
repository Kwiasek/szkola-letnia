import createAlert from "./alerts";

function formValidation() {
    console.log("Form validation...");

    // --- SETTINGS ---
    // ! Keys values in settings and errorFields should be identical to avoid problems with functions !
    
    const invisible = "opacity-0";
    const visible = "opacity-100";
    const errorMessages = {
        emptyField: "Pole nie powinno być puste!",
        name: {
            digits: "Imie nie powinno zawierać cyfr!",
            len: "Imie jest za długie!",
            regex: "Imie zawiera niedozwolone znaki!",
        },
        surname: {
            digits: "Nazwisko nie powinno zawierać cyfr!",
            len: "Nazwisko jest za długie!",
            regex: "Nazwisko zawiera niedozwolone znaki!",
        },
        email: {
            regex: "Email nie jest poprawny!",
            len: "Email jest za długi!",
        },
        nr: {
            len: "Numer jest za długi!",
        },
        street: {
            len: "Nazwa ulicy jest za długa!",
        },
        zipcode: "Kod pocztowy nie jest poprawny!",
        city: {
            len: "Nazwa miejscowości jest za długa!",
            regex: "Nazwa miejscowości zawiera niedozwolone znaki!",
        },
    };
    const maxLengths = {
        name: 32,
        surname: 64,
        email: 128,
        nr: 16,
        street: 128,
        city: 128,
    };
    const acceptedChars = {
        name: " aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż-",
        surname: " aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż-.",
        city: " aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż-",
    }

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

    if(isFormValid) {
        createAlert("Przyjeliśmy twoje zgłoszenie!");
    }
    // else {
    //     createAlert("Formularz nie został poprawnie wypełniony!");
    // }

    // --- VALIDATION ---
    function validateName() {
        let input = nameField.value.trim();

        if (isFieldEmpty(input, 'name')) return;
        if (isInputTooLong(input, 'name')) return;

        for (const letter of input) {
            if (isDigit(letter)) {
                isFormValid = false;
                setError(errorsFields.name, errorMessages.name.digits);
                return;
            }

            if (!acceptedChars.name.includes(letter.toLowerCase())) {
                isFormValid = false;
                setError(errorsFields.name, errorMessages.name.regex);
                return;
            }
        }
    }
    function validateSurname() {
        let input = surnameField.value.trim();

        if (isFieldEmpty(input, 'surname')) return;
        if (isInputTooLong(input, 'surname')) return;

        for (const letter of input) {
            if (isDigit(letter)) {
                isFormValid = false;
                setError(errorsFields.surname, errorMessages.surname.digits);
                return;
            }

            if (!acceptedChars.surname.includes(letter.toLowerCase())) {
                isFormValid = false;
                setError(errorsFields.surname, errorMessages.surname.regex);
                return;
            }
        }
    }
    function validateEmail() {
        let input = emailField.value.trim();
        const validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (isFieldEmpty(input, 'email')) return;
        if (isInputTooLong(input, 'email')) return;

        if (!input.match(validRegex)) {
            isFormValid = false;
            setError(errorsFields.email, errorMessages.email.regex);
            return;
        }
    }
    function validateHouseNr() {
        let input = houseNrField.value.trim();

        if (isFieldEmpty(input, 'nr')) return;
        if (isInputTooLong(input, 'nr')) return;
    }
    function validateStreet() {
        let input = streetField.value.trim();

        if (isFieldEmpty(input, 'street')) return;
        if (isInputTooLong(input, 'street')) return;
    }
    function validateZipCode() {
        let input = zipCodeField.value.trim();
        const validRegex = /^[0-9]{2}-[0-9]{3}$/;

        if (isFieldEmpty(input, 'zipcode')) return;

        if (!input.match(validRegex)) {
            isFormValid = false;
            setError(errorsFields.zipcode, errorMessages.zipcode);
            return;
        }
    }
    function validateCity() {
        let input = cityField.value.trim();

        if (isFieldEmpty(input, 'city')) return;
        if (isInputTooLong(input, 'city')) return;

        for (const letter of input) {
            if (!acceptedChars.city.includes(letter.toLowerCase())) {
                isFormValid = false;
                setError(errorsFields.city, errorMessages.city.regex);
                return;
            }
        }
    }
    function validateAgeGroup() {
        let input = ageGroupSelect.value;

        if (input === "empty") {
            isFormValid = false;
            setError(errorsFields.agegroup, errorMessages.emptyField);
            return;
        }
    }
    function validateTerm() {
        let input = termSelect.value;

        if (input === "empty") {
            isFormValid = false;
            setError(errorsFields.term, errorMessages.emptyField);
            return;
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

    function isInputTooLong(value, field) {
        if (value.length > maxLengths[field]) {
            isFormValid = false;
            setError(errorsFields[field], errorMessages[field].len);
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