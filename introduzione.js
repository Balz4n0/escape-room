function startGame() {
    // Nasconde la pagina di introduzione
    document.getElementById('intro').classList.add('hidden');
    
    // Mostra la pagina del gioco (enigmi)
    document.getElementById('game').classList.remove('hidden');
}