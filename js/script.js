/* ===============================
   EMAILJS
================================ */

(function () {

    emailjs.init({
        publicKey: "GXNE5McYJUaj8MC6_"
    });

})();


/* ===============================
   LIVE DATE & TIME
================================ */

function updateDateTime() {

    const now = new Date();

    const date = document.getElementById("currentDate");
    const time = document.getElementById("currentTime");
    const year = document.getElementById("currentYear");

    if (date) {

        date.textContent = now.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );

    }

    if (time) {

        time.textContent = now.toLocaleTimeString(
            "en-US",
            {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true
            }
        );

    }

    if (year) {
        year.textContent = now.getFullYear();
    }

}

updateDateTime();

setInterval(updateDateTime, 1000);


/* ===============================
   MOUSE GLOW
================================ */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", function(e) {

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

});


/* ===============================
   CONTACT FORM
================================ */

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const button =
                contactForm.querySelector("button");

            const message =
                document.getElementById("formMessage");

            button.disabled = true;

            button.innerHTML =
                'Sending... <i class="bi bi-hourglass-split"></i>';


            emailjs.sendForm(
                "service_3hhd0ir",
                "template_o4ll3k6",
                contactForm
            )

            .then(function() {

                message.style.color = "#55e69a";

                message.textContent =
                    "Message sent successfully!";

                contactForm.reset();

                button.disabled = false;

                button.innerHTML =
                    'Send Message <i class="bi bi-arrow-up-right"></i>';

            })

            .catch(function(error) {

                console.log(error);

                message.style.color = "#ff6b7a";

                message.textContent =
                    "Message could not be sent. Please try again.";

                button.disabled = false;

                button.innerHTML =
                    'Send Message <i class="bi bi-arrow-up-right"></i>';

            });

        }
    );

}


/* ===============================
   NAVBAR ACTIVE
================================ */

const sections =
    document.querySelectorAll("section[id]");

const links =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const top =
            section.offsetTop - 180;

        if (window.scrollY >= top) {

            current =
                section.getAttribute("id");

        }

    });

    links.forEach(function(link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* ===============================
   SCROLL REVEAL
================================ */

const revealItems =
    document.querySelectorAll(
        ".service-card, .portfolio-card, .about-image"
    );

const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealItems.forEach(function(item) {

    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = "all .7s ease";

    observer.observe(item);

});