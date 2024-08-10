document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Submit the form using JavaScript
  const form = event.target;
  const formData = new FormData(form);

  fetch(form.action, {
    method: form.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // Redirect to Formspree URL or show a success message
      window.location.href = form.action; // This line redirects to Formspree
    } else {
      alert('There was a problem with your submission.');
    }
  }).catch(error => {
    console.error('Form submission error:', error);
    alert('There was a problem with your submission.');
  }).finally(() => {
    // Reload the page to clear the form after redirection
    setTimeout(() => {
      window.location.reload();
    }, 500); // Adjust the timeout as needed
  });
});