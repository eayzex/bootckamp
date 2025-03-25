const family = {
    mother : "fatima",
    father : "ahmed",
    son :"rayan",
    doughter :"amina"


};
console.log("family members(keys):" )
for (let key in family) {
    console.log(key);
}

console.log("\nFamily members (values):");
for (let key in family) {
    console.log(family[key]);
}

