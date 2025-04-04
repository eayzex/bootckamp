let myCar = {
    color : 'blue',
    details : {
      plateNumber: 123,
      name : "Ford"
    }
  }
  
  let myNewCar = {...myCar}

myNewCar.color = "red"
console.log(myCar.color) 
console.log(myNewCar.color) 
// console.log("myNewCar : ", myNewCar) 