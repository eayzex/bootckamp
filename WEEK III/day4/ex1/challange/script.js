document.getElementById("libform").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let noun = document.getElementById("noun").value.trim();
    let adjective = document.getElementById("adjective").value.trim();
    let person = document.getElementById("person").value.trim();
    let verb = document.getElementById("verb").value.trim();
    let place = document.getElementById("place").value.trim();

   
    if (!noun || !adjective || !person || !verb || !place) {
        alert("Please fill in all fields!");
        return;
    }

    
    let stories = [
        `${person} went to ${place} with a ${adjective} ${noun}. Then, they decided to ${verb} quickly!`,
        `In ${place}, ${person} found a ${adjective} ${noun}. They had no choice but to ${verb}.`,
        `While walking in ${place}, ${person} saw a ${noun} that looked very ${adjective}. They immediately decided to ${verb}!`
    ];

    
    let randomIndex = Math.floor(Math.random() * stories.length);
    document.getElementById("story").textContent = stories[randomIndex];
});


document.getElementById("shuffle-button").addEventListener("click", function() {
    let storyElement = document.getElementById("story");
    if (!storyElement.textContent) return; 

    let noun = document.getElementById("noun").value.trim();
    let adjective = document.getElementById("adjective").value.trim();
    let person = document.getElementById("person").value.trim();
    let verb = document.getElementById("verb").value.trim();
    let place = document.getElementById("place").value.trim();

    let stories = [
        `${person} went to ${place} with a ${adjective} ${noun}. Then, they decided to ${verb} quickly!`,
        `In ${place}, ${person} found a ${adjective} ${noun}. They had no choice but to ${verb}.`,
        `While walking in ${place}, ${person} saw a ${noun} that looked very ${adjective}. They immediately decided to ${verb}!`
    ];

    let randomIndex = Math.floor(Math.random() * stories.length);
    storyElement.textContent = stories[randomIndex];
});
