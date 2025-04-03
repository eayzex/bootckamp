function makeJuice(size) {
    let ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const message = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        document.getElementById("juice-container").innerHTML = `<p>${message}</p>`;
    }

    addIngredients("Mango", "Banana", "Orange");
    addIngredients("Apple", "Pineapple", "Strawberry");

    displayJuice();
}

makeJuice("large");
