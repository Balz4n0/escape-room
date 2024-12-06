function checkAuthToken() {
    const selectedToken = document.getElementById("userAuthToken").value;
    const feedback = document.getElementById("feedback3");
    
    // Correct token
    const correctToken = "Bearer 9876XYZTOKEN";
    
    if (selectedToken === correctToken) {
        feedback.textContent = "Token corretto! Accesso consentito.";
        feedback.classList.remove("hidden");
        feedback.style.color = "green";
        
        // Redirect to finale.html after a short delay
        setTimeout(() => {
            window.location.href = "finale.html";
        }, 2000); // Redirects after 2 seconds
    } else {
        feedback.textContent = "Token errato! Riprova.";
        feedback.classList.remove("hidden");
        feedback.style.color = "red";
    }
}