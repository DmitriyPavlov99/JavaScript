// 4. Напишите функцию которая возвращает длину самого длинного слова в предложении.
// Ваш ответ должен быть числом.
// "The quick brown fox jumped over the lazy dog" => 6

// ########

let sentense = "The quick brown fox jumped over the lazy dog";

function findMaxWordLength(str) {
  var arr = str.split(" ");

  var max = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
    }
  }

  return max;
}

console.log(findMaxWordLength())