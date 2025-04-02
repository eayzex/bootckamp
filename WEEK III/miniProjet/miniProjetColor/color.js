const colors = [
    "red", "orange", "yellow", "green",
    "lightgreen", "cyan", "blue", "darkblue",
    "purple", "pink", "peachpuff", "gray",
    "black"
];

const colorsContainer = document.querySelector(".colors");
const gridContainer = document.querySelector(".grid");
const clearButton = document.getElementById("clear");
let selectedColor = "black";
let isDrawing = false;

// إنشاء ألوان
colors.forEach(color => {
    const div = document.createElement("div");
    div.classList.add("color");
    div.style.backgroundColor = color;
    div.addEventListener("click", () => selectedColor = color);
    colorsContainer.appendChild(div);
});

// إنشاء الشبكة
for (let i = 0; i < 30 * 30; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    
    cell.addEventListener("mousedown", () => {
        isDrawing = true;
        cell.style.backgroundColor = selectedColor;
    });

    cell.addEventListener("mouseover", () => {
        if (isDrawing) {
            cell.style.backgroundColor = selectedColor;
        }
    });

    cell.addEventListener("mouseup", () => isDrawing = false);

    gridContainer.appendChild(cell);
}

document.body.addEventListener("mouseup", () => isDrawing = false);

clearButton.addEventListener("click", () => {
    document.querySelectorAll(".cell").forEach(cell => {
        cell.style.backgroundColor = "white";
    });
});