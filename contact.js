document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const success = document.getElementById("successMessage");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const fullName = form.fullName.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        let valid = true;

        // Name
        if (fullName.length < 2) {
            showError("nameError", "Please enter your full name.");
            valid = false;
        } else clearError("nameError");

        // Email
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailRegex.test(email)) {
            showError("emailError", "Please enter a valid email address.");
            valid = false;
        } else clearError("emailError");

        // Subject
        if (subject.length < 3) {
            showError("subjectError", "Subject must be at least 3 characters.");
            valid = false;
        } else clearError("subjectError");

        // Message
        if (message.length < 10) {
            showError("messageError", "Message must be at least 10 characters long.");
            valid = false;
        } else clearError("messageError");

        if (valid) {
            success.hidden = false;
            form.reset();
            setTimeout(() => (success.hidden = true), 5000);
        }
    });

    function showError(id, msg) {
        document.getElementById(id).textContent = msg;
    }

    function clearError(id) {
        document.getElementById(id).textContent = "";
    }
});
