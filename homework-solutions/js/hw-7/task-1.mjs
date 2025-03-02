/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/

function mergeArrays(...arrays) {
  return [].concat(...arrays);
  }
console.log(mergeArrays([1, 2], [3, 4], [5, 6]));

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */

function devideBy(sentence) {
  let words = sentence.toLowerCase().split(/\s+/);
  let result = "";
  result += words[0];
  for (let i = 1; i < words.length; i++) {
      result += "_" + words[i].charAt(0).toUpperCase() + words[i].slice(1);
      }
  return result;
}
console.log(devideBy("I    am    an     engineer"));

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
    первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
    - Например fibonacci(8) //21
  */

function fibonacci(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a = 0;
  let b = 1;
  let aB;
  for (let i = 2; i <= n; i++) {
    aB = a + b;
    a = b;
    b = aB;
  }
  return b;
}
console.log(fibonacci(8));

// Оптимизированный вариант:
// function fibonacci(n) {
//   if (n <= 1) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(8));

export { mergeArrays, fibonacci, devideBy };
