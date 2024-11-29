<script>
    // Function to add 'show' class when the element is scrolled into view
    function scrollAnimation() {
        const cards = document.querySelectorAll('.restaurant-card');
        
        const triggerBottom = window.innerHeight * 0.8;  // Trigger animation a little before full view

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if(cardTop < triggerBottom) {
                card.classList.add('show');
            } else {
                card.classList.remove('show');
            }
        });
    }

    // Event listener for scrolling
    window.addEventListener('scroll', scrollAnimation);

    // Call once to check initial position when page loads
    scrollAnimation();

    // Simple button interaction for the Explore button
    document.querySelector('.explore-btn').addEventListener('click', () => {
        alert('Explore feature coming soon!');
    });

document.getElementById('signupForm').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (!name || !phone || !email || !password) {
        alert("Please fill in all the fields.");
        event.preventDefault(); // Stop form submission
    } else {
        // Store form data in localStorage
        localStorage.setItem('signupData', JSON.stringify({
            name: name,
            phone: phone,
            email: email,
            password: password
        }));

        alert("Sign up successful! Your data has been saved.");
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    if (!email || !password) {
        alert("Please enter both email and password.");
        event.preventDefault(); // Stop form submission if fields are empty
    } else {
        // Handle login logic
        alert("Login successful!");
        // Ideally, this should connect to a backend for actual authentication
    }
});

