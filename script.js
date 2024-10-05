
// JavaScript for dynamic country names
const countries = ["United States", "India", "France", "Germany", "Japan", "Australia"];
let index = 0;

function changeCountry() {
    const countryElement = document.getElementById('dynamic-countries');
    countryElement.textContent = `Visit ${countries[index]}`;
    index = (index + 1) % countries.length;
}

setInterval(changeCountry, 200); // Change every 0.2 seconds

// Form validation
const form = document.getElementById('booking-form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const startDate = new Date(document.getElementById('start-date').value);
    const endDate = new Date(document.getElementById('end-date').value);
    const description = document.getElementById('description').value;

    if (startDate > endDate) {
        alert('End date must be after the start date.');
    } else if (description.length >= 50 && description.length <= 500) {
        alert('Booking successful!');
        form.reset(); // Clear the form fields
    } else {
        alert('Please fill out all fields correctly.');
    }
});

// JavaScript to handle star rating interaction
const ratingStars = document.querySelectorAll('.star');

ratingStars.forEach(star => {
    star.addEventListener('click', function() {
        const value = this.getAttribute('data-value');
        clearStars(this.parentNode);
        selectStars(this.parentNode, value);
    });
});

function clearStars(starContainer) {
    const stars = starContainer.querySelectorAll('.star');
    stars.forEach(star => star.classList.remove('selected'));
}

function selectStars(starContainer, value) {
    const stars = starContainer.querySelectorAll('.star');
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add('selected');
        }
    });
}



document.addEventListener('DOMContentLoaded', function () {
    // Registration form validation
    const formRegister = document.getElementById('formRegister');
    if (formRegister) {
        formRegister.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            const fullname = document.getElementById('fullname').value;
            const contact = document.getElementById('contact').value;
            const dob = document.getElementById('dob').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const gender = document.getElementById('gender').value;

            // Perform validation
            if (!fullname || !contact || !dob || !email || !password || !gender) {
                alert('Please fill all the fields');
            } else if (password.length < 6) {
                alert('Password must be at least 6 characters long');
            } else {
                alert('Registration Successful!');
                formRegister.reset(); // Reset the form
            }
        });
    }

    // Login form validation
    const formLogin = document.getElementById('formLogin');
    if (formLogin) {
        formLogin.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission

            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;

            if (!email || !password) {
                alert('Please fill all the fields');
            } else {
                alert('Login Successful!');
                formLogin.reset(); // Reset the form
            }
        });
    }
});






document.getElementById('formRegister').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get values from input fields
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store user data in sessionStorage
    sessionStorage.setItem('user', JSON.stringify({ username, email, password }));

    // Redirect to login page
    window.location.href = 'login.html';
});

const userData = JSON.parse(sessionStorage.getItem('user'));

// Check if user data exists
if (userData) {
    document.getElementById('username').value = userData.username;
    document.getElementById('password').value = userData.password;
    document.getElementById('logout').style.display = 'block'; // Show logout button
}

document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate login
    if (userData && username === userData.username && password === userData.password) {
        alert('Login successful!');
    } else {
        alert('Invalid username or password.');
    }
});

document.getElementById('logout').addEventListener('click', function() {
    sessionStorage.removeItem('user'); // Clear user data from sessionStorage
    alert('Logged out successfully!');
    window.location.href = 'login.html'; // Redirect to login page
});