

const form = document.getElementById("gifForm");
const input = document.getElementById("categoryInput");
const gifContainer = document.getElementById("gifContainer");
const deleteAllBtn = document.getElementById("deleteAllBtn");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const category = input.value;
  const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

  try {
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=${apiKey}`);
    if (!response.ok) throw new Error("Request failed");
    
    const data = await response.json();
    const gifUrl = data.data.images.original.url;

 
    const gifWrapper = document.createElement("div");
    const img = document.createElement("img");
    img.src = gifUrl;
    img.style.width = "300px";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.addEventListener("click", () => {
      gifWrapper.remove();
    });

    gifWrapper.appendChild(img);
    gifWrapper.appendChild(deleteBtn);
    gifContainer.appendChild(gifWrapper);

  } catch (error) {
    console.error("Error:", error);
  }

  input.value = "";
});


deleteAllBtn.addEventListener("click", () => {
  gifContainer.innerHTML = "";
});

//nothing to add
