const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

nextBtn.addEventListener('click', function() {
    let isPage1Valid = true;

    const firstName = document.getElementById('firstName').value;
    const firstNameError = document.getElementById('firstNameError');
    if (firstName.trim() === '') {
        firstNameError.textContent = 'First name is required.';
        isPage1Valid = false;
    } else {
        firstNameError.textContent = '';
    }

    const lastName = document.getElementById('lastName').value;
    const lastNameError = document.getElementById('lastNameError');
    if (lastName.trim() === '') {
        lastNameError.textContent = 'Last name is required.';
        isPage1Valid = false;
    } else {
        lastNameError.textContent = '';
    }

    if (isPage1Valid) {
        page1.classList.remove('active-page');
        page2.classList.add('active-page');
    }
});

backBtn.addEventListener('click', function() {
    page2.classList.remove('active-page');
    page1.classList.add('active-page');
});

const form = document.getElementById('signupForm');
form.addEventListener('submit', function(event) {
    let isPage2Valid = true;

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Valid email is required.';
        isPage2Valid = false;
    } else {
        emailError.textContent = '';
    }

    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isPage2Valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (!isPage2Valid) {
        event.preventDefault();
    }
});