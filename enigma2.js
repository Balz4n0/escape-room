function checkAuthToken() {
    const selectedToken = document.getElementById("userAuthToken").value;
    const feedback = document.getElementById("feedback2");
    // Correct token
    const correctToken = "ABC3231XY";
    if (selectedToken === correctToken) {
        feedback.textContent = "Token corretto! Accesso consentito.";
        feedback.classList.remove("hidden");
        feedback.style.color = "green";

        
        // Redirect to enigma3.html
        window.location.href = "enigma3 9876XYZ.html";
    } else {
        feedback.textContent = "Token errato! Riprova.";
        feedback.classList.remove("hidden");
        feedback.style.color = "red";
    }
}
const userRouteCode = document.getElementById('userRouteCode');
const nextEnigmaButton = document.getElementById('nextEnigmaButton');

userRouteCode.onchange = function() {
    if (userRouteCode.value) {
        nextEnigmaButton.disabled = false; // Enable the button if a valid option is selected
    } else {
        nextEnigmaButton.disabled = true; // Keep it disabled if no valid option is selected
    }
};