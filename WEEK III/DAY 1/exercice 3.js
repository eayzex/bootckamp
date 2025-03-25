const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askNumber() {
    rl.question("Enter a number: ", (input) => {
        let number = Number(input);

        switch (true) { 
            case (number < 10):
                console.log("The number is too small, try again.");
                askNumber(); 
                break;
            default:
                console.log("You entered a valid number:", number);
                rl.close(); 
                break;
        }
    });
}

askNumber();
