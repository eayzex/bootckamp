const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]; 

let initials = names.map(name => name[0]); 

initials.sort(); 

let secretName = initials.join(""); 


console.log(secretName); 
