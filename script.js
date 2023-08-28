document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Simulate form submission
    // Here, we're just showing the "Thank You" message
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
});
