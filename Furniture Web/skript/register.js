document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.querySelector(".login_form");
  const signupForm = document.querySelector(".signup_form");
  const loginLink = document.getElementById("login");
  const signupLink = document.getElementById("signup");
  const closeButtons = document.querySelectorAll(".form_close");
  const formContainer = document.getElementById("login-form-container");

  // Show login form
  loginLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  });

  // Show signup form
  signupLink.addEventListener("click", function (event) {
    event.preventDefault();
    loginForm.style.display = "none";
    signupForm.style.display = "block";
  });

  // Close forms
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      formContainer.style.display = "none";
    });
  });

  // Function to open the modal
  function openModal() {
    formContainer.style.display = "flex";
    // Default to showing the login form when opening the modal
    loginForm.style.display = "block";
    signupForm.style.display = "none";
  }

  // Open modal when needed
  // For example, you can call openModal() when a button is clicked
  // document.getElementById("openModalButton").addEventListener("click", openModal);

  // Optionally, handle outside click to close the modal
  formContainer.addEventListener("click", function (event) {
    if (event.target === formContainer) {
      formContainer.style.display = "none";
    }
  });
});
