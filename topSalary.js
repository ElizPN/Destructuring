let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(obj) {
  let maxSalaryName = "";
  let maxSalary = 0;

  let arr = Object.entries(obj);
  if (arr.length === 0) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    let [name, salary] = arr[i];
    if (salary > maxSalary) {
      maxSalary = salary;
      maxSalaryName = name;
    }
  }
  return maxSalaryName;
}
console.log(topSalary(salaries));
