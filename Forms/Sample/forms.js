const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

emailInput.addEventListener("input", () => {
  const isValid = emailInput.value.includes("@");

  emailError.hidden = isValid;
  submitBtn.disabled = !isValid;
});

