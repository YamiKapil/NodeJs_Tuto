// How node js differs from Vanilla Js
// 1. Node runs on a server - not on a brower (backend not frontend)
// 2. The console is the terminal window
console.log("Hello There");
// 3. Global object instead of window object
// console.log(global);
// 4. Has Common core modules that we will explore
// 5. CommonJS modules instead of ES5 modules
// 6. Missing some JS API's like fetch

const os = require("os");
const path = require("path");

// importing the math.js...
const math = require("./math");
console.log(math.add(2, 3));
console.log(math.subtract(2, 3));
console.log(math.divide(2, 3));
console.log(math.multiple(2, 3));
// or we can destructure and do like...
const { add, multiple } = require("./math");
console.log(add(3, 4));
console.log(multiple(3, 4));

// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());

// console.log(__dirname);
// console.log(__filename);

// console.log(path.dirname(__filename));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.parse(__filename)); // get object with all the values..
