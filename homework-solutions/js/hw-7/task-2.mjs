/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word !== "string") {
    return false;
  }
  return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
}
console.log(isPalindrom("2112"));

// function isPalindrom(word) {
//   if (word.toLowerCase() === word.toLowerCase().split('').reverse().join('')) {
//     console.log("Палиндромом");
//   } else {
//     console.log("Не палиндромом");
//   }
// }
// isPalindrom("Радар");

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== "string" || sentence === "") {
    return [];
    }
  let words = sentence.split(/\s+/);
  let maxLength = 0;
  let longestWords = [];
  
  for (let word of words) {
      let length = word.length;
      if (length > maxLength) {
          maxLength = length;
          longestWords = [word];
      } else if (length === maxLength) {
          longestWords.push(word);
      }
  }
  
  return longestWords;
}

export { isPalindrom, findLongestWords };
