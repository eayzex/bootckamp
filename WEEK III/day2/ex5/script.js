const container = document.getElementById("container");
console.log(container);

const listItems = document.querySelectorAll(".list li");
listItems.forEach(item => {
    if (item.textContent === "Pete") {
        item.textContent = "Richard";
    }
});

const secondList = document.querySelectorAll(".list")[1];
secondList.removeChild(secondList.children[1]);

const lists = document.querySelectorAll(".list");
lists.forEach(list => {
    list.children[0].textContent = "Your Name Here"; // Put your name here
});

lists.forEach(list => {
    list.classList.add("student_list");
});

const firstList = lists[0];
firstList.classList.add("university", "attendance");

container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

const danItem = secondList.querySelector("li:last-child");
if (danItem.textContent === "Dan") {
    danItem.style.display = "none";
}

const richardItem = document.querySelector("li");
if (richardItem.textContent === "Richard") {
    richardItem.style.border = "2px solid black";
}

document.body.style.fontSize = "18px";

if (container.style.backgroundColor === "lightblue") {
    alert("Hello John and Sarah");
}
