//let arr = ["Ilya", "Kantor"];

// let [firstName, lastName] = arr;
// alert(firstName);

// let [firstName, surname] = "Ilya Kantor".split(" ");
// alert(firstName);

// второй элемент не нужен
let [firstName, , title, national] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

alert(national); // Consul
