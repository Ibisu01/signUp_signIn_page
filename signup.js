const nextBtn = document.getElementById('nextBtn');
const backBtn = document.getElementById('backBtn');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');

nextBtn.addEventListener('click', function() {
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const phonenumber = document.getElementById('phonenumber');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    
    if(firstname.checkValidity() && lastname.checkValidity() && phonenumber.checkValidity() && email.checkValidity() && password.checkValidity()) {
        page1.classList.remove('active-page');
        page2.classList.add('active-page');
    } else {
        document.getElementById('signupForm').reportValidity();
    }
});

backBtn.addEventListener('click', function() {
    page2.classList.remove('active-page');
    page1.classList.add('active-page');
});