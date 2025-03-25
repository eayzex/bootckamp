function changeEnough(itemPrice, amountOfChange) {
   const quarter = 0.25;
   const dime =0.10;
   const nickel = 0.05;
   const penny = 0.01;


let totalChange = (amountOfChange[0] * quarter) + 
(amountOfChange[1] * dime) + 
(amountOfChange[2] * nickel) + 
(amountOfChange[3] * penny);

return totalChange >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0])); 
console.log(changeEnough(14.11, [2, 100, 0, 0])); 
console.log(changeEnough(0.75, [0, 0, 20, 5])); 
