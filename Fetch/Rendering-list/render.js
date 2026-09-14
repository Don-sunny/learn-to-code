const list = document.createElement("ul");

async function getList() {
  try {
    const cached = localStorage.getItem("posts");

    if (cached !== null) {
      console.log("cache hit.");
      return JSON.parse(cached);
    }

    console.log("cache miss, fetching.");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`,
      );
    }

    const data = await response.json();
    localStorage.setItem("posts", JSON.stringify(data));
    return data;
  } catch (error) {
    console.error(`Fetch failed`, error.message);
    throw error;
  }
}

async function listData() {
  list.innerHTML = ""; // clear anything from a previous render

  const loading = document.createElement("p");
  loading.textContent = "Loading....";
  list.appendChild(loading);

  try {
    const data = await getList();
    loading.remove();
    for (let i = 0; i < 10; i++) {
      const li = document.createElement("li");
      const h3 = document.createElement("h3");
      h3.textContent = data[i].title;
      const pId = document.createElement("p");
      pId.textContent = `Id: ${data[i].id}`;
      const pBody = document.createElement("p");
      pBody.textContent = data[i].body;
      li.appendChild(h3);
      li.appendChild(pId);
      li.appendChild(pBody);
      list.appendChild(li);
    }
  } catch (error) {
    loading.remove();
    const p = document.createElement("p");
    p.textContent = `Failed to load the list: ${error.message}`;
    list.appendChild(p);
  }
}

document.getElementById("refresh").addEventListener("click", () => {
  localStorage.removeItem("posts");
  listData();
});

listData();
document.body.appendChild(list);
