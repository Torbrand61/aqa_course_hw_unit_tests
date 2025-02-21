/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
let i = 10;
while (i > 0) {
    evenNumbersResult = evenNumbersResult + i + '-';
    i -= 2;
}
evenNumbersResult = evenNumbersResult + i;
console.log(evenNumbersResult);

// Оптимизированный вариант:
// let evenNumbersResult = '';
// for (let i = 10; i >= 0; i -= 2) {
//     evenNumbersResult += i + (i > 0 ? '-' : '');
// }
// console.log(evenNumbersResult);

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */

let smilePatternResult = '';
let smile = '';
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        smile += ':)';
    }
    if (i === 5) break;
    smilePatternResult += smile + '\n';
    smile = '';
}
smilePatternResult += smile;
console.log(smilePatternResult);

// Оптимизированный вариант:
// let smilePatternResult = '';
// for (let i = 1; i <= 5; i++) {
//     smilePatternResult += ':)'.repeat(i) + (i < 5 ? '\n' : '');
// }
// console.log(smilePatternResult);

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */

let replaceSpacesWithOneResult = '';
const text = 'Hello! I am a JS student!';
replaceSpacesWithOneResult = text.replaceAll(' ', '1');
console.log(replaceSpacesWithOneResult);

export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };
