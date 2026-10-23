function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector('[name="subject"]').value,
        message: document.querySelector("#message").value
    };

    emailjs
        .send("service_vhfq6gn", "template_s1lc4n4", templateParams)
        .then(() => {
            alert("Email sent!");
        })
        .catch((error) => {
            console.error("Email error:", error);
            alert("Email not sent. Check the console for details.");
        });
}