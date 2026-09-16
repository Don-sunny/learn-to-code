
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const submitBtn = document.getElementById("submitBtn");

// this is my code.
/* emailInput.addEventListener("input", () => {
  const isValid = emailInput.value.includes("@");

  emailError.hidden = isValid;
  submitBtn.disabled = !isValid;
});

passwordInput.addEventListener("input", () => {
  const isValid = passwordInput.value.length === 8 ? true : false;

  passwordError.hidden = isValid;
  submitBtn.disabled = !isValid;
}); */

//claude code.

function validateForm(){
  const email = emailInput.value;
  const password = passwordInput.value;

  const emailValid = email.includes("@");
  const passwordValid = password.length >= 8;

  emailError.hidden = emailValid || email === " ";
  passwordError.hidden = passwordValid || password === " ";

  submitBtn.disabled = !(emailValid && passwordValid);

}
emailInput.addEventListener("input",validateForm);
passwordInput.addEventListener("input",validateForm);

