/*
 1. Создайте объект qa с полями name, age, salary и методом getInfo(greetingsWord),
    который будет возвращать строку вида: 
    ${greetingsWord}, my name is ${name}, I'm ${age} and my salary is ${salary}. 
    Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.
*/

let qa = {
  name: "Alice",
  age: 30,
  salary: 5000,
  getInfo(greetingsWord) {
    return `${greetingsWord}, my name is ${this.name} I'm ${this.age} and my salary is ${this.salary}`;
  }
};

let qaComa = {
  name: "Alice",
  age: 30,
  salary: 5000,
  getInfo(greetingsWord) {
    return `${greetingsWord}, my name is ${this.name}, I'm ${this.age} and my salary is ${this.salary}`;
  }
};

/*
 2. Changing the context
  - Создайте объект anotherQa с полями name, age, salary, значения в которых будут отличны от объекта qa
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода bind()
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода call()
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода apply()
 */

let anotherQa = {
  name: "Peter",
  age: 36,
  salary: 6000,
};

// Используйте bind с greetingWord "Hello"
let bindResult = qaComa.getInfo.bind(anotherQa, "Hello");

// Используйте call с greetingWord "Hi"
let callResult = qaComa.getInfo.call(anotherQa, "Hi");

// Используйте apply с greetingWord "Hey"
let applyResult = qaComa.getInfo.apply(anotherQa, ["Hey"]);

console.log(bindResult);
console.log(callResult);
console.log(applyResult);

/*
 3. Closures
  - Создайте функцию createCounter(),
  - Создайте в функции createCounter переменную count, которая будет равна 0
  - Верните из функции createCounter новую функцию
  - В теле новой функции реализуйте увеличение count на + 1 при каждом вызове функции
  - После увеличение каунтера выводите в консоль Function was called ${count} times
  - Создайте переменную functionCallCounter, в которой будет лежать результат createCounter()
  - Вызовите functionCallCounter() 5 раз, убедитесь что в консоли верно выводятся данные
*/

function createCounter() {
  let count = 0;
  return function () { // Возвращаем новую функцию
    count++; // Увеличиваем счетчик
    console.log(`Function was called ${count} times`);
  };
}

const functionCallCounter = createCounter();

export { qa, bindResult, callResult, applyResult, functionCallCounter, anotherQa };
