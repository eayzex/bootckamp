const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.map((color, index) => {
  console.log(`${index + 1}# choice is ${color}.`);
});

const hasViolet = colors.some(color => color === "Violet");

if (hasViolet) {
  console.log("Yeah");
} else {
  console.log("No...");
}
