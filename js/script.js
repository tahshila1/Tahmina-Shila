// ================================
// EMAILJS INITIALIZATION
// ================================

(function () {
    emailjs.init({
        publicKey: "GXNE5McYJUaj8MC6_"
    });
})();


// ================================
// CONTACT FORM
// ================================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const submitButton = contactForm.querySelector("button");
    const originalText = submitButton.innerHTML;

    submitButton.disabled = true;
    submitButton.innerHTML = `
        Sending...
        <i class="bi bi-hourglass-split"></i>
    `;

    formMessage.innerHTML = "";

    emailjs.sendForm(
        "service_3hhd0ir",
        "template_o4ll3k6",
        contactForm
    )
    .then(function () {

        formMessage.innerHTML = `
            <div class="success-message">
                <i class="bi bi-check-circle-fill"></i>
                Message sent successfully!
            </div>
        `;

        contactForm.reset();

        submitButton.disabled = false;
        submitButton.innerHTML = originalText;

    })
    .catch(function (error) {

        console.error("EmailJS Error:", error);

        formMessage.innerHTML = `
            <div class="error-message">
                <i class="bi bi-exclamation-circle-fill"></i>
                Failed to send message. Please try again.
            </div>
        `;

        submitButton.disabled = false;
        submitButton.innerHTML = originalText;
    });

});// ================================
// CURRENT DATE & TIME
// ================================

function updateDateTime() {

    const now = new Date();

    // Current Date
    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("currentDate").textContent =
        now.toLocaleDateString("en-US", dateOptions);

    // Current Time
    document.getElementById("currentTime").textContent =
        now.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

    // Current Year
    document.getElementById("currentYear").textContent =
        now.getFullYear();
}

updateDateTime();

setInterval(updateDateTime, 1000);