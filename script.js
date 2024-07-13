function isValidEmail(email) {
    // Basic email format validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById('loadButton').addEventListener('click', function() {
    const password = document.getElementById('passwordInput').value;
    if (password === '09102008') {
        const url = document.getElementById('urlInput').value;
        const email = document.getElementById('emailInput').value;
        
        if (isValidEmail(email)) {
            // Proceed with email validation or integration with a service/API
            if (url) {
                document.getElementById('targetIframe').src = url;
                showNotification('Website loaded successfully.');
            } else {
                alert('Please enter a valid URL.');
            }
        } else {
            alert('Please enter a valid email address.');
        }
    } else {
        alert('Incorrect password.');
    }
});
