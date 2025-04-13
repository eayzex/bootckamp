// app.js
// const greet = require('./greeting');

// console.log(greet('youssef'));


// task 2
// app.js
// import { showMessage } from './colorful-message.js';  // استخدام import بدلاً من require

// showMessage();

// task 3 
// app.js
import { showMessage } from './colorful-message.js';
import { readFileContent } from './files/read-file.js';  

showMessage();
readFileContent();

