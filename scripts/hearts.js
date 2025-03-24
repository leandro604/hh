document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.getElementById('heart-container');

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
        heart.style.animationDuration = Math.random() * 2 + 3 + 's'; // Duración aleatoria
        heartContainer.appendChild(heart);

        // Elimina el corazón después de que termine la animación
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Genera un corazón cada 300ms
    setInterval(createHeart, 300);
});