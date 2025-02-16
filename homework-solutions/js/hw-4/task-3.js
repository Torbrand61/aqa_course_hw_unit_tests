// Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, преобразовываясь в number

let minAge = 18;
let maxAge = 60;
let age = `18`;
let ageNumber = Number(age);

if (Number.isNaN(ageNumber)) {
  console.log (`Incorrect data type`);
} else if (ageNumber < minAge) {
  console.log(`You don't have access cause your age is ${ageNumber}. It's less then 18`);
} else if (ageNumber >= minAge && ageNumber < maxAge) {
  console.log(`Welcome!`);
} else if (ageNumber > maxAge) {
  console.log(`Keep calm and look Culture channel`);
} else {
  console.log(`Technical work`);
}
