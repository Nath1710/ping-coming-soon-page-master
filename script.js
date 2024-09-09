document.addEventListener('DOMContentLoaded', function () {
    const email = document.getElementById('email');

    email.addEventListener('invalid', function () {
        if (email.value) {
            const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value);
            if (!regexMatch) {
                email.setCustomValidity('Please provide a valid email address')
            }
        }
        else {
            email.setCustomValidity('Whoops! It looks like you forgot to add your email')
        }
    });
});


