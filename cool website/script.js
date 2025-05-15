// Basic form submission handling (for demo purposes)
document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents page refresh
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert(`Welcome, ${username}! (This is a demo - no real sign-in happens)`);
    } else {
        alert('Please fill in all fields.');
    }
});