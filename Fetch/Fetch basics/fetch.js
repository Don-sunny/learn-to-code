// async function getFact() {
//   const response = await fetch("https://catfact.ninja/fact");
//   try {
//     if (!response.ok) {
//       const errorData = await response.json().catch(() => ({}));
//       throw new Error(
//         errorData.message || `HTTP error! status: ${response.status}`,
//       );
//     }
//     return await response.json()
//   } catch (error) {
//     console.error(`Fetch Faild:`, error.message);
//     throw error;
//   }
// }

// document.getElementById("fact").addEventListener("click", async (event) => {
//   event.preventDefault();
//   document.getElementById("result").textContent = "Loading....";
//   const fact = await getFact();
//   document.getElementById("result").textContent = fact.fact;
// });

async function getFact() {
  try {
    const response = await fetch("https://catfact.ninja/fact");

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `HTTP error! status: ${response.status}`,
      );
    }
    return await response.json();
  } catch (error) {
    console.error(`Fetch failed:`, error.message);
    throw error;
  }
}

document.getElementById("fact").addEventListener("click", async (event) => {
  event.preventDefault();
  const result = document.getElementById("result");
  result.textContent = "Loading....";
  try {
    const fact = await getFact();
    result.textContent = fact.fact;
  } catch (error) {
    result.textContent = `Failed to load fact: ${error.message}`;
  }
});
