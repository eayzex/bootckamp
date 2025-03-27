setTimeout(() => {
    alert("Hello World");
}, 2000);

setTimeout(() => {
    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
}, 2000);

const interval = setInterval(() => {
    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);

    if (container.getElementsByTagName("p").length >= 5) {
        clearInterval(interval);
    }
}, 2000);

document.getElementById("clear").addEventListener("click", () => {
    clearInterval(interval);
});
