
document.addEventListener('DOMContentLoaded', function () {
  // Setup toast for liveToastBtn
  var toastTrigger = document.getElementById('liveToastBtn');
  var toastLiveExample = document.getElementById('liveToast');
  
  if (toastTrigger) {
      toastTrigger.addEventListener('click', function () {
          var toast = new bootstrap.Toast(toastLiveExample);
          toast.show();
      });
  }

  // Setup toast for loginForm submission
  var toastElLogin = document.getElementById('LiveLoginToast');
  if (toastElLogin) {
      var toastLogin = new bootstrap.Toast(toastElLogin);
      var loginForm = document.getElementById('loginForm');
      
      if (loginForm) {
          loginForm.addEventListener('submit', function (event) {
              event.preventDefault(); 
              toastLogin.show();
          });
      }
  }

  // Setup toast for signupForm submission
  var toastElSignup = document.getElementById('LiveSignupToast');
  if (toastElSignup) {
      var toastSignup = new bootstrap.Toast(toastElSignup);
      var signupForm = document.getElementById('signupForm');
      
      if (signupForm) {
          signupForm.addEventListener('submit', function (event) {
              event.preventDefault(); 
              toastSignup.show(); 
          });
      }
  }

  // Check if the user is logged in and adjust UI accordingly
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'true') {
      document.getElementById('loginButton').style.display = 'none';
      document.getElementById('signupButton').style.display = 'none';
      document.getElementById('logoutLink').style.display = 'block';
  } else {
      document.getElementById('loginButton').style.display = 'block';
      document.getElementById('signupButton').style.display = 'block';
      document.getElementById('logoutLink').style.display = 'none';
  }
});

// Handle login button click
document.getElementById('loginButton').addEventListener('click', function() {
  const loginSuccessful = true; // Replace this with actual login logic

  if (loginSuccessful) {
      localStorage.setItem('isLoggedIn', 'true');
      // Optionally redirect
      // window.location.href = '/index.html';
  } else {
      alert('Login failed! Please try again.');
  }
});

// Handle logout link click
document.getElementById('logoutLink').addEventListener('click', function() {
  localStorage.removeItem('isLoggedIn');

  document.getElementById('loginButton').style.display = 'block';
  document.getElementById('signupButton').style.display = 'block';
  document.getElementById('logoutLink').style.display = 'none';

  // Optionally redirect
  // window.location.href = '/index.html';
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;

  // Create an object with form data
  const formData = {
    name,
    email,
    address,
    phone
  };

  // Send the data to the /signup API endpoint
  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Handle successful response
      console.log('Signup successful:', data);
      // You can redirect or show a success message here
    } else {
      // Handle error response
      console.error('Signup failed:', data.message);
      // You can show an error message here
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});
