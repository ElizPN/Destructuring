const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};
const { today, tomorrow, yesterday } = HIGH_TEMPERATURES;
// if we don't want to create new variables
console.log(today);
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;
// if we want to create new variables and assing the value of property
// today: - we get the value and assign this value to new variable highToday.
console.log(highToday);
console.log(highTomorrow);
