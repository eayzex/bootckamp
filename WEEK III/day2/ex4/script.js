function hotelCost(nights) {
    return nights * 140; 
}

function planeRideCost(destination) {
    destination = destination.toLowerCase();
    if (destination === "london") return 183;
    if (destination === "paris") return 220;
    return 300; 
}

function rentalCarCost(days) {
    let cost = days * 40; 
    if (days > 10) cost *= 0.95; 
    return cost;
}

function totalVacationCost() {
    let nights, destination, days;

    while (true) {
        nights = prompt("How many nights will you stay at the hotel?");
        nights = Number(nights);
        if (!isNaN(nights) && nights > 0) break;
        alert("❌ Please enter a valid positive number.");
    }

    while (true) {
        destination = prompt("What is your destination?").trim();
        if (destination.match(/^[a-zA-Z\s]+$/)) break;
        alert("❌ Please enter a valid city name.");
    }

    while (true) {
        days = prompt("How many days will you rent the car?");
        days = Number(days);
        if (!isNaN(days) && days > 0) break;
        alert("❌ Please enter a valid positive number.");
    }

    const hotel_cost = hotelCost(nights);
    const plane_cost = planeRideCost(destination);
    const car_cost = rentalCarCost(days);
    const total_cost = hotel_cost + plane_cost + car_cost;

    alert(`🔹 Hotel Cost: $${hotel_cost}\n🔹 Flight Cost: $${plane_cost}\n🔹 Car Rental Cost: $${car_cost}\n✅ Total Cost: $${total_cost}`);
}
