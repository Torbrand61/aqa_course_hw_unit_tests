/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */

const word = 'hello';
let vowelsAndConsonantsResult = '';
let vowelsAll = 'aeiou';
let consonantsAll = 'bcdfghjklmnpqrstvwxyz';
let vowels = 0;
let consonants = 0;
for (let letterWord of word) {
    if (vowelsAll.includes(letterWord)) {
        vowels++;
    } else if (consonantsAll.includes(letterWord)) {
        consonants++;
    }
}
vowelsAndConsonantsResult += `hello contains ${vowels} vowels and ${consonants} consonants`;
console.log(vowelsAndConsonantsResult);

// Оптимизированный вариант
// const word = 'hello';
// const vowelsAll = 'aeiou';
// let vowels = 0;
// for (let letter of word) {
//     if (vowelsAll.includes(letter)) {
//         vowels++;
//     }
// }
// let consonants = word.length - vowels;
// console.log(`hello contains ${vowels} vowels and ${consonants} consonants`);

// export { vowelsAndConsonantsResult };
