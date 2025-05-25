document.addEventListener("DOMContentLoaded", function () {
  const formOpenButton = document.getElementById("form-open");
  const loginFormContainer = document.getElementById("login-form-container");
  const formCloseButtons = document.querySelectorAll(".form_close");

  formOpenButton.addEventListener("click", function () {
    loginFormContainer.style.display = "block";
  });

  formCloseButtons.forEach((button) => {
    button.addEventListener("click", function () {
      loginFormContainer.style.display = "none";
    });
  });
});
