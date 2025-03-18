/*
  Создайте функцию, принимающую число n, которая при каждом вызове будет
  генерировать случайное число от 1 до n включительно. 
  Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах). 
  И так пока не переберутся все n чисел. На n + 1 вызов и
  далее функция должна возвращать 'All numbers were received'. 
  Задачу решить через замыкания
  Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

  Рекоммендации:
   - Для генерации числа в границах воспользуйтесь методом:
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
*/

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function uniqueRandomGenerator(n) {
  const usedNumbers = new Set();
  return function() {
    if (usedNumbers.size === n) {
      return 'All numbers were received';
    }
    let randomNum;
    do {
      randomNum = getRandomArbitrary(1, n + 1);
    } while (usedNumbers.has(randomNum));

    usedNumbers.add(randomNum);
    return randomNum;
  };
}

// const generateNumber = uniqueRandomGenerator(5);

// for (let i = 0; i < 10; i++) {
//   console.log(generateNumber());
// }

export { uniqueRandomGenerator };
