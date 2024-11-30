function checkRouteCode() {
    const userCode = document.getElementById('userRouteCode').value;
    const correctCode = 'QWE987RT';  // The correct route code for /codice
    
    const feedback = document.getElementById('feedback2');
    const nextButton = document.getElementById('nextEnigmaButton');
    
    if (userCode === correctCode) {
        feedback.textContent = "Codice di rotta corretto! Puoi continuare.";
        feedback.style.color = 'green';
        nextButton.disabled = false;  // Enable the "Invia" button
    } else {
        feedback.textContent = "Codice di rotta errato. Riprova.";
        feedback.style.color = 'red';
        nextButton.disabled = true;  // Keep the button disabled
    }
    
    // Make feedback visible
    feedback.classList.remove('hidden');
}
