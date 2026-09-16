const list = document.createElement("ul");

// Fetches posts, but checks localStorage first to avoid hitting the
// network every time. Always resolves to a plain array of posts,
// whether the data came from cache or from a fresh fetch — callers
// don't need to know or care which.
async function getList() {
  try {
    const cached = localStorage.getItem("posts");

    // Cache hit: skip the network entirely and return early.
    if (cached !== null) {
      console.log("cache hit.");
      return JSON.parse(cached);
    }

    // Cache miss: go fetch from the API.
    console.log("cache miss, fetching.");
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    // fetch() only rejects on network failure (offline, DNS, etc).
    // A bad HTTP status (404, 500...) still resolves successfully,
    // so we have to check response.ok ourselves and throw manually.
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`,
      );
    }

    const data = await response.json();

    // Cache the fresh data so the next load can skip the network.
    localStorage.setItem("posts", JSON.stringify(data));
    return data;
  } catch (error) {
    // Log for debugging, then re-throw so the caller (listData) can
    // decide how to show the failure to the user.
    console.error(`Fetch failed`, error.message);
    throw error;
  }
}

// Renders the first 10 posts into `list`, showing a loading message
// while the fetch/cache lookup is in progress and a real error
// message if it fails — never leaves the UI silently stuck.
async function listData() {
  list.innerHTML = ""; // clear out anything from a previous render (e.g. after Refresh)

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

// Clears the cache and re-fetches/re-renders from the network on demand.
document.getElementById("refresh").addEventListener("click", () => {
  localStorage.removeItem("posts");
  listData();
});

listData();
document.body.appendChild(list);