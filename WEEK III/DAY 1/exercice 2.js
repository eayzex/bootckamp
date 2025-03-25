
let colors = ["blue", "red", "green", "black", "purple"];


let suffixes = ["st", "nd", "rd", "th", "th"];


for (let i = 0; i < colors.length; i++) {
    let suffix = (i < 3) ? suffixes[i] : "th";
    console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}
