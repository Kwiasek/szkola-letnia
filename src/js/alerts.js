function createAlert(message) {
    const alert = document.querySelector("#alert");
    const btn = document.querySelector("#alert-btn");
    const textField = document.querySelector("#alert-text");
    // const alertBox = document.querySelector("#alert-box");

    alert.classList.remove('hidden');

    textField.textContent = message;

    btn.addEventListener("click", () => {
        alert.classList.add('hidden');
    });
}

export default createAlert;