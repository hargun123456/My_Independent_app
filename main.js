document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

       
        if (username.trim() === '' || password.trim() === '') {
            alert('Please fill in both username and password.');
        } else {
            
            alert('Form submitted successfully!');
           
        }
    });
});
