const h1 = document.querySelector("h1");
console.log(h1);

const article = document.querySelector("article");
const paragraphs = article.querySelectorAll("p");
paragraphs[paragraphs.length - 1].remove();

const h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
    h2.style.backgroundColor = "red";
});

const h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
    h3.style.display = "none";
});

const boldBtn = document.getElementById("boldBtn");
boldBtn.addEventListener("click", function () {
    paragraphs.forEach(p => {
        p.style.fontWeight = "bold";
    });
});

h1.addEventListener("mouseover", function () {
    const randomSize = Math.floor(Math.random() * 100) + "px";
    h1.style.fontSize = randomSize;
});

paragraphs[1].addEventListener("mouseover", function () {
    paragraphs[1].classList.add("fade");
});
