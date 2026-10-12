
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("contact-feedback");
const contactButton = document.getElementById("contact-button");

let feedbackTimer;

contactForm.addEventListener("submit", async function(event) {

    event.preventDefault();

    clearTimeout(feedbackTimer);

    feedback.textContent = "Sending message...";
    feedback.className = "";

    contactButton.disabled = true;

    const formData = new FormData(contactForm);

    formData.append("access_key", "af04a787-ad5f-4284-9493-d3f87131f64f");
    formData.append("subject", "Beyond The Arc Contact Form");

    try {

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );

        const result = await response.json();

        if (response.ok && result.success) {

            feedback.textContent = "Message sent successfully!";
            feedback.className = "success";

            contactForm.reset();

        } else {

            feedback.textContent = "Message failed. Please try again.";
            feedback.className = "error";

        }

    } catch (error) {

        feedback.textContent = "Something went wrong. Please try again.";
        feedback.className = "error";

    } finally {

        contactButton.disabled = false;

        feedbackTimer = setTimeout(function() {
            feedback.textContent = "";
            feedback.className = "";
        }, 3000);

    }

});
