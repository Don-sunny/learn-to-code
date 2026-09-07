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

// if (email_checker() && password_checker()) {
//   btn.removeAttribute("disabled");
// } else {
//   console.log(
//     "your email or password incorrect! please enter the correct credential",
//   );
// }

// function email_checker() {
//   if (email.includes("@") && email.includes(".")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function password_checker() {
//   if (password.length < 8) {
//     return false;
//   } else {
//     return true;
//   }
// }
