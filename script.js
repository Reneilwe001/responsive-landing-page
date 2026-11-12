const contactForm = document.getElementById("contact-form");
const successMessage = document.getElementById("success-message");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    successMessage.textContent = "Thank you! Your message has been received.";

    contactForm.reset();
});
