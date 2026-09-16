const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const submitBtn = document.getElementById("submitBtn");
const confirmPassword = document.getElementById("confirmPassword");
const checkBox = document.getElementById("terms");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const nameInput = document.getElementById("name");
const nameError = document.getElementById("nameError");

function validateForm() {
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirm = confirmPassword.value;
  const name = nameInput.value;

  const emailValid = email.includes("@");
  const passwordValid = password.length >= 8;
  const confirmPasswordValid = confirm === password;
  const checkBoxValid = checkBox.checked;
  const nameValid = name != "";

  emailError.hidden = emailValid || email === "";
  passwordError.hidden = passwordValid || password === "";
  confirmPasswordError.hidden = confirmPasswordValid || confirm === "";
  nameError.hidden = nameValid || name === "";
  submitBtn.disabled = !(
    emailValid &&
    passwordValid &&
    checkBoxValid &&
    confirmPasswordValid &&
    nameValid
  );
}
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);
confirmPassword.addEventListener("input", validateForm);
checkBox.addEventListener("input", validateForm);
nameInput.addEventListener("input", validateForm);
