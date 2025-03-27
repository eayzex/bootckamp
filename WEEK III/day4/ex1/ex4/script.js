document.getElementById("MyForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let radiusInput = document.getElementById("radius");
    let volumeInput = document.getElementById("volume");

    let radius = parseFloat(radiusInput.value);

    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid value for the radius!");
        return;
    }

    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    volumeInput.value = volume.toFixed(2);
});

