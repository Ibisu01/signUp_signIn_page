const emailInput = document.getElementById('email');
const firstnameInput = document.getElementById('firstname');

emailInput.addEventListener('blur', function() {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        fetch(`signin.php?action=fetch_name&email=${encodeURIComponent(email)}`)
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    firstnameInput.value = data.firstname;
                } else {
                    firstnameInput.value = ''; 
                }
            })
            .catch(error => console.error('Error fetching name:', error));
    } else {
        firstnameInput.value = '';
    }
});