// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:
funcOne(); // Expected output: 3

// #1.2 What will happen if the variable is declared with const instead of let?
// Answer: It will throw an error because 'const' variables cannot be reassigned.

// #2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree(); // Expected output: 0
funcTwo();
funcThree(); // Expected output: 5

// #2.2 What will happen if the variable is declared with const instead of let?
// Answer: It will throw an error because 'const' variables cannot be reassigned.

// #3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour();
funcFive();

// Expected output: hello


let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1 - run in the console:
funcSix(); // Expected output: test

// #4.2 What will happen if the variable is declared with const instead of let?
// Answer: It will behave the same because the local variable 'a' inside the function is scoped to the function,
