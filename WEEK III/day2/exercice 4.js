const readlineSync = require('readline-sync');

function hotelCost() {
    let nights;
    do {
        nights = readlineSync.question("How many nights will you stay in the hotel? ");
    } while (isNaN(nights) || nights === "" || nights <= 0);
    
    return nights * 140;
}

function planeRideCost() {
    let destination;
    do {
        destination = readlineSync.question("What is your destination? ").toLowerCase();
    } while (!isNaN(destination) || destination.trim() === "");

    if (destination === "london") return 183;
    if (destination === "paris") return 220;
    return 300;
}

function rentalCarCost() {
    let days;
    do {
        days = readlineSync.question("How many days do you want to rent the car? ");
    } while (isNaN(days) || days === "" || days <= 0);

    let cost = days * 40;
    if (days > 10) cost *= 0.95;
    return cost;
}

function totalVacationCost() {
    let hotel = hotelCost();
    let flight = planeRideCost();
    let car = rentalCarCost();

    let
    const readlineSync = require('readline-sync');

    function hotelCost() {
        let nights;
        do {
            nights = readlineSync.question("How many nights will you stay in the hotel? ");
        } while (isNaN(nights) || nights === "" || nights <= 0);
        
        return nights * 140;
    }
    
    function planeRideCost() {
        let destination;
        do 
        {
            destination = readlineSync.question("What is your destination? ").toLowerCase();
        } while (!isNaN(destination) || destination.trim() === "");
    
        if (destination === "london") return 183;
        if (destination === "paris") return 220;
        return 300;
    }
    
    function rentalCarCost() {
        let days;
        do {
            days = readlineSync.question("How many days do you want to rent the car? ");
        } while (isNaN(days) || days === "" || days <= 0);
    
        let cost = days * 40;
        if (days > 10) cost *= 0.95;
        return cost;
    }
    
    function totalVacationCost() {
        let hotel = hotelCost();
        let flight = planeRideCost();
        let car = rentalCarCost();
    
        let total = hotel + flight + car;
    
        console.log(`Hotel cost: $${hotel}`);
        console.log(`Flight cost: $${flight}`);
        console.log(`Car rental cost: $${car}`);
        console.log(`Total vacation cost: $${total}`);
    
        return total;
    }
    
    totalVacationCost() 

}