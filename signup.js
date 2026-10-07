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
    
    const phone = document.getElementById('phone').value;
    const phoneError = document.getElementById('phoneError');
    if (phone.trim() === '') {
        phoneError.textContent = 'Phone number is required.';
        isPage1Valid = false;
    } else {
        phoneError.textContent = '';
    }

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Valid email is required.';
        isPage1Valid = false;
    } else {
        emailError.textContent = '';
    }

    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('passwordError');
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters long.';
        isPage1Valid = false;
    } else {
        passwordError.textContent = '';
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

    const address = document.getElementById('address').value;
    const addressError = document.getElementById('addressError');
    if (address.trim() === '') {
        addressError.textContent = 'Address is required.';
        isPage2Valid = false;
    } else {
        addressError.textContent = '';
    }

    const nationality = document.getElementById('nationality').value;
    const nationalityError = document.getElementById('nationalityError');
    if (nationality.trim() === '') {
        nationalityError.textContent = 'Nationality is required.';
        isPage2Valid = false;
    } else {
        nationalityError.textContent = '';
    }

    const state = document.getElementById('state').value;
    const stateError = document.getElementById('stateError');
    if (state.trim() === '') {
        stateError.textContent = 'State of origin is required.';
        isPage2Valid = false;
    } else {
        stateError.textContent = '';
    }

    const bloodGroup = document.getElementById('bloodGroup').value;
    const bloodGroupError = document.getElementById('bloodGroupError');
    if (bloodGroup.trim() === '') {
        bloodGroupError.textContent = 'Blood group is required.';
        isPage2Valid = false;
    } else {
        bloodGroupError.textContent = '';
    }

    const genotype = document.getElementById('genotype').value;
    const genotypeError = document.getElementById('genotypeError');
    if (genotype.trim() === '') {
        genotypeError.textContent = 'Genotype is required.';
        isPage2Valid = false;
    } else {
        genotypeError.textContent = '';
    }

    if (!isPage2Valid) {
        event.preventDefault();
    }
});