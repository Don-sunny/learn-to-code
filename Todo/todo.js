const todo_list = document.createElement("ul");

document.getElementById("todo-list").addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("submitted:", document.getElementById("todo").value);
  const li = document.createElement("li");
  const btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.classList.add("delete-btn");
  li.textContent = document.getElementById("todo").value;

  li.appendChild(btn);
  todo_list.appendChild(li);

  btn.addEventListener("click", () => li.remove());
  li.addEventListener("click", () => li.classList.toggle("done"));
  document.getElementById("todo").value = "";
});

document.body.appendChild(todo_list);
