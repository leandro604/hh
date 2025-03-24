document.addEventListener('DOMContentLoaded', function() {
    const passwordForm = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('anniversaryDate');
    const correctPassword = '2024-03-28'; // Replace with the actual anniversary date

    passwordForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const userInput = passwordInput.value;

        if (userInput === correctPassword) {
            window.location.href = 'password.html';
        } else {
            alert('Contraseña incorrecta. Inténtalo de nuevo.');
        }
    });
});