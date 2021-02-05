const emailInput = document.querySelector(".email");
const Form = document.getElementById("contact-form");
const button = document.getElementById(".submit");
const error = document.querySelector(".error");

Form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = emailInput.value;
    const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (email.match(emailRegex)) {
        emailInput.classList.remove("email-error");
        error.style.display = "none";
        return true;
    } else {
        emailInput.classList.add("email-error");
        error.style.display = "block";
        emailInput.value = "";
        return false;
    }
});