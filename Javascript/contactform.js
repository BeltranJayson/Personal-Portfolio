// contactForm.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        alert('Message sent successfully!');
        form.reset(); // Clear the form fields
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            alert(data["errors"].map(error => error["message"]).join(", "));
          } else {
            alert('Oops! There was a problem submitting your form');
          }
        });
      }
    }).catch(error => {
      alert('Oops! There was a problem submitting your form');
    });
  });
  