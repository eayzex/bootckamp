
function displayStudentInfo(objUser){
    const {first, last} = objUser
   console.log(`your full name is ${first} ${last}`)
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});

