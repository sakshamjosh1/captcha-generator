let generatedCaptcha = "";

// Function to generate random CAPTCHA
function generateCaptcha() {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    generatedCaptcha = captcha;
    document.getElementById("captchaDisplay").innerText = captcha;
}

// Function to validate the CAPTCHA input
function validateCaptcha(event) {
    event.preventDefault(); // Prevent form submission

    let userCaptcha = document.getElementById("captchaInput").value;
    let resultText = document.getElementById("captchaResult");

    if (userCaptcha === generatedCaptcha) {
        resultText.innerText = "CAPTCHA Verified!";
        resultText.className = "message success";
        document.getElementById("captchaInput").value = ""; // Clear input field
        generateCaptcha(); // Generate a new CAPTCHA
    } else {
        resultText.innerText = "Incorrect CAPTCHA. Try again!";
        resultText.className = "message error";
        document.getElementById("captchaInput").value = ""; // Clear input field
        generateCaptcha(); // Refresh CAPTCHA on failure
    }
}

// Generate CAPTCHA when the page loads
window.onload = generateCaptcha;
