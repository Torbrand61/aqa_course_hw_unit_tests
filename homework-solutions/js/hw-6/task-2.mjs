/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique;
let resultNull;

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const competitorPizzasLC = [];
for (let i = 0; i < competitorPizzas.length; i++) {
  competitorPizzasLC.push(competitorPizzas[i].toLowerCase());
}

const resultUniqueT1 = [];
for (let i = 0; i < myPizzasT1.length; i++) {
  let myPizzasLC = myPizzasT1[i].toLowerCase();
  if (!competitorPizzasLC.includes(myPizzasLC)) {
    resultUniqueT1.push(myPizzasLC);
  }
}

const resultUniqueT2 = [];
for (let i = 0; i < myPizzasT2.length; i++) {
  let myPizzasLC = myPizzasT2[i].toLowerCase();
  if (!competitorPizzasLC.includes(myPizzasLC)) {
    resultUniqueT2.push(myPizzasLC);
  }
}

if (resultUniqueT1.length) {
  resultUnique = resultUniqueT1
  console.log(resultUnique);
} else {
  resultNull = null;
  console.log(resultNull);
}

if (resultUniqueT2.length) {
  resultUnique = resultUniqueT2
  console.log(resultUnique);
} else {
  resultNull = null;
  console.log(resultNull);
}

export { resultNull, resultUnique };
