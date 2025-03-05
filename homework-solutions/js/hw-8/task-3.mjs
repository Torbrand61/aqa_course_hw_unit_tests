/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  numbers.sort((a, b) => a - b);

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] !== i + 1) {
      return i + 1;
    }
  }

  return numbers.length + 1;
}
console.log(findMissingNumber([5,2,7,3,8,1,6]))

// function findMissingNumber(numbers) {
//   const n = numbers.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = numbers.reduce((sum, num) => sum + num, 0);

//   return expectedSum - actualSum;
// }

export { findMissingNumber };
