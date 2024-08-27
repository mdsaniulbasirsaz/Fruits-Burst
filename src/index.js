// Initialize the toast
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