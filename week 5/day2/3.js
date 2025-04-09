async function getStarshipData() {
    try {
      const response = await fetch("https://www.swapi.tech/api/starships/9/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const objectStarWars = await response.json();
      console.log(objectStarWars.result);
  
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  
  getStarshipData();
  