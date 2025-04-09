async function sayHello() {
    return "Hello";
  }
// function sayHello() {
//   return Promise.resolve("Hello");
// }
let result = sayHello().then((result) => {
    console.log(result); } )


  