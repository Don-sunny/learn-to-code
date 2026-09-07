var btn = document.getElementById("btn");

document.getElementById("sign-up").addEventListener("input", (e) => {
  var email = document.getElementById("name-input").value;
  var password = document.getElementById("input-password").value;
  console.log(email, password);
  if (email.includes("@") && email.includes(".") && password.length >= 8) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
    console.log("your email or password is incorrect!");
  }
});

document.getElementById("sign-up").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submmitted successfully ");
  document.getElementById("name-input").value = "";
  document.getElementById("input-password").value = "";});
