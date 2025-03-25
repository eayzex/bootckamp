const planets = [
    { name: "Mercury", moons: 0 },
    { name: "Venus", moons: 0 },
    { name: "Earth", moons: 1 },
    { name: "Mars", moons: 2 },
    { name: "Jupiter", moons: 79 },
    { name: "Saturn", moons: 82 },
    { name: "Uranus", moons: 27 },
    { name: "Neptune", moons: 14 }
];

const section = document.querySelector('.listPlanets');

planets.forEach(planet => {
    const planetDiv = document.createElement('div');
    planetDiv.classList.add('planet');

    planetDiv.textContent = planet.name;

    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    planetDiv.style.backgroundColor = randomColor;

    section.appendChild(planetDiv);

    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement('div');
        moonDiv.classList.add('moon');
        planetDiv.appendChild(moonDiv);
    }
});
