function  displayNumbersDivisible(divisor) {
    let sum = 0
    for (let index = 0; index < 500 ; index++) {
        // console.log(index % 23 
        if(index % divisor == 0){
            console.log(index)
    sum += index }

        console.log(sum);
        
    }
}
displayNumbersDivisible(77)
