document.getElementById('loadCharacterBtn').addEventListener('click', loadCharacter);

function loadCharacter() {
    // Show the loading spinner
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('characterDetails').classList.add('hidden');
    document.getElementById('errorMessage').classList.add('hidden');
    
    // Random character ID from 1 to 83
    const characterId = Math.floor(Math.random() * 83) + 1;
    const apiUrl = `https://www.swapi.tech/api/people/${characterId}/`;

    // Fetch data from the API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.result) {
                const character = data.result.properties;
                displayCharacterData(character);
            } else {
                showErrorMessage();
            }
        })
        .catch(error => {
            showErrorMessage();
        });
}

function displayCharacterData(character) {
    // Hide loading spinner
    document.getElementById('loading').classList.add('hidden');

    // Show the character details
    document.getElementById('characterName').textContent = character.name;
    document.getElementById('characterHeight').textContent = character.height;
    document.getElementById('characterGender').textContent = character.gender;
    document.getElementById('characterBirthYear').textContent = character.birth_year;
    
    // Fetch homeworld data
    fetch(character.homeworld)
        .then(response => response.json())
        .then(data => {
            document.getElementById('characterHomeWorld').textContent = data.result.properties.name;
        })
        .catch(() => {
            document.getElementById('characterHomeWorld').textContent = 'Unknown';
        });

    document.getElementById('characterDetails').classList.remove('hidden');
}

function showErrorMessage() {
    document.getElementById('loading').classList.add('hidden');
    document.getElementById('errorMessage').classList.remove('hidden');
}
