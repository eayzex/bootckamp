function myMove() {
    let box = document.getElementById("animate");
    let container = document.getElementById("container");
    
    let position = 0;
    let maxPosition = container.clientWidth - box.clientWidth;
    
    let interval = setInterval(function() {
        if (position >= maxPosition) {
            clearInterval(interval); 
        } else {
            position++;
            box.style.left = position + "px";
        }
    }, 1);
}
