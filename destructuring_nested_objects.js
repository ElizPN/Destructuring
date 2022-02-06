// Destructuring with nested object
const user = {
  johnDoe: {
    age: 34,
    email: "johnDoe@freeCodeCamp.com",
  },
};

const {
  johnDoe: { age, email },
} = user;
// If we extract the values of object properties and dont change variable

const {
  johnDoe: { age: userAge, email: userEmail },
} = user;
// if we assign value of object property to new variable

const { johnDoe: userName } = user;
console.log(userName);
//userName stores same values as johnDoe
