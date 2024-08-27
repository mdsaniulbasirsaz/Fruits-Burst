document.addEventListener('DOMContentLoaded', function () {
    var toastTrigger = document.getElementById('liveToastBtn');
    var toastLiveExample = document.getElementById('liveToast');
    
    if (toastTrigger) {
        toastTrigger.addEventListener('click', function () {
            var toast = new bootstrap.Toast(toastLiveExample);
            toast.show();
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var toastEl = document.getElementById('LiveLoginToast');
    var toast = new bootstrap.Toast(toastEl);

    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault(); 
      toast.show(); 
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var toastE2 = document.getElementById('LiveSignupToast');
    var toast = new bootstrap.Toast(toastE2);

    document.getElementById('signupForm').addEventListener('submit', function(event) {
      event.preventDefault(); 
      toast.show(); 
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const isLoggedIn = localStorage.getItem('isLoggedIn'); // Example state check

    if (isLoggedIn) {
        document.getElementById('loginButton').style.display = 'none';
        document.getElementById('signupButton').style.display = 'none';
        document.getElementById('logoutLink').style.display = 'block';
    } else {
        document.getElementById('loginButton').style.display = 'block';
        document.getElementById('signupButton').style.display = 'block';
        document.getElementById('logoutLink').style.display = 'none';
    }
});


document.getElementById('loginButton').addEventListener('click', function() {
  const loginSuccessful = true;

  if (loginSuccessful) {
      localStorage.setItem('isLoggedIn', true);

      // window.location.href = '/index.html';
  } else {
      alert('Login failed! Please try again.');
  }
});
document.getElementById('logoutLink').addEventListener('click', function() {
  localStorage.removeItem('isLoggedIn');

  document.getElementById('loginButton').style.display = 'block';
  document.getElementById('signupButton').style.display = 'block';

  document.getElementById('logoutLink').style.display = 'none';

  // window.location.href = '/index.html';
});