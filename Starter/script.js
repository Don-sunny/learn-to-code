console.log(document.getElementById("heading"));
console.log(document.getElementById("para"));
console.log(document.getElementById("div"));

// setTimeout(() => {
//   document.getElementB yId("heading").textContent = "this is don";
//   document.getElementById("para").textContent = "para is changed";
//   document.getElementById("div").textContent = "div is edited";
// }, 5000);
let clicks = 0;

document.getElementById("btn").addEventListener("click", () => {
  clicks++;
  document.getElementById("heading").textContent =
    `Button clicked ${clicks} times.`;
  console.log("button cliked");
});

document.getElementById("btn2").addEventListener("click", function (event) {
  console.log("this:", this);
  console.log("event.target", event.target);
});
Ś;
document.getElementById("btn3").addEventListener("click", (event) => {
  console.log("this:", this);
  console.log("event.target:", event.target);
});

document.getElementById("my-form").addEventListener("submit", (event) => {
  // event.preventDefault();
  console.log("submitted:", document.getElementById("name-input").value);
});
