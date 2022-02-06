// We remember Array.prototype.slice()
//when we want to copy some array elements by their index.
// For example:
let allNumbers = [2, 1, 4, 5, 3, 2, 6, 2];
let someOfnumbers = allNumbers.slice(3);
console.log(someOfnumbers); // outputs array from element with index 3

// We also can use ...rest parameter with destructuring assigment
[a, b, c, ...someOfnumbers1] = allNumbers;
console.log(someOfnumbers1); // also outputs array from element with index 3
