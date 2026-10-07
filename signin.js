const form = document.getElementById('signinForm');
form.addEventListener('submit', function(event) {
    let isValid = true;

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Valid email is required.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.trim() === '') {
        passwordError.textContent = 'Password is required.';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});