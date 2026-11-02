
const form = document.querySelector("form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const frequencyInput = document.querySelector("#frequency");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const frequencyError = document.querySelector("#frequency-error");

const formMessage = document.querySelector("#form-message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const frequency = frequencyInput.value;

    formMessage.textContent = "";
    formMessage.classList.remove("success");

    if (name === "") {
        nameError.textContent = "Enter your name.";
        nameInput.setAttribute("aria-invalid", "true");
    } else {
        nameError.textContent = "";
        nameInput.removeAttribute("aria-invalid");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        emailError.textContent = "Enter your email address.";
        emailInput.setAttribute("aria-invalid", "true");
    } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter an email address like name@example.com.";
        emailInput.setAttribute("aria-invalid", "true");
    } else {
        emailError.textContent = "";
        emailInput.removeAttribute("aria-invalid");
    }


    if (frequency === "") {
        frequencyError.textContent = "Choose how often we should email you.";
        frequencyInput.setAttribute("aria-invalid", "true");
    } else {
        frequencyError.textContent = "";
        frequencyInput.removeAttribute("aria-invalid");
    }


    const hasErrors =
        nameError.textContent !== "" ||
        emailError.textContent !== "" ||
        frequencyError.textContent !== "";

    if (hasErrors) {
        if (nameError.textContent !== "") {
            nameInput.focus();
        } else if (emailError.textContent !== "") {
            emailInput.focus();
        } else {
            frequencyInput.focus();
        }

        return;
    }

    formMessage.textContent = `Thank you, ${name}! You're on the mailing list.`;
    formMessage.classList.add("success");

    
    form.reset();
});
