const createPerson = (name, age, gender) => ({
  name,
  age,
  gender,
});

// same result
// const createPerson = (name, age, gender) => {
//   return {
//     name: "Liza",
//     age: 28,
//     gender: "female",
//   };
// };
console.log(createPerson("myName", "myAge", "myGender"));
