document.addEventListener('DOMContentLoaded', () => {
    GameEngine.init();

    document.getElementById('start-btn')?.addEventListener('click', () => GameEngine.startGame());
    document.getElementById('continue-btn')?.addEventListener('click', () => GameEngine.continueGame());
    document.getElementById('new-game-btn')?.addEventListener('click', () => GameEngine.newAdventure());
    document.getElementById('restart-btn')?.addEventListener('click', () => GameEngine.restart());

    document.getElementById('stats-toggle')?.addEventListener('click', () => GameEngine.toggleStats());
    document.getElementById('history-toggle')?.addEventListener('click', () => GameEngine.toggleHistory());
    document.getElementById('archive-toggle')?.addEventListener('click', () => GameEngine.toggleArchive());

    document.getElementById('close-history-btn')?.addEventListener('click', () => GameEngine.toggleHistory());
    document.getElementById('close-archive-btn')?.addEventListener('click', () => GameEngine.toggleArchive());

    // Atajos de teclado para avanzar texto
    document.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
            const textPhase = document.getElementById('text-phase');
            if (textPhase && textPhase.classList.contains('active')) {
                e.preventDefault();
                if (GameEngine.typeInterval) {
                    // Completar texto de golpe
                    clearInterval(GameEngine.typeInterval);
                    GameEngine.typeInterval = null;
                    document.getElementById('scene-text').textContent = GameEngine.currentText;
                    GameEngine.stopTypingSound();
                } else {
                    // Pasar a opciones
                    GameEngine.showOptionsPhase();
                }
            }
        }
    });
});