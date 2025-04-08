Promise.resolve(3)
  .then(result => console.log("Resolved with:", result))
  .catch(error => console.log("Error:", error));

Promise.reject("Boo!")
  .then(result => console.log("Resolved with:", result))
  .catch(error => console.log("Rejected with:", error));
