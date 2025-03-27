let allBoldItems = document.querySelectorAll("strong");
let myParagraph = document.getElementById('myParagraph')
console.log(allBoldItems);

function highlight() {
    console.log("Mouse over");
    allBoldItems.forEach(item => {
        item.style.color = "red";
    });
}

function returnItemsToDefault() {
    console.log("Mouse out");
    allBoldItems.forEach(item => {
        item.style.color = "black";
    });
}
allBoldItems.forEach(item => {
   strong = item.textContent
})
  

myParagraph.addEventListener("mouseover", highlight);
myParagraph.addEventListener("mouseout", returnItemsToDefault);

