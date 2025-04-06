const form = document.getElementById("myForm");
const outputDiv = document.getElementById("output");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = form.elements["name"].value;
  const lastName = form.elements["lastName"].value;

  const data = {
    name: name,
    lastName: lastName
  };

  const jsonData = JSON.stringify(data);

  outputDiv.textContent = jsonData;
});
