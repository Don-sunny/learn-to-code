const list = document.createElement("ul");

async function getList() {
  try {
    const resoponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!resoponse.ok) {
      const errorData = await resoponse.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP error! status: ${resoponse.status}`,
      );
    }
    return await resoponse.json();
  } catch (error) {
    console.error(`Fetch failed`, error.message);
    throw error;
  }
}

async function listData() {
  const loading = document.createElement("p");
  loading.textContent = "Loading....";
  list.appendChild(loading);
  try {
    const data = await getList();
    loading.remove();
    console.log(data);
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

listData();

document.body.appendChild(list);
