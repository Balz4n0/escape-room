function checkCode() {
    var userCode = document.getElementById('userCode').value;
    var correctCode = "XYZ456LM";
    var nextButton = document.getElementById('nextEnigmaButton');
    var nextEnigmaLink = document.getElementById('nextEnigmaLink');
    
    // Controllo se l'utente ha selezionato una risposta
    if (userCode === "") {
        nextButton.disabled = true; // Disabilito il pulsante se nessuna risposta è selezionata
    } else if (userCode === correctCode) {
        nextButton.disabled = false; // Abilito il pulsante se la risposta è corretta
    } else {
        nextButton.disabled = true; // Disabilito il pulsante se la risposta è errata
    }
}
function toggleSolution(enigmaNumber) {
    var solution = document.getElementById('solution' + enigmaNumber);
    solution.classList.toggle('hidden');
}

function checkAuthToken() {
    const selectedToken = document.getElementById("userAuthToken").value;
    const feedback = document.getElementById("feedback3");
    // Correct token
    const correctToken = "Bearer 9876XYZTOKEN";
    if (selectedToken === correctToken) {
        feedback.textContent = "Token corretto! Accesso consentito.";
        feedback.classList.remove("hidden");
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Token errato! Riprova.";
        feedback.classList.remove("hidden");
        feedback.style.color = "red";
    }
}